const NAV_LINKS = [
  { label: 'Shop All', href: 'shop-all.html' },
];

// The 18 real categories from the product catalog — reused by the Shop All
// mega-menu below and by shop-all.html's category filter.
const CATEGORIES = [
  'Action Figures','Baby Toys','Bags & Accessories','Building Blocks','Décor & Lighting','Die-Cast Vehicles',
  'Dolls & Doll Houses','Educational Toys','Fidget & Skill Toys','Games & Puzzles','Household & Lifestyle','Keychains',
  'Musical Toys','Novelty & Gadgets','Outdoor & Sports','Plush Toys','Remote Control Vehicles','Role Play & Pretend Play',
];
window.CATEGORIES = CATEGORIES;

// Pakistan first (primary/launch market), then the rest of the world
// alphabetically — reused by account signup and, later, shipping forms.
const COUNTRIES = [
  'Pakistan',
  'Afghanistan','Albania','Algeria','Argentina','Armenia','Australia','Austria','Azerbaijan',
  'Bahrain','Bangladesh','Belarus','Belgium','Bolivia','Bosnia and Herzegovina','Brazil','Brunei','Bulgaria',
  'Cambodia','Canada','Chile','China','Colombia','Costa Rica','Croatia','Cyprus','Czechia',
  'Denmark','Dominican Republic',
  'Ecuador','Egypt','Estonia','Ethiopia',
  'Finland','France',
  'Georgia','Germany','Ghana','Greece',
  'Hong Kong','Hungary',
  'Iceland','India','Indonesia','Iraq','Ireland','Israel','Italy',
  'Japan','Jordan',
  'Kazakhstan','Kenya','Kuwait',
  'Latvia','Lebanon','Libya','Lithuania','Luxembourg',
  'Malaysia','Maldives','Malta','Mauritius','Mexico','Moldova','Mongolia','Montenegro','Morocco',
  'Nepal','Netherlands','New Zealand','Nigeria','North Macedonia','Norway',
  'Oman',
  'Peru','Philippines','Poland','Portugal',
  'Qatar',
  'Romania','Russia',
  'Saudi Arabia','Serbia','Singapore','Slovakia','Slovenia','South Africa','South Korea','Spain','Sri Lanka','Sweden','Switzerland',
  'Taiwan','Tanzania','Thailand','Tunisia','Turkey',
  'Uganda','Ukraine','United Arab Emirates','United Kingdom','United States','Uruguay','Uzbekistan',
  'Vietnam',
  'Yemen',
  'Zambia','Zimbabwe',
];

// ISO 4217 currency for each COUNTRIES entry — drives auto-detected display
// currency (see useCurrency() below). Eurozone members all map to EUR.
const COUNTRY_CURRENCY = {
  'Pakistan':'PKR','Afghanistan':'AFN','Albania':'ALL','Algeria':'DZD','Argentina':'ARS','Armenia':'AMD','Australia':'AUD','Austria':'EUR','Azerbaijan':'AZN',
  'Bahrain':'BHD','Bangladesh':'BDT','Belarus':'BYN','Belgium':'EUR','Bolivia':'BOB','Bosnia and Herzegovina':'BAM','Brazil':'BRL','Brunei':'BND','Bulgaria':'BGN',
  'Cambodia':'KHR','Canada':'CAD','Chile':'CLP','China':'CNY','Colombia':'COP','Costa Rica':'CRC','Croatia':'EUR','Cyprus':'EUR','Czechia':'CZK',
  'Denmark':'DKK','Dominican Republic':'DOP',
  'Ecuador':'USD','Egypt':'EGP','Estonia':'EUR','Ethiopia':'ETB',
  'Finland':'EUR','France':'EUR',
  'Georgia':'GEL','Germany':'EUR','Ghana':'GHS','Greece':'EUR',
  'Hong Kong':'HKD','Hungary':'HUF',
  'Iceland':'ISK','India':'INR','Indonesia':'IDR','Iraq':'IQD','Ireland':'EUR','Israel':'ILS','Italy':'EUR',
  'Japan':'JPY','Jordan':'JOD',
  'Kazakhstan':'KZT','Kenya':'KES','Kuwait':'KWD',
  'Latvia':'EUR','Lebanon':'LBP','Libya':'LYD','Lithuania':'EUR','Luxembourg':'EUR',
  'Malaysia':'MYR','Maldives':'MVR','Malta':'EUR','Mauritius':'MUR','Mexico':'MXN','Moldova':'MDL','Mongolia':'MNT','Montenegro':'EUR','Morocco':'MAD',
  'Nepal':'NPR','Netherlands':'EUR','New Zealand':'NZD','Nigeria':'NGN','North Macedonia':'MKD','Norway':'NOK',
  'Oman':'OMR',
  'Peru':'PEN','Philippines':'PHP','Poland':'PLN','Portugal':'EUR',
  'Qatar':'QAR',
  'Romania':'RON','Russia':'RUB',
  'Saudi Arabia':'SAR','Serbia':'RSD','Singapore':'SGD','Slovakia':'EUR','Slovenia':'EUR','South Africa':'ZAR','South Korea':'KRW','Spain':'EUR','Sri Lanka':'LKR','Sweden':'SEK','Switzerland':'CHF',
  'Taiwan':'TWD','Tanzania':'TZS','Thailand':'THB','Tunisia':'TND','Turkey':'TRY',
  'Uganda':'UGX','Ukraine':'UAH','United Arab Emirates':'AED','United Kingdom':'GBP','United States':'USD','Uruguay':'UYU','Uzbekistan':'UZS',
  'Vietnam':'VND',
  'Yemen':'YER',
  'Zambia':'ZMW','Zimbabwe':'ZWL',
};

// Maps a browser locale region subtag (the part after the dash, e.g. 'US' in
// 'en-US') to a currency, for visitors we've never seen a profile.country
// for yet. Deliberately small — just enough for the major regions likely to
// hit this site — falls back to PKR for anything not listed.
const LOCALE_REGION_CURRENCY = {
  US:'USD', GB:'GBP', CA:'CAD', AU:'AUD', NZ:'NZD',
  IN:'INR', PK:'PKR', BD:'BDT', LK:'LKR', NP:'NPR',
  AE:'AED', SA:'SAR', QA:'QAR', KW:'KWD', BH:'BHD', OM:'OMR',
  DE:'EUR', FR:'EUR', ES:'EUR', IT:'EUR', NL:'EUR', IE:'EUR', PT:'EUR', BE:'EUR', AT:'EUR', FI:'EUR', GR:'EUR',
  JP:'JPY', CN:'CNY', SG:'SGD', MY:'MYR', HK:'HKD', KR:'KRW', TH:'THB', PH:'PHP', ID:'IDR', VN:'VND',
  ZA:'ZAR', NG:'NGN', KE:'KES', EG:'EGP',
  BR:'BRL', MX:'MXN',
  TR:'TRY', RU:'RUB',
};

// Drives the shipping-address form's region/postal-code labels (account.html).
// Deliberately small — the countries where a generic "State / Region" +
// "Postal code" label would read oddly to a local customer — everything
// else falls back to that generic pair below. `postal: null` means the
// country has no meaningful postal-code system, so the field is hidden
// entirely rather than shown as a pointless required-looking blank.
const COUNTRY_ADDRESS_HINTS = {
  'Pakistan': { region: 'Province', postal: 'Postal code' },
  'United States': { region: 'State', postal: 'ZIP code' },
  'Canada': { region: 'Province', postal: 'Postal code' },
  'United Kingdom': { region: 'County', postal: 'Postcode' },
  'Australia': { region: 'State / Territory', postal: 'Postcode' },
  'India': { region: 'State', postal: 'PIN code' },
  'United Arab Emirates': { region: 'Emirate', postal: null },
  'Saudi Arabia': { region: 'Region', postal: 'Postal code' },
  'Qatar': { region: 'Zone', postal: null },
  'Kuwait': { region: 'Governorate', postal: 'Postal code' },
  'Bahrain': { region: 'Governorate', postal: 'Postal code' },
  'Oman': { region: 'Governorate', postal: 'Postal code' },
  'Japan': { region: 'Prefecture', postal: 'Postal code' },
  'China': { region: 'Province', postal: 'Postal code' },
  'Germany': { region: 'State', postal: 'Postal code' },
  'Ireland': { region: 'County', postal: 'Eircode' },
  'Bangladesh': { region: 'Division', postal: 'Postal code' },
  'Sri Lanka': { region: 'Province', postal: 'Postal code' },
  'Nepal': { region: 'Province', postal: 'Postal code' },
  'Malaysia': { region: 'State', postal: 'Postal code' },
  'Brazil': { region: 'State', postal: 'CEP' },
  'Mexico': { region: 'State', postal: 'Postal code' },
};
const DEFAULT_ADDRESS_HINT = { region: 'State / Region', postal: 'Postal code' };
function getAddressHint(country){
  return COUNTRY_ADDRESS_HINTS[country] || DEFAULT_ADDRESS_HINT;
}
window.getAddressHint = getAddressHint;

