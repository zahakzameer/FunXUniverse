// Precompiles JSX to plain JS ahead of time, so a visitor's browser never
// runs Babel — mirrors exactly what babel-standalone does in-browser today
// (JSX -> React.createElement, nothing else), just moved to build time.
//
// Source files are untouched: still author common.jsx and each page's
// inline <script type="text/babel"> block as JSX, same as always. This
// script reads them, compiles them, and writes the result into dist/ —
// dist/ is the thing that actually gets deployed.
'use strict';
const fs = require('fs');
const path = require('path');
const babel = require('@babel/core');

const ROOT = path.join(__dirname, '..');
const DIST = path.join(ROOT, 'dist');
const BABEL_OPTS = { presets: ['@babel/preset-react'], babelrc: false, configFile: false };

// Static assets the site needs at runtime, copied through unchanged.
const COPY_FILES = ['styles.css', 'motion.css', 'motion.js', 'image-slot.js', 'hero-portal.js', '_ds_bundle.js', 'CNAME', '.nojekyll'];
const COPY_DIRS = ['tokens', 'assets', 'videos'];

const BABEL_CDN_RE = /[ \t]*<script src="https:\/\/unpkg\.com\/@babel\/standalone[^"]*"[^>]*><\/script>\r?\n?/;
const COMMON_SRC_RE = /<script type="text\/babel" src="common\.jsx"><\/script>/;
const INLINE_BABEL_RE = /<script type="text\/babel">([\s\S]*?)<\/script>/;

function rimraf(p) { if (fs.existsSync(p)) fs.rmSync(p, { recursive: true, force: true }); }

function compile(source, label) {
  const { code } = babel.transform(source, BABEL_OPTS);
  return code;
}

function buildCommonJs() {
  const src = fs.readFileSync(path.join(ROOT, 'common.jsx'), 'utf8');
  fs.writeFileSync(path.join(DIST, 'common.js'), compile(src, 'common.jsx'));
}

function buildHtmlFile(filename) {
  let html = fs.readFileSync(path.join(ROOT, filename), 'utf8');

  if (!BABEL_CDN_RE.test(html)) {
    throw new Error(`${filename}: expected babel-standalone <script> tag not found — page structure may have changed, aborting build.`);
  }
  html = html.replace(BABEL_CDN_RE, '');

  if (COMMON_SRC_RE.test(html)) {
    html = html.replace(COMMON_SRC_RE, '<script src="common.js"></script>');
  }

  const inlineMatch = html.match(INLINE_BABEL_RE);
  if (!inlineMatch) {
    throw new Error(`${filename}: no inline <script type="text/babel"> block found — aborting build.`);
  }
  const compiled = compile(inlineMatch[1], filename);
  html = html.replace(INLINE_BABEL_RE, `<script>${compiled}</script>`);

  fs.writeFileSync(path.join(DIST, filename), html);
}

function main() {
  rimraf(DIST);
  fs.mkdirSync(DIST, { recursive: true });

  buildCommonJs();

  for (const f of COPY_FILES) {
    const src = path.join(ROOT, f);
    if (fs.existsSync(src)) fs.cpSync(src, path.join(DIST, f));
  }
  for (const d of COPY_DIRS) {
    const src = path.join(ROOT, d);
    if (fs.existsSync(src)) fs.cpSync(src, path.join(DIST, d), { recursive: true });
  }

  const htmlFiles = fs.readdirSync(ROOT).filter((f) => f.endsWith('.html'));
  for (const f of htmlFiles) buildHtmlFile(f);

  console.log(`Built ${htmlFiles.length} pages + common.js -> dist/`);
}

main();