function categoryLink(label){ return [label, `shop-all.html?category=${encodeURIComponent(label)}`]; }

const NAV_MENUS = {
  'Shop All': { cols: [
    { title:'A – D', links: CATEGORIES.slice(0,6).map(categoryLink) },
    { title:'D – K', links: CATEGORIES.slice(6,12).map(categoryLink) },
    { title:'M – R', links: CATEGORIES.slice(12,18).map(categoryLink) },
  ], feature: { label:'Shop the Full Collection', sub:'72 products across 18 categories', href:'shop-all.html', img:'https://picsum.photos/seed/funx-shop-all/640/480' } },
};

const ICONS = {
  search: <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>,
  heart: <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg>,
  user: <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 20c1.6-3.8 4.8-6 8-6s6.4 2.2 8 6"/></svg>,
  cart: <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3h2l2.4 12.4a2 2 0 002 1.6h8.4a2 2 0 002-1.6L21 8H6"/><circle cx="9" cy="20" r="1"/><circle cx="18" cy="20" r="1"/></svg>,
  sun: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="12" cy="12" r="4.5"/><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/></svg>,
  moon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z"/></svg>,
  chevron: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6"/></svg>,
  menu: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M3 6h18M3 12h18M3 18h18"/></svg>,
  star: (filled) => <svg width="13" height="13" viewBox="0 0 24 24" fill={filled ? 'var(--paint-yellow)' : 'none'} stroke="var(--paint-yellow)" strokeWidth="1.5"><path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.9L12 17.8 5.8 21l1.2-6.9-5-4.9 6.9-1z"/></svg>,
  instagram: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1"/></svg>,
  facebook: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M15 8.5h2V5h-2a4 4 0 0 0-4 4v2H9v3.5h2V21h3v-6.5h2.4l.6-3.5H14v-1.5c0-.55.45-1 1-1z"/></svg>,
  tiktok: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M14 4v10.5a3.5 3.5 0 1 1-3.5-3.5"/><path d="M14 4c.4 2.2 2 4 4.5 4.3"/></svg>,
  mail: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 6.5l9 6 9-6"/></svg>,
  phone: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h4l2 5-2.5 1.5a12 12 0 0 0 6 6L15 14l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 2 6a2 2 0 0 1 2-2z"/></svg>,
  pin: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s7-6.6 7-11.5A7 7 0 0 0 5 9.5C5 14.4 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.4"/></svg>,
};

const SOCIAL_LINKS = [
  { label: 'Instagram', href: 'https://instagram.com/thefunxuniverse', icon: 'instagram' },
  { label: 'Facebook', href: 'https://facebook.com/thefunxuniverse', icon: 'facebook' },
  { label: 'TikTok', href: 'https://tiktok.com/@thefunxuniverse', icon: 'tiktok' },
];

// Text genuinely reused across shared components (Header, CartDrawer, auth
// forms, Footer, ProductCard) — the components every page renders, so this
// is where a future translation pass would start. Per-page marketing copy
// (hero headlines, About-page prose, etc.) stays where it is — translating
// that for real needs actual localization, not just a moved string.
const STRINGS = {
  nav: { search:'Search', wishlist:'Wishlist', cart:'Cart', login:'Login', currency:'Currency' },
  cart: {
    title: 'Added to Your Collection',
    empty: 'Your collection is empty.',
    qty: (n) => `Qty ${n}`,
    subtotal: 'Subtotal',
    viewCart: 'View Cart',
    continueShopping: 'Continue Shopping',
  },
  auth: {
    signIn: 'Sign In',
    createAccount: 'Create Account',
    signingIn: 'Signing in…',
    creatingAccount: 'Creating account…',
    emailLabel: 'Email',
    emailPlaceholder: 'you@example.com',
    passwordLabel: 'Password',
    passwordPlaceholder: '••••••••',
    confirmPasswordLabel: 'Confirm password',
    confirmPasswordPlaceholder: 'Re-enter your password',
    fullNameLabel: 'Full name',
    fullNamePlaceholder: 'Jordan Rivera',
    countryLabel: 'Country',
    signupPasswordPlaceholder: 'At least 8 characters',
    rememberMe: 'Keep me signed in',
    forgotPassword: 'Forgot password?',
    termsNotice: 'By creating an account you agree to our Terms and Privacy Policy.',
    signInToSave: 'Sign in to save items',
    collectorsCircle: "Collector's Circle",
    checkEmail: 'Check your email',
    checkEmailBody: "We've sent a confirmation link — verify your email, then sign in to save this item (it won't save automatically until you do).",
    backToSignIn: 'Back to Sign In',
  },
  product: {
    quickAdd: 'Quick Add',
    outOfStock: 'Out of Stock',
    onlyNLeft: (n) => `Only ${n} left`,
  },
  footer: {
    stayInLoop: 'Stay in the loop',
    newsletterSub: 'New drops and provenance stories, monthly.',
    join: 'Join',
    subscribed: '✓ Subscribed — welcome to the Circle.',
    terms: 'Terms',
    privacy: 'Privacy',
  },
};
window.STRINGS = STRINGS;

function AnnouncementBar() {
  return null;
}

function getCart(){ try{ return JSON.parse(localStorage.getItem('funx_cart')||'[]'); }catch(e){ return []; } }
function saveCart(items){ localStorage.setItem('funx_cart', JSON.stringify(items)); window.dispatchEvent(new Event('funx-cart-updated')); }
function addToCart(id, qty){
  qty = qty || 1;
  const items = getCart();
  const existing = items.find(i => i.id === id);
  if (existing) existing.qty += qty; else items.push({ id, qty });
  saveCart(items);
  window.dispatchEvent(new CustomEvent('funx-cart-open', { detail:{ id, qty } }));
  return items;
}
function cartCount(){ return getCart().reduce((s,i)=>s+i.qty,0); }

function useCartCount(){
  const [count,setCount] = React.useState(0);
  React.useEffect(()=>{
    const update = () => setCount(cartCount());
    update();
    window.addEventListener('funx-cart-updated', update);
    window.addEventListener('storage', update);
    return () => { window.removeEventListener('funx-cart-updated', update); window.removeEventListener('storage', update); };
  },[]);
  return count;
}

function CartDrawer(){
  const { Button } = window.FunXDesignSystem_bbd8ae;
  const [open,setOpen] = React.useState(false);
  const [items,setItems] = React.useState([]);
  const [justAdded,setJustAdded] = React.useState(null);
  React.useEffect(()=>{
    const onOpen = (e) => {
      setItems(window.getCart());
      setJustAdded(e.detail ? e.detail.id : null);
      setOpen(true);
    };
    const onUpdate = () => setItems(window.getCart());
    window.addEventListener('funx-cart-open', onOpen);
    window.addEventListener('funx-cart-updated', onUpdate);
    return () => { window.removeEventListener('funx-cart-open', onOpen); window.removeEventListener('funx-cart-updated', onUpdate); };
  },[]);
  React.useEffect(()=>{
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  },[open]);
  const cart = items.map(i => ({...i, p: window.PRODUCTS.find(p=>p.id===i.id)})).filter(i=>i.p);
  const subtotal = cart.reduce((s,i)=>s+(i.p.salePrice||i.p.price)*i.qty,0);
  return <React.Fragment>
    <div onClick={()=>setOpen(false)} style={{position:'fixed',inset:0,background:'rgba(0,0,0,0.55)',zIndex:98,opacity:open?1:0,pointerEvents:open?'auto':'none',transition:'opacity .3s ease'}}></div>
    <div style={{position:'fixed',top:0,right:0,bottom:0,width:400,maxWidth:'92vw',background:'var(--surface-panel)',borderLeft:'1px solid var(--border-hairline)',zIndex:99,display:'flex',flexDirection:'column',transform: open ? 'translateX(0)' : 'translateX(100%)',transition:'transform .38s cubic-bezier(.16,.84,.44,1)',boxShadow:'-20px 0 60px rgba(0,0,0,0.4)'}}>
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'22px 24px',borderBottom:'1px solid var(--border-hairline-soft)'}}>
        <h3 style={{fontSize:17,fontWeight:700,margin:0}}>{STRINGS.cart.title}</h3>
        <button onClick={()=>setOpen(false)} aria-label="Close cart" style={{cursor:'pointer',color:'var(--text-muted)',fontSize:20,lineHeight:1,background:'none',border:'none',padding:0,font:'inherit'}}>×</button>
      </div>
      <div style={{flex:1,overflowY:'auto',padding:'8px 24px'}}>
        {cart.length === 0 ? <p style={{color:'var(--text-muted)',fontSize:14,marginTop:32}}>{STRINGS.cart.empty}</p> : cart.map(item => <div key={item.id} style={{display:'flex',gap:14,padding:'16px 0',borderBottom:'1px solid var(--border-hairline-soft)',background: item.id===justAdded ? 'var(--surface-card-raised)' : 'transparent',borderRadius:8}}>
          <div style={{width:64,height:64,flexShrink:0,borderRadius:'var(--radius-md)',overflow:'hidden',background:'var(--surface-gallery)',color:'var(--text-ink)',border:'1px solid var(--border-gallery)'}}>
            {item.p.images && item.p.images[0] ? <img src={item.p.images[0]} alt={item.p.name} style={{width:'100%',height:'100%',objectFit:'cover'}}/> : <image-slot id={`drawer-${item.p.id}`} style={{width:'100%',height:'100%'}} placeholder={`Photo of ${item.p.name}`}></image-slot>}
          </div>
          <div style={{flex:1,minWidth:0}}>
            <div style={{fontSize:14,fontWeight:600,marginBottom:4}}>{item.p.name}</div>
            <div style={{fontSize:12,color:'var(--text-muted)'}}>{STRINGS.cart.qty(item.qty)}</div>
          </div>
          <div style={{fontSize:14,fontWeight:700,color:'var(--paint-orange)',whiteSpace:'nowrap'}}>{window.fmtPrice((item.p.salePrice||item.p.price)*item.qty)}</div>
        </div>)}
      </div>
      {cart.length > 0 && <div style={{padding:'20px 24px',borderTop:'1px solid var(--border-hairline-soft)'}}>
        <div style={{display:'flex',justifyContent:'space-between',fontSize:15,fontWeight:700,marginBottom:16}}><span>{STRINGS.cart.subtotal}</span><span>{window.fmtPrice(subtotal)}</span></div>
        <div style={{display:'flex',flexDirection:'column',gap:10}}>
          <Button variant="primary" size="lg" onClick={()=>location.href='cart.html'} style={{width:'100%'}}>{STRINGS.cart.viewCart}</Button>
          <Button variant="secondary" size="md" onClick={()=>setOpen(false)} style={{width:'100%'}}>{STRINGS.cart.continueShopping}</Button>
        </div>
      </div>}
    </div>
  </React.Fragment>;
}

function NavItem({ l, active }){
  const [open,setOpen] = React.useState(false);
  const timer = React.useRef(null);
  const menu = NAV_MENUS[l.label];
  const onEnter = () => { clearTimeout(timer.current); setOpen(true); };
  const onLeave = () => { timer.current = setTimeout(()=>setOpen(false), 120); };
  return <div onMouseEnter={onEnter} onMouseLeave={onLeave} style={{position:'relative'}}>
    <a href={l.href} style={{fontSize:'var(--nav-link-size)',fontWeight:'var(--nav-link-weight)',color:l.label===active?'var(--text-primary)':'var(--text-secondary)',textDecoration:'none',position:'relative',paddingBottom:4,borderBottom:l.label===active?'2px solid var(--paint-orange)':'2px solid transparent',display:'inline-block'}}>{l.label}</a>
    {menu && <div style={{position:'fixed',left:0,right:0,top:80,zIndex:29,opacity:open?1:0,visibility:open?'visible':'hidden',transform:open?'translateY(0)':'translateY(-6px)',transition:'opacity .2s ease, transform .2s ease',background:'rgba(14,14,16,0.98)',backdropFilter:'blur(14px)',borderBottom:'1px solid var(--border-hairline-soft)',boxShadow:'0 24px 48px rgba(0,0,0,0.4)'}}>
      <div style={{maxWidth:1280,margin:'0 auto',padding:'48px',display:'grid',gridTemplateColumns:`repeat(${menu.cols.length},1fr) 1.4fr`,gap:56}}>
        {menu.cols.map(col => <div key={col.title}>
          <div style={{fontSize:13,letterSpacing:0.2,fontWeight:400,color:'var(--text-muted)',marginBottom:20}}>{col.title}</div>
          <div style={{display:'flex',flexDirection:'column',gap:16}}>
            {col.links.map(([label,href]) => <a key={label} href={href} style={{fontSize:15,fontWeight:500,color:'var(--text-secondary)',textDecoration:'none'}}>{label}</a>)}
          </div>
        </div>)}
        <a href={menu.feature.href} style={{display:'flex',gap:16,textDecoration:'none',alignItems:'center',borderRadius:'var(--radius-lg)',overflow:'hidden',background:'var(--surface-panel)',border:'1px solid var(--border-hairline-soft)',padding:12}}>
          <img src={menu.feature.img} alt={menu.feature.label} style={{width:96,height:96,objectFit:'cover',borderRadius:'var(--radius-md)',flexShrink:0}}/>
          <div>
            <div style={{fontSize:11,letterSpacing:1,color:'var(--paint-orange)',textTransform:'uppercase',fontWeight:700,marginBottom:4}}>Featured</div>
            <div style={{fontSize:15,fontWeight:600,color:'var(--text-primary)',marginBottom:4}}>{menu.feature.label}</div>
            <div style={{fontSize:13,color:'var(--text-muted)'}}>{menu.feature.sub}</div>
          </div>
        </a>
      </div>
    </div>}
  </div>;
}

function useTheme(){
  const [theme,setThemeState] = React.useState(()=>localStorage.getItem('funx_theme')||'dark');
  React.useEffect(()=>{ document.documentElement.setAttribute('data-theme', theme); },[theme]);
  const setTheme = (t) => { localStorage.setItem('funx_theme', t); setThemeState(t); };
  return [theme, setTheme];
}
if (typeof window !== 'undefined') document.documentElement.setAttribute('data-theme', localStorage.getItem('funx_theme')||'dark');

const MOBILE_BREAKPOINT = 860;
function useIsMobile(){
  const [isMobile,setIsMobile] = React.useState(()=> typeof window !== 'undefined' && window.innerWidth < MOBILE_BREAKPOINT);
  React.useEffect(()=>{
    const onResize = () => setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  },[]);
  return isMobile;
}
window.useIsMobile = useIsMobile;

function ThemeToggle(){
  const [theme,setTheme] = useTheme();
  const label = theme==='light'?'Switch to dark mode':'Switch to light mode';
  return <button onClick={()=>setTheme(theme==='light'?'dark':'light')} style={{cursor:'pointer',display:'flex',color:'inherit',background:'none',border:'none',padding:0}} title={label} aria-label={label}>{theme==='light'?ICONS.moon:ICONS.sun}</button>;
}

const DISPLAY_CURRENCIES = ['PKR','USD','EUR','GBP','AUD','CAD','AED','SAR','INR'];

function CurrencySwitcher(){
  // A plain <select> — a real form control, keyboard-accessible by
  // default, no extra ARIA wiring needed unlike the span-based toggles
  // elsewhere in this header.
  return <select value={getCurrentCurrency()} onChange={(e)=>window.setCurrency(e.target.value)} title={STRINGS.nav.currency} style={{background:'transparent',color:'inherit',border:'none',fontSize:13,fontWeight:600,cursor:'pointer',fontFamily:'inherit'}}>
    {DISPLAY_CURRENCIES.map(c => <option key={c} value={c} style={{color:'#141416'}}>{c}</option>)}
  </select>;
}

function AccountLink(){
  const session = useSession();
  const linkStyle = {cursor:'pointer',display:'flex',alignItems:'center',gap:6,color:'inherit'};
  if (!session) return <a href="account.html" style={linkStyle} title={STRINGS.nav.login}>{ICONS.user}<span style={{fontSize:13,fontWeight:600}}>{STRINGS.nav.login}</span></a>;
  const meta = session.user.user_metadata || {};
  const firstName = (meta.name || session.user.email.split('@')[0]).split(' ')[0];
  return <a href="account.html" style={linkStyle} title={session.user.email}>{ICONS.user}<span style={{fontSize:13,fontWeight:600}}>{firstName}</span></a>;
}

/* ── Shared auth forms ─────────────────────────────────────────────────────
   Used by account.html's full sign-in/signup page AND the AuthPromptDialog
   below (triggered when a signed-out visitor tries to wishlist something).
   Kept in one place instead of two copies so an auth bug only needs fixing
   once. */
function ModeSwitch({ mode, setMode }){
  return <div style={{display:'flex',borderRadius:'var(--radius-md)',background:'var(--surface-panel)',border:'1px solid var(--border-hairline)',padding:4,marginBottom:32}}>
    {['sign-in','create'].map(m => <div key={m} onClick={()=>setMode(m)} style={{flex:1,textAlign:'center',padding:'10px 0',borderRadius:'var(--radius-sm)',cursor:'pointer',fontSize:14,fontWeight:600,background:mode===m?'var(--color-primary)':'transparent',color:mode===m?'#fff':'var(--text-secondary)',transition:'background var(--duration-fast)'}}>{m==='sign-in'?STRINGS.auth.signIn:STRINGS.auth.createAccount}</div>)}
  </div>;
}

function SignInForm({ onSuccess }){
  const { Input, Button, Checkbox } = window.FunXDesignSystem_bbd8ae;
  const [form,setForm] = React.useState({email:'',password:'',remember:true});
  const [error,setError] = React.useState('');
  const [pending,setPending] = React.useState(false);
  const update = (k) => (e) => setForm({...form,[k]: e.target.type==='checkbox' ? e.target.checked : e.target.value});

  const submit = (e) => {
    e.preventDefault();
    setError(''); setPending(true);
    // Read by the storage adapter (above) on the very next auth write — must
    // be set before signInWithPassword actually persists the token.
    localStorage.setItem('funx_remember_me', form.remember ? 'true' : 'false');
    supabaseClient.auth.signInWithPassword({ email: form.email, password: form.password }).then(({ error }) => {
      setPending(false);
      // Supabase's own "Invalid login credentials" is already generic by
      // design (doesn't say which of email/password was wrong) — shown as-is.
      if (error) { setError(error.message); return; }
      onSuccess();
    });
  };

  return <form onSubmit={submit} style={{display:'flex',flexDirection:'column',gap:20}}>
    <Input label={STRINGS.auth.emailLabel} type="email" placeholder={STRINGS.auth.emailPlaceholder} value={form.email} onChange={update('email')} required/>
    <Input label={STRINGS.auth.passwordLabel} type="password" placeholder={STRINGS.auth.passwordPlaceholder} value={form.password} onChange={update('password')} required/>
    <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:24,fontSize:13}}>
      <Checkbox label={STRINGS.auth.rememberMe} checked={form.remember} onChange={update('remember')}/>
      <a href="forgot-password.html" style={{color:'var(--text-link)'}}>{STRINGS.auth.forgotPassword}</a>
    </div>
    {error && <div style={{fontSize:13,color:'var(--color-error)'}}>{error}</div>}
    <Button variant="primary" size="lg" disabled={pending}>{pending ? STRINGS.auth.signingIn : STRINGS.auth.signIn}</Button>
  </form>;
}

function CreateForm({ onSignedUp }){
  const { Input, Button, Select } = window.FunXDesignSystem_bbd8ae;
  const [form,setForm] = React.useState({name:'',email:'',password:'',confirm:'',country:'Pakistan'});
  const [error,setError] = React.useState('');
  const [pending,setPending] = React.useState(false);
  const update = (k) => (e) => setForm({...form,[k]:e.target.value});

  const submit = (e) => {
    e.preventDefault();
    setError('');
    if (form.password.length < 8) { setError('Password must be at least 8 characters.'); return; }
    if (form.password !== form.confirm) { setError("Passwords don't match."); return; }
    setPending(true);
    supabaseClient.auth.signUp({
      email: form.email,
      password: form.password,
      options: { data: { name: form.name, country: form.country } },
    }).then(({ data, error }) => {
      setPending(false);
      if (error) {
        setError(/already registered|already exists|user already/i.test(error.message)
          ? 'This email is already registered — try signing in instead.'
          : error.message);
        return;
      }
      // Projects with "Confirm email" turned off return an active session
      // immediately; otherwise data.session is null until the email link is
      // clicked — the caller decides what each case means for it.
      onSignedUp(!!data.session);
    });
  };

  return <form onSubmit={submit} style={{display:'flex',flexDirection:'column',gap:20}}>
    <Input label={STRINGS.auth.fullNameLabel} placeholder={STRINGS.auth.fullNamePlaceholder} value={form.name} onChange={update('name')} required/>
    <Input label={STRINGS.auth.emailLabel} type="email" placeholder={STRINGS.auth.emailPlaceholder} value={form.email} onChange={update('email')} required/>
    <Select label={STRINGS.auth.countryLabel} value={form.country} onChange={update('country')} options={COUNTRIES}/>
    <Input label={STRINGS.auth.passwordLabel} type="password" placeholder={STRINGS.auth.signupPasswordPlaceholder} value={form.password} onChange={update('password')} required/>
    <Input label={STRINGS.auth.confirmPasswordLabel} type="password" placeholder={STRINGS.auth.confirmPasswordPlaceholder} value={form.confirm} onChange={update('confirm')} required/>
    {error && <div style={{fontSize:13,color:'var(--color-error)'}}>{error}</div>}
    <Button variant="primary" size="lg" disabled={pending}>{pending ? STRINGS.auth.creatingAccount : STRINGS.auth.createAccount}</Button>
    <p style={{fontSize:12,color:'var(--text-muted)',lineHeight:1.6,margin:0}}>{STRINGS.auth.termsNotice}</p>
  </form>;
}

/* ── Wishlist ──────────────────────────────────────────────────────────────
   Same event-driven pattern as CartDrawer above (funx-cart-open /
   funx-cart-updated): a global dialog rendered once inside Header, driven
   by a custom event, rather than every page having to know about it. */
function useWishlist(){
  const session = useSession();
  const [ids,setIds] = React.useState(new Set());

  const load = React.useCallback(() => {
    if (!session) { setIds(new Set()); return; }
    supabaseClient.from('wishlists').select('product_id').eq('user_id', session.user.id).then(({ data }) => {
      setIds(new Set((data||[]).map(r=>r.product_id)));
    });
  }, [session && session.user.id]);
  React.useEffect(load, [load]);

  const actuallyToggle = (productId) => {
    if (ids.has(productId)) {
      setIds(prev => { const next = new Set(prev); next.delete(productId); return next; });
      supabaseClient.from('wishlists').delete().eq('user_id', session.user.id).eq('product_id', productId)
        .then(({ error }) => { if (error) load(); });
    } else {
      setIds(prev => new Set(prev).add(productId));
      supabaseClient.from('wishlists').insert({ user_id: session.user.id, product_id: productId })
        .then(({ error }) => { if (error) load(); });
    }
  };

  const toggle = (productId) => {
    if (!session) {
      window.dispatchEvent(new CustomEvent('funx-auth-required', { detail: { onSuccess: () => actuallyToggle(productId) } }));
      return;
    }
    actuallyToggle(productId);
  };

  return { isWishlisted: (id) => ids.has(id), toggle };
}
window.useWishlist = useWishlist;

function AuthPromptDialog(){
  const { Card, Button, Dialog } = window.FunXDesignSystem_bbd8ae;
  const [open,setOpen] = React.useState(false);
  const [mode,setMode] = React.useState('sign-in');
  const [needsConfirmation,setNeedsConfirmation] = React.useState(false);
  const pendingRef = React.useRef(null);

  React.useEffect(() => {
    const onRequired = (e) => {
      pendingRef.current = e.detail && e.detail.onSuccess;
      setMode('sign-in'); setNeedsConfirmation(false); setOpen(true);
    };
    window.addEventListener('funx-auth-required', onRequired);
    return () => window.removeEventListener('funx-auth-required', onRequired);
  }, []);

  const close = () => setOpen(false);
  const handleSignedIn = () => { close(); if (pendingRef.current) pendingRef.current(); };
  const handleSignedUp = (hasSession) => { if (hasSession) { handleSignedIn(); } else { setNeedsConfirmation(true); } };

  return <Dialog open={open} title="" onClose={close}>
    <Card variant="dark" padding="lg" style={{width:400,maxWidth:'90vw'}}>
      {needsConfirmation ? <div style={{textAlign:'center',padding:'12px 0'}}>
        <div style={{fontSize:36,marginBottom:14,color:'var(--color-success)'}}>✓</div>
        <h3 style={{fontFamily:'var(--font-display)',fontStyle:'italic',fontSize:22,margin:'0 0 10px'}}>{STRINGS.auth.checkEmail}</h3>
        <p style={{color:'var(--text-muted)',fontSize:14,marginBottom:20}}>{STRINGS.auth.checkEmailBody}</p>
        <Button variant="secondary" size="md" onClick={()=>{setNeedsConfirmation(false);setMode('sign-in');}}>{STRINGS.auth.backToSignIn}</Button>
      </div> : <>
        <div style={{textAlign:'center',marginBottom:24}}>
          <div style={{fontSize:12,letterSpacing:2,fontWeight:700,color:'var(--accent-cyan)',textTransform:'uppercase',marginBottom:10}}>{STRINGS.auth.collectorsCircle}</div>
          <h3 style={{fontFamily:'var(--font-display)',fontStyle:'italic',fontWeight:800,fontSize:26,margin:0}}>{STRINGS.auth.signInToSave}</h3>
        </div>
        <ModeSwitch mode={mode} setMode={setMode}/>
        {mode==='sign-in' ? <SignInForm onSuccess={handleSignedIn}/> : <CreateForm onSignedUp={handleSignedUp}/>}
      </>}
    </Card>
  </Dialog>;
}

function MobileNavPanel({ open, onClose, active }){
  React.useEffect(()=>{
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  },[open, onClose]);
  return <React.Fragment>
    <div onClick={onClose} style={{position:'fixed',inset:0,background:'rgba(0,0,0,0.55)',zIndex:98,opacity:open?1:0,pointerEvents:open?'auto':'none',transition:'opacity .3s ease'}}></div>
    <div style={{position:'fixed',top:0,left:0,bottom:0,width:320,maxWidth:'86vw',background:'var(--surface-panel)',borderRight:'1px solid var(--border-hairline)',zIndex:99,display:'flex',flexDirection:'column',overflowY:'auto',transform: open ? 'translateX(0)' : 'translateX(-100%)',transition:'transform .38s cubic-bezier(.16,.84,.44,1)',boxShadow:'20px 0 60px rgba(0,0,0,0.4)'}}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'22px 24px',borderBottom:'1px solid var(--border-hairline-soft)'}}>
        <img src="assets/logo.svg" alt="The FunX Universe" style={{height:28}}/>
        <button onClick={onClose} aria-label="Close menu" style={{background:'none',border:'none',color:'var(--text-muted)',fontSize:22,lineHeight:1,cursor:'pointer',padding:0}}>×</button>
      </div>
      <nav style={{display:'flex',flexDirection:'column',padding:'8px 24px 0'}}>
        {NAV_LINKS.map(l => <a key={l.label} href={l.href} onClick={onClose} style={{padding:'14px 0',borderBottom:'1px solid var(--border-hairline-soft)',fontSize:16,fontWeight:600,color:l.label===active?'var(--text-primary)':'var(--text-secondary)',textDecoration:'none'}}>{l.label}</a>)}
      </nav>
      <div style={{display:'flex',flexDirection:'column',padding:'16px 24px',gap:18}}>
        <a href="search.html" onClick={onClose} style={{display:'flex',alignItems:'center',gap:12,color:'var(--text-secondary)',textDecoration:'none',fontSize:14,fontWeight:600}}>{ICONS.search}{STRINGS.nav.search}</a>
        <a href="wishlist.html" onClick={onClose} style={{display:'flex',alignItems:'center',gap:12,color:'var(--text-secondary)',textDecoration:'none',fontSize:14,fontWeight:600}}>{ICONS.heart}{STRINGS.nav.wishlist}</a>
        <AccountLink/>
      </div>
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'20px 24px',borderTop:'1px solid var(--border-hairline-soft)',marginTop:'auto'}}>
        <CurrencySwitcher/>
        <ThemeToggle/>
      </div>
    </div>
  </React.Fragment>;
}

function Header({ active }) {
  const cartQty = useCartCount();
  const isMobile = useIsMobile();
  const [menuOpen,setMenuOpen] = React.useState(false);
  React.useEffect(()=>{ if (!isMobile) setMenuOpen(false); },[isMobile]);
  return <header style={{position:'sticky',top:0,zIndex:30,fontFamily:'var(--font-body)'}}>
    <AnnouncementBar/>
    <CartDrawer/>
    <AuthPromptDialog/>
    {isMobile && <MobileNavPanel open={menuOpen} onClose={()=>setMenuOpen(false)} active={active}/>}
    <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',height:80,padding: isMobile ? '0 20px' : '0 40px',background:'rgba(11,11,13,0.86)',backdropFilter:'blur(10px)',borderBottom:'1px solid var(--border-hairline-soft)'}}>
      <div style={{display:'flex',alignItems:'center',gap:16}}>
        {isMobile && <button onClick={()=>setMenuOpen(true)} aria-label="Open menu" style={{display:'flex',color:'inherit',background:'none',border:'none',cursor:'pointer',padding:0}}>{ICONS.menu}</button>}
        <a href="index.html" style={{display:'flex',alignItems:'center'}}><img src="assets/logo.svg" alt="The FunX Universe" style={{height:34}}/></a>
      </div>
      {!isMobile && <nav style={{display:'flex',gap:36}}>
        {NAV_LINKS.map(l => <NavItem key={l.label} l={l} active={active}/>)}
      </nav>}
      <div style={{display:'flex',gap:22,alignItems:'center',color:'var(--text-secondary)'}}>
        {!isMobile && <CurrencySwitcher/>}
        {!isMobile && <ThemeToggle/>}
        {!isMobile && <a href="search.html" style={{cursor:'pointer',display:'flex',color:'inherit'}} title={STRINGS.nav.search}>{ICONS.search}</a>}
        {!isMobile && <a href="wishlist.html" style={{cursor:'pointer',display:'flex',color:'inherit'}} title={STRINGS.nav.wishlist}>{ICONS.heart}</a>}
        {!isMobile && <AccountLink/>}
        <a href="cart.html" style={{cursor:'pointer',display:'flex',color:'inherit',position:'relative'}} title={STRINGS.nav.cart}>{ICONS.cart}{cartQty > 0 && <span style={{position:'absolute',top:-7,right:-9,background:'var(--color-primary)',color:'#fff',fontSize:9,fontWeight:700,minWidth:15,height:15,padding:'0 3px',borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center'}}>{cartQty}</span>}</a>
      </div>
    </div>
  </header>;
}

function Footer() {
  const [email,setEmail] = React.useState('');
  const [subscribed,setSubscribed] = React.useState(false);
  const cols = [
    ['Shop', [['Shop All','shop-all.html'], categoryLink('Action Figures'), categoryLink('Building Blocks'), categoryLink('Educational Toys'), categoryLink('Remote Control Vehicles')]],
    ['The Universe', [['Provenance','provenance.html'],['Authentication','authentication.html'],['Our Story','story.html'],['Press','press.html']]],
    ['Support', [['Shipping','shipping.html'],['Returns','returns.html'],['Track Order','track-order.html'],['Contact','contact.html']]],
  ];
  return <footer style={{background:'var(--surface-sunken)',borderTop:'1px solid var(--border-hairline-soft)',padding:'64px 40px 32px',fontFamily:'var(--font-body)',color:'var(--text-muted)'}}>
    <div style={{display:'grid',gridTemplateColumns:'1.7fr repeat(3,1fr) 1.2fr',gap:32,maxWidth:1280,margin:'0 auto'}}>
      <div>
        <img src="assets/logo-mark.svg" alt="The FunX Universe" style={{height:36,marginBottom:14}}/>
        <p style={{fontSize:13,maxWidth:220,lineHeight:1.6,marginBottom:16}}>Every toy has a story. We just help you find it.</p>
        <div style={{display:'flex',gap:12,marginBottom:20}}>
          {SOCIAL_LINKS.map(s => <a key={s.label} href={s.href} target="_blank" rel="noopener" aria-label={s.label} style={{width:34,height:34,borderRadius:'50%',border:'1px solid var(--border-hairline)',display:'flex',alignItems:'center',justifyContent:'center',color:'var(--text-secondary)',textDecoration:'none'}}>{ICONS[s.icon]}</a>)}
        </div>
        <div style={{display:'flex',flexDirection:'column',gap:10,fontSize:13}}>
          <a href="mailto:thefunxuniverse@gmail.com" style={{display:'flex',alignItems:'center',gap:8,color:'var(--text-muted)',textDecoration:'none'}}>{ICONS.mail}thefunxuniverse@gmail.com</a>
          <a href="tel:+923275347075" style={{display:'flex',alignItems:'center',gap:8,color:'var(--text-muted)',textDecoration:'none'}}>{ICONS.phone}+92 327 5347075</a>
          <span style={{display:'flex',alignItems:'flex-start',gap:8,color:'var(--text-muted)'}}>{ICONS.pin}<span>Jhelum, Punjab,<br/>Pakistan</span></span>
        </div>
      </div>
      {cols.map(([h,items]) => <div key={h}>
        <div style={{color:'var(--text-secondary)',fontWeight:600,fontSize:13,marginBottom:14}}>{h}</div>
        {items.map(([label,href]) => <a key={label} href={href} style={{display:'block',fontSize:13,marginBottom:10,cursor:'pointer',color:'var(--text-muted)',textDecoration:'none'}}>{label}</a>)}
      </div>)}
      <div>
        <div style={{color:'var(--text-secondary)',fontWeight:600,fontSize:13,marginBottom:14}}>{STRINGS.footer.stayInLoop}</div>
        <p style={{fontSize:13,marginBottom:12,lineHeight:1.6}}>{STRINGS.footer.newsletterSub}</p>
        {subscribed ? <div style={{fontSize:13,color:'var(--color-success)'}}>{STRINGS.footer.subscribed}</div> : <form onSubmit={(e)=>{e.preventDefault(); if(email.trim()) setSubscribed(true);}} style={{display:'flex',gap:8}}>
          <input value={email} onChange={e=>setEmail(e.target.value)} type="email" required placeholder={STRINGS.auth.emailLabel} style={{flex:1,height:40,borderRadius:'var(--radius-md)',border:'1px solid var(--border-hairline)',background:'var(--surface-panel)',color:'var(--text-primary)',padding:'0 12px',fontSize:13,outline:'none'}}/>
          <button style={{height:40,padding:'0 16px',borderRadius:'var(--radius-md)',border:'none',background:'var(--color-primary)',color:'#fff',fontWeight:700,fontSize:13,cursor:'pointer'}}>{STRINGS.footer.join}</button>
        </form>}
      </div>
    </div>
    <div style={{maxWidth:1280,margin:'48px auto 0',paddingTop:24,borderTop:'1px solid var(--border-hairline-soft)',fontSize:12,display:'flex',justifyContent:'space-between'}}>
      <span>© 2026 The FunX Universe</span>
      <span style={{display:'flex',gap:20}}><a href="terms.html" style={{color:'var(--text-muted)'}}>{STRINGS.footer.terms}</a><a href="privacy.html" style={{color:'var(--text-muted)'}}>{STRINGS.footer.privacy}</a></span>
    </div>
  </footer>;
}

const BADGE_TONE = { 'New':'info', 'Best Seller':'gold', 'Limited Edition':'gold', 'Exclusive':'success', 'Sale':'error' };

function ProductCard({ p }) {
  const [hover,setHover] = React.useState(false);
  const { isWishlisted, toggle: toggleWishlist } = useWishlist();
  const wish = isWishlisted(p.id);
  const videoRef = React.useRef(null);
  const { Badge } = window.FunXDesignSystem_bbd8ae;
  const hasRealImages = p.images && p.images[0];
  const onEnter = () => { setHover(true); const v = videoRef.current; if (v) { v.currentTime = 0; v.play().catch(()=>{}); } };
  const onLeave = () => { setHover(false); const v = videoRef.current; if (v) { v.pause(); v.currentTime = 0; } };
  return <a href={`product.html?id=${p.id}`} onMouseEnter={onEnter} onMouseLeave={onLeave} style={{fontFamily:'var(--font-body)',cursor:'pointer',minWidth:0,display:'block',textDecoration:'none',color:'inherit'}}>
    <div style={{aspectRatio:'1',background:'var(--surface-gallery)',color:'var(--text-ink)',borderRadius:'var(--radius-lg)',marginBottom:20,position:'relative',overflow:'hidden',border:'none',boxShadow:hover?'var(--shadow-gallery-2), var(--glow-gold)':'var(--shadow-gallery-1)',transition:'box-shadow var(--duration-base) var(--ease-standard), transform var(--duration-base) var(--ease-standard)',transform:hover?'translateY(-2px)':'none'}}>
      {hasRealImages ? <img src={p.images[0]} alt={p.name} style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover',display:hover&&p.hasVideo?'none':'block'}}/> : <image-slot id={`prod-${p.id}`} style={{width:'100%',height:'100%',pointerEvents:'none',position:'absolute',inset:0,display:hover&&p.hasVideo?'none':'block'}} placeholder={`Photo of ${p.name}`}></image-slot>}
      {p.hasVideo && <video ref={videoRef} muted loop playsInline preload="none" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover',opacity:hover?1:0,transition:'opacity var(--duration-base) var(--ease-standard)',pointerEvents:'none'}}>
        <source src={p.videoSrc || `videos/${p.id}.mp4`} type="video/mp4"/>
      </video>}
      {p.badge && <span style={{position:'absolute',top:12,left:12,background: p.badge==='Sale' ? 'var(--color-error)' : p.badge==='Exclusive' ? 'var(--color-success)' : 'var(--color-warning)',color: p.badge==='Sale'||p.badge==='Exclusive' ? '#fff' : '#141416',fontSize:10,fontWeight:700,letterSpacing:1,textTransform:'uppercase',padding:'5px 9px',borderRadius:'var(--radius-pill)'}}>{p.badge}</span>}
      <span
        onClick={(e)=>{e.stopPropagation();e.preventDefault();toggleWishlist(p.id);}}
        onKeyDown={(e)=>{ if (e.key==='Enter'||e.key===' ') { e.stopPropagation();e.preventDefault();toggleWishlist(p.id); } }}
        role="button" tabIndex={0} aria-pressed={wish} aria-label={wish?`Remove ${p.name} from wishlist`:`Add ${p.name} to wishlist`}
        style={{position:'absolute',top:10,right:10,width:32,height:32,borderRadius:'50%',background:'rgba(255,255,255,0.9)',display:'flex',alignItems:'center',justifyContent:'center',color:wish?'var(--paint-red)':'#141416',cursor:'pointer'}}>
        <svg width="15" height="15" viewBox="0 0 24 24" fill={wish?'currentColor':'none'} stroke="currentColor" strokeWidth="1.8"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg>
      </span>
      {p.images && p.images.length > 1 && <div style={{position:'absolute',bottom:12,left:0,right:0,display:'flex',justifyContent:'center',gap:5}}>
        {p.images.map((_,i) => <span key={i} style={{width:5,height:5,borderRadius:'50%',background:i===0?'#fff':'rgba(255,255,255,0.4)'}}></span>)}
      </div>}
    </div>
    <StockLabel stock={p.quantity}/>
    <div style={{fontSize:11,color:'var(--text-muted)',letterSpacing:1,textTransform:'uppercase',marginBottom:4,minHeight:28,display:'-webkit-box',WebkitLineClamp:2,WebkitBoxOrient:'vertical',overflow:'hidden'}}>{p.line || p.category}</div>
    <div style={{fontSize:'var(--title-md-size)',fontWeight:600,color:'var(--text-primary)',marginBottom:6,lineHeight:1.3,minHeight:'calc(var(--title-md-size) * 1.3 * 2)',display:'-webkit-box',WebkitLineClamp:2,WebkitBoxOrient:'vertical',overflow:'hidden'}}>{titleCase(p.name)}</div>
    {p.rating > 0 ? <div style={{display:'flex',alignItems:'center',gap:5,marginBottom:6,minHeight:19}}>
      <div style={{display:'flex',gap:1}}>{[1,2,3,4,5].map(i => <span key={i}>{ICONS.star(i<=Math.round(p.rating))}</span>)}</div>
      <span style={{fontSize:12,color:'var(--text-muted)'}}>({p.reviews})</span>
    </div> : <div style={{minHeight:19,marginBottom:6}}></div>}
    <div style={{display:'flex',alignItems:'baseline',gap:8}}>
      {p.salePrice ? <>
        <span style={{fontSize:'var(--body-md-size)',color:'var(--paint-orange)',fontWeight:700}}>{window.fmtPrice(p.salePrice)}</span>
        <span style={{fontSize:13,color:'var(--text-muted-soft)',textDecoration:'line-through'}}>{window.fmtPrice(p.price)}</span>
      </> : <span style={{fontSize:'var(--body-md-size)',color:'var(--text-primary)',fontWeight:600}}>{window.fmtPrice(p.price)}</span>}
    </div>
  </a>;
}

function ProductGrid({ products, cols = 4 }) {
  const isMobile = useIsMobile();
  const effectiveCols = isMobile ? Math.min(cols, 2) : cols;
  return <div style={{display:'grid',gridTemplateColumns:`repeat(${effectiveCols},minmax(0,1fr))`,gap: isMobile ? 'var(--grid-gap) var(--grid-gap-tight)' : '56px 40px'}}>
    {products.map(p => <ProductCard key={p.id} p={p}/>)}
  </div>;
}

function CategoryTile({ label, href }) {
  return <a href={href} style={{textDecoration:'none',display:'block'}}>
    <div style={{aspectRatio:'4/5',borderRadius:'var(--radius-xl)',overflow:'hidden',marginBottom:12,border:'1px solid var(--border-hairline-soft)'}}>
      <image-slot id={`cat-${label}`} style={{width:'100%',height:'100%'}} placeholder={`Photo — ${label}`}></image-slot>
    </div>
    <div style={{fontSize:14,fontWeight:600,color:'var(--text-primary)',textAlign:'center'}}>{label}</div>
  </a>;
}

function CategoryRail({ tiles }) {
  const isMobile = useIsMobile();
  const cols = isMobile ? Math.min(tiles.length, 2) : tiles.length;
  return <div style={{display:'grid',gridTemplateColumns:`repeat(${cols},1fr)`,gap: isMobile ? 14 : 24,maxWidth:1280,margin:'0 auto',padding: isMobile ? '0 20px' : '0 40px'}}>
    {tiles.map(t => <CategoryTile key={t.label} {...t}/>)}
  </div>;
}

function SectionHeading({ eyebrow, title, cta, ctaHref }) {
  return <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',marginBottom:48}}>
    <div>
      {eyebrow && <div style={{fontSize:12,letterSpacing:2,fontWeight:700,color:'var(--accent-cyan)',textTransform:'uppercase',marginBottom:12}}>{eyebrow}</div>}
      <h2 style={{fontFamily:'var(--font-display)',fontStyle:'italic',fontWeight:700,fontSize:44,margin:0,color:'var(--text-primary)',letterSpacing:'-0.5px'}}>{title}</h2>
    </div>
    {cta && <a href={ctaHref||'#'} style={{color:'var(--text-muted)',fontSize:14,textDecoration:'none',whiteSpace:'nowrap'}}>{cta} →</a>}
  </div>;
}

function FilterGroup({ title, options, selected=[], onToggle }) {
  const { Checkbox } = window.FunXDesignSystem_bbd8ae;
  const [open,setOpen] = React.useState(true);
  return <div style={{borderBottom:'1px solid var(--border-hairline-soft)',padding:'18px 0'}}>
    <div onClick={()=>setOpen(!open)} style={{display:'flex',justifyContent:'space-between',alignItems:'center',cursor:'pointer',fontSize:14,fontWeight:600,color:'var(--text-primary)'}}>
      {title}<span style={{transform:open?'rotate(90deg)':'rotate(0)',transition:'transform var(--duration-fast)',color:'var(--text-muted)'}}>{ICONS.chevron}</span>
    </div>
    {open && <div style={{marginTop:14,display:'flex',flexDirection:'column',gap:11}}>
      {options.map(o => <Checkbox key={o} label={o} checked={selected.includes(o)} onChange={()=>onToggle && onToggle(o)}/>)}
    </div>}
  </div>;
}

function FilterSidebar({ groups, onClear }) {
  const hasActive = groups.some(g => g.selected && g.selected.length > 0);
  const isMobile = useIsMobile();
  const [open,setOpen] = React.useState(false);
  const activeCount = groups.reduce((s,g)=>s+g.selected.length,0);

  if (isMobile) {
    return <div style={{width:'100%',marginBottom:24}}>
      <button onClick={()=>setOpen(!open)} style={{width:'100%',display:'flex',justifyContent:'space-between',alignItems:'center',padding:'14px 16px',borderRadius:'var(--radius-md)',border:'1px solid var(--border-hairline)',background:'var(--surface-panel)',color:'var(--text-primary)',fontSize:14,fontWeight:700,cursor:'pointer'}}>
        <span>Filter{activeCount > 0 ? ` (${activeCount})` : ''}</span>
        <span style={{display:'flex',transform:open?'rotate(90deg)':'rotate(0)',transition:'transform var(--duration-fast)'}}>{ICONS.chevron}</span>
      </button>
      {open && <div style={{marginTop:16,padding:'0 4px'}}>
        {hasActive && onClear && <div style={{textAlign:'right',marginBottom:8}}><span onClick={onClear} style={{fontSize:12,color:'var(--text-muted)',cursor:'pointer',textDecoration:'underline'}}>Clear all</span></div>}
        {groups.map(g => <FilterGroup key={g.title} {...g}/>)}
      </div>}
    </div>;
  }

  return <aside style={{width:236,flexShrink:0}}>
    <div style={{display:'flex',justifyContent:'space-between',alignItems:'baseline',marginBottom:8}}>
      <div style={{fontSize:16,fontWeight:700,color:'var(--text-primary)',fontFamily:'var(--font-display)',fontStyle:'italic'}}>Filter</div>
      {hasActive && onClear && <span onClick={onClear} style={{fontSize:12,color:'var(--text-muted)',cursor:'pointer',textDecoration:'underline'}}>Clear all</span>}
    </div>
    {groups.map(g => <FilterGroup key={g.title} {...g}/>)}
  </aside>;
}

function PromoBanner({ title, sub, cta, ctaHref='account.html' }) {
  return <section style={{maxWidth:1280,margin:'0 auto',padding:'0 40px 96px'}}>
    <div style={{borderRadius:'var(--radius-2xl)',background:'var(--surface-panel)',border:'1px solid var(--border-hairline)',padding:'56px 64px',display:'flex',justifyContent:'space-between',alignItems:'center',boxShadow:'var(--glow-gold)'}}>
      <div>
        <div style={{fontSize:12,letterSpacing:2,fontWeight:700,color:'var(--color-warning)',textTransform:'uppercase',marginBottom:10}}>Members Program</div>
        <div style={{fontFamily:'var(--font-display)',fontStyle:'italic',fontWeight:700,fontSize:36,color:'var(--text-primary)',marginBottom:6}}>{title}</div>
        <div style={{fontSize:15,color:'var(--text-secondary)'}}>{sub}</div>
      </div>
      <a href={ctaHref} style={{height:52,padding:'0 32px',borderRadius:'var(--radius-md)',border:'none',background:'linear-gradient(180deg,#FFFFFF,#C9CDD3 35%,#7D828B 55%,#E7E9EC 75%,#9AA0A8)',color:'#141416',fontWeight:700,fontSize:14,cursor:'pointer',whiteSpace:'nowrap',display:'flex',alignItems:'center',textDecoration:'none'}}>{cta}</a>
    </div>
  </section>;
}

/* ── Supabase-backed product catalog ──────────────────────────────────────
   Products used to be a hardcoded array here. They now live in Supabase
   (see supabase/schema.sql + supabase/seed.sql) so the admin panel
   (admin.html) can add/edit/delete them and have changes go live with no
   rebuild. window.PRODUCTS starts as an empty array and is populated once
   window.PRODUCTS_PROMISE resolves — every page waits on that promise
   before calling ReactDOM.render (see the end of each page's own script),
   since Header's CartDrawer reads window.PRODUCTS on every page, not just
   product-listing pages. */
const SUPABASE_URL = 'https://czfavdtjrfqwwwfhesbx.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_dbCHTyN_VJxbuDhARXiCoA_VtCWf2g-';

// "Remember me" storage: account.html's sign-in form sets funx_remember_me
// before calling signInWithPassword. When it's explicitly 'false' (unchecked),
// the session token goes in sessionStorage (cleared on browser close) instead
// of localStorage. DEFAULT IS PERSISTENT (localStorage) when the flag is
// unset — admin.html has no "remember me" checkbox at all and already
// depends on plain persistent localStorage; defaulting to session-only here
// would silently break that already-working, tested login.
const rememberMeStorage = {
  getItem: (key) => {
    const remember = localStorage.getItem('funx_remember_me') !== 'false';
    return (remember ? localStorage : sessionStorage).getItem(key);
  },
  setItem: (key, value) => {
    const remember = localStorage.getItem('funx_remember_me') !== 'false';
    (remember ? localStorage : sessionStorage).setItem(key, value);
  },
  removeItem: (key) => {
    localStorage.removeItem(key);
    sessionStorage.removeItem(key);
  },
};

// createClient() throws SYNCHRONOUSLY on an invalid URL (e.g. the
// placeholder above before it's been configured), which would otherwise
// halt this whole script mid-file and take every page down with it. Guard
// it so a bad/missing config degrades to an empty catalog instead of a
// hard crash on every single page.
let supabaseClient = null;
try {
  supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    auth: { storage: rememberMeStorage },
  });
} catch (err) {
  console.error('[funx] Supabase not configured yet (set SUPABASE_URL / SUPABASE_ANON_KEY in common.jsx):', err.message);
}
window.supabaseClient = supabaseClient;

function useSession(){
  const [session,setSession] = React.useState(undefined); // undefined = loading, null = signed out
  React.useEffect(() => {
    if (!supabaseClient) { setSession(null); return; }
    // Single source of truth via onAuthStateChange only (fires once immediately
    // with the current session, then again on real changes) — mixing this with
    // a separate getSession() call is the exact race that caused admin.html's
    // "signs out every time" bug earlier this session. Not repeating that here.
    const { data: sub } = supabaseClient.auth.onAuthStateChange((_event, sess) => {
      setSession(sess || null);
    });
    return () => sub.subscription.unsubscribe();
  }, []);
  return session;
}
window.useSession = useSession;

function applyDisplayFormatting(row) {
  return {
    ...row,
    salePrice: row.sale_price,
    isNew: row.is_new,
    isTrending: row.is_trending,
    isCollectible: row.is_collectible,
    isSale: row.is_sale,
    boxDims: (row.box_length_in != null && row.box_width_in != null && row.box_height_in != null)
      ? `${row.box_length_in}" x ${row.box_width_in}" x ${row.box_height_in}"`
      : undefined,
    weight: row.weight_lb != null ? `${row.weight_lb} lb` : undefined,
    hasVideo: !!row.video_url,
    videoSrc: row.video_url || undefined,
  };
}

window.PRODUCTS = [];
// Every page gates its first render on this promise (see the end of each
// page's own script), so it must ALWAYS resolve — never reject, and never
// stay pending — or every page is stuck on its loading spinner forever.
// That's why every branch below (no client, query error, thrown exception)
// funnels into the same "resolve with an empty catalog" fallback.
/* ── currency ──────────────────────────────────────────────────────────────
   All prices are stored in PKR (the base currency). Display-only
   conversion using live rates from open.er-api.com — chosen specifically
   because it's free, needs no API key/signup, AND actually covers PKR as a
   base (the more commonly-recommended frankfurter.app is ECB-sourced and
   doesn't publish PKR rates at all — confirmed by testing before wiring
   this up, since a silently-unsupported base currency would have made the
   whole feature quietly do nothing). */
const CURRENCY_STORAGE_KEY = 'funx_currency';
const CURRENCY_SOURCE_KEY = 'funx_currency_source'; // 'auto' | 'manual' — lets a later profile.country signal upgrade an auto-guess without ever overwriting a deliberate user choice
const RATES_CACHE_KEY = 'funx_exchange_rates';
const RATES_TTL_MS = 24 * 60 * 60 * 1000;

if (typeof window !== 'undefined' && !localStorage.getItem(CURRENCY_STORAGE_KEY)) {
  const region = ((navigator.language || 'en-US').split('-')[1] || '').toUpperCase();
  localStorage.setItem(CURRENCY_STORAGE_KEY, LOCALE_REGION_CURRENCY[region] || 'PKR');
  localStorage.setItem(CURRENCY_SOURCE_KEY, 'auto');
}

function getCurrentCurrency(){
  try { return localStorage.getItem(CURRENCY_STORAGE_KEY) || 'PKR'; } catch (e) { return 'PKR'; }
}
window.getCurrentCurrency = getCurrentCurrency;

function setCurrency(code){
  try {
    localStorage.setItem(CURRENCY_STORAGE_KEY, code);
    localStorage.setItem(CURRENCY_SOURCE_KEY, 'manual');
  } catch (e) {}
  location.reload(); // simplest correct way to update every already-rendered price sitewide
}
window.setCurrency = setCurrency;

window.EXCHANGE_RATES = null;
function fetchExchangeRates(){
  try {
    const cached = JSON.parse(localStorage.getItem(RATES_CACHE_KEY) || 'null');
    if (cached && cached.fetchedAt && (Date.now() - cached.fetchedAt) < RATES_TTL_MS) {
      window.EXCHANGE_RATES = cached.rates;
      return Promise.resolve(cached.rates);
    }
  } catch (e) {}
  return fetch('https://open.er-api.com/v6/latest/PKR')
    .then(r => r.json())
    .then(data => {
      if (!data || data.result !== 'success' || !data.rates) return null;
      window.EXCHANGE_RATES = data.rates;
      try { localStorage.setItem(RATES_CACHE_KEY, JSON.stringify({ fetchedAt: Date.now(), rates: data.rates })); } catch (e) {}
      return data.rates;
    })
    .catch(() => null); // never breaks the page — fmtPrice falls back to PKR when EXCHANGE_RATES is null
}

window.PRODUCTS_PROMISE = Promise.all([
  supabaseClient
    ? supabaseClient
        .from('products')
        .select('*')
        .order('sort_order', { ascending: true })
        .then(({ data, error }) => {
          if (error) {
            console.error('[funx] failed to load products from Supabase:', error.message || error);
            window.PRODUCTS = [];
            return window.PRODUCTS;
          }
          // Zero-price rows are incomplete listings (never priced by staff),
          // not real inventory — hide them from the public storefront rather
          // than show a fake "$0.00". Still fully visible/editable in
          // admin.html, which fetches products directly, not via this list.
          window.PRODUCTS = data.map(applyDisplayFormatting).filter(p => p.price > 0);
          return window.PRODUCTS;
        })
        .catch((err) => {
          console.error('[funx] product fetch threw:', err);
          window.PRODUCTS = [];
          return window.PRODUCTS;
        })
    : Promise.resolve(window.PRODUCTS),
  fetchExchangeRates(),
]).then(([products]) => {
  // One-time reconciliation: drop any cart line whose product id no longer
  // exists (e.g. after a full catalog replace) so the header badge count
  // and cart.html itself never reference a product that isn't there.
  try {
    const cart = getCart();
    const valid = cart.filter(i => products.some(p => p.id === i.id));
    if (valid.length !== cart.length) saveCart(valid);
  } catch (e) {}
  return products;
});

const JOURNAL_POSTS = [
  {slug:'why-i-started-funx',category:'Founder’s Note',date:'Jan 12, 2026',readTime:'5 min read',title:'Why I Started FunX at 25',excerpt:'Two failed startups, a shelf full of toy cars, and a simple realization: I never actually stopped playing.',body:[
    'I was twenty when I first let myself think the word “founder.” Not because I had an idea worth building yet — I didn’t — but because I couldn’t picture myself doing anything else. Two attempts followed. Both taught me more than they earned me.',
    'What neither startup had was honesty. I was building things I thought investors or the market wanted, not things I’d actually spend my own money on. Meanwhile the one shelf in my room that never got boring was the one lined with die-cast cars, RC builds, and action figures I’d had since I was twelve.',
    'FunX started from admitting that out loud. I’m Muhammad bin Zameer, and at twenty-five I stopped trying to build what I thought a “real” company should look like, and started building the toy store I’d have wanted as a kid — and still want now.',
    'We opened FunX in 2026. No inherited factory, no decades of legacy — just a founder who never grew out of the toy aisle, and a plan to take that feeling to collectors and kids everywhere, one country at a time.',
  ]},
  {slug:'the-shelf-that-started-it',category:'Behind FunX',date:'Feb 3, 2026',readTime:'4 min read',title:'The Shelf That Started It',excerpt:'Before FunX was a company, it was a bedroom shelf that survived three house moves and two “serious adult” clean-outs.',body:[
    'Every founder story has an origin object. Mine is a particleboard shelf my dad helped me put up when I was eleven, meant to hold textbooks. It never held a single textbook.',
    'It held die-cast cars first, then RC kits once I’d saved up enough allowance, then action figures I told myself I was “collecting for the value” while very obviously still playing with them after lights-out. That shelf moved with me through two failed startups and more late-night self-doubt than I’d like to admit.',
    'When FunX started taking shape, the question I kept asking wasn’t “what’s a good business model” — it was “what would make that shelf happy.” Products I’d actually want to unbox. Packaging I’d actually want to keep. A store I’d actually want to browse at 1am.',
    'That’s still the only product brief FunX runs on.',
  ]},
  {slug:'building-for-players-not-just-collectors',category:'Perspective',date:'Mar 18, 2026',readTime:'4 min read',title:'Building for Players, Not Just Collectors',excerpt:'A lot of toy brands quietly stop being fun once they start being premium. We’re trying not to make that trade.',body:[
    'Premium toy retail has a habit of drifting toward glass cases and “display only” culture. I get the appeal — collectors want to protect what they love — but somewhere in there, a lot of brands forget that the whole reason these objects mean anything is that someone, once, actually played with them.',
    'At FunX we’re building for both: the collector who wants a numbered piece worth protecting, and the kid (or thirty-year-old, no judgment) who wants to run the RC car straight out of the box the same afternoon it arrives.',
    'That tension shows up in small decisions — packaging that’s satisfying to open instead of precious to the point of stress, product pages that show the toy actually moving instead of just sitting under studio light, quality that holds up whether it’s shelved or used.',
    'I started FunX because I never stopped playing. I’d rather build a brand that gives you permission to do the same.',
  ]},
  {slug:'funx-goes-global',category:'Company News',date:'Apr 22, 2026',readTime:'3 min read',title:'FunX Goes Global — The Plan',excerpt:'We launched in 2026 from a simple idea. Here’s where we’re taking it next.',body:[
    'FunX launched this year with a small catalog and one clear mission: build the toy brand I wished existed growing up, and take it to players and collectors everywhere, not just one market.',
    '“Global” isn’t a slide in a pitch deck for us — it’s the actual point. Great toys shouldn’t be limited by geography, and neither should the community that forms around them. We’re building shipping, support, and a catalog meant to travel from day one.',
    'That means starting close to home, listening hard to the first wave of customers, and expanding deliberately instead of chasing size for its own sake. Every market we enter should feel like FunX, not a watered-down version of it.',
    'This is early. We know it. But every big toy box started as one small shelf — and we’re just getting started.',
  ]},
];

function StockLabel({ stock }) {
  if (stock <= 0) return <div style={{fontSize:12,fontWeight:600,color:'var(--color-error)',marginTop:4}}>{STRINGS.product.outOfStock}</div>;
  if (stock <= 5) return <div style={{fontSize:12,fontWeight:600,color:'var(--color-warning)',marginTop:4}}>{STRINGS.product.onlyNLeft(stock)}</div>;
  return null;
}

// Raw product names/categories come from imported inventory data with
// inconsistent casing ("GUITAR", "lazer pointer card") — this is display
// formatting only, the stored name is never mutated.
function titleCase(s){
  if (!s) return s;
  return s.toLowerCase().replace(/(^|[\s/-])\S/g, c => c.toUpperCase());
}
window.titleCase = titleCase;

function fmtPrice(n) {
  const amount = Number(n) || 0;
  const code = getCurrentCurrency();
  const rate = code !== 'PKR' && window.EXCHANGE_RATES && window.EXCHANGE_RATES[code];
  if (!rate) return `PKR ${amount.toLocaleString('en-PK')}`; // no rate loaded yet, rate fetch failed, or explicitly PKR
  const converted = amount * rate;
  try {
    return new Intl.NumberFormat(undefined, { style: 'currency', currency: code, maximumFractionDigits: converted >= 100 ? 0 : 2 }).format(converted);
  } catch (e) {
    return `PKR ${amount.toLocaleString('en-PK')}`;
  }
}

Object.assign(window, { NAV_LINKS, ICONS, SOCIAL_LINKS, COUNTRIES, Header, Footer, ProductCard, ProductGrid, CategoryTile, CategoryRail, SectionHeading, FilterSidebar, FilterGroup, PromoBanner, BADGE_TONE, JOURNAL_POSTS, fmtPrice, getCart, saveCart, addToCart, cartCount, ModeSwitch, SignInForm, CreateForm });
