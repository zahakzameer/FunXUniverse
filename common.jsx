const NAV_LINKS = [
  { label: 'New', href: 'new.html' },
  { label: 'Trending', href: 'trending.html' },
  { label: 'Toys & Plush', href: 'toys-plush.html' },
  { label: 'Collectibles', href: 'collectibles.html' },
  { label: 'Sale', href: 'sale.html' },
];

const NAV_MENUS = {
  'New': { cols: [
    { title:'Just Landed', links: [['New Arrivals','new.html'],['This Week','new.html'],['Coming Soon','new.html']] },
    { title:'By Universe', links: [['Skyline Riders','toys-plush.html'],['Ironclad Legion','toys-plush.html'],['Aerodrome','toys-plush.html']] },
  ], feature: { label:'GT Vector 12 Drift Racer', sub:'The newest RC in the FunX lineup', href:'product.html?id=p1', img:'https://picsum.photos/seed/p1-2/640/480' } },
  'Trending': { cols: [
    { title:'Most Collected', links: [['Best Sellers','trending.html'],['Top Rated','trending.html'],['Staff Picks','trending.html']] },
    { title:'Explore', links: [['Die-Cast','trending.html'],['Action Figures','trending.html'],['RC Vehicles','trending.html']] },
  ], feature: { label:'Sundown Coupe', sub:'Limited Edition — 4.9★ from collectors', href:'product.html?id=p5', img:'https://picsum.photos/seed/p5-2/640/480' } },
  'Toys & Plush': { cols: [
    { title:'Shop by Type', links: [['Die-Cast Vehicles','toys-plush.html'],['RC Vehicles','toys-plush.html'],['Action Figures','toys-plush.html'],['Accessories','toys-plush.html']] },
    { title:'Shop by Universe', links: [['Skyline Riders','toys-plush.html'],['Rangehead','toys-plush.html'],['Voltage Corps','toys-plush.html']] },
  ], feature: { label:'Ironclad Sentinel', sub:'Exclusive · numbered piece', href:'product.html?id=p8', img:'https://picsum.photos/seed/p8-2/640/480' } },
  'Collectibles': { cols: [
    { title:'Numbered Editions', links: [['Skyline Anniversary Coupe','collectibles.html'],['Aerodrome Squadron Set','collectibles.html'],['Ironclad Legion Founders Set','collectibles.html']] },
    { title:'Collector Info', links: [['Provenance','provenance.html'],['Authentication','authentication.html']] },
  ], feature: { label:'Voltage Corps Display Case', sub:'Built for numbered pieces', href:'product.html?id=p22', img:'https://picsum.photos/seed/p22-2/640/480' } },
  'Sale': { cols: [
    { title:'Current Sale', links: [['Up to 40% Off','sale.html'],['Founders Sets','sale.html'],['Bundle & Save','sale.html']] },
  ], feature: { label:'Ochre Rambler', sub:'Now PKR 5,570 — save 20%', href:'product.html?id=p3', img:'https://picsum.photos/seed/p3-2/640/480' } },
};

const ICONS = {
  search: <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>,
  heart: <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg>,
  user: <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 20c1.6-3.8 4.8-6 8-6s6.4 2.2 8 6"/></svg>,
  cart: <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3h2l2.4 12.4a2 2 0 002 1.6h8.4a2 2 0 002-1.6L21 8H6"/><circle cx="9" cy="20" r="1"/><circle cx="18" cy="20" r="1"/></svg>,
  sun: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="12" cy="12" r="4.5"/><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/></svg>,
  moon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z"/></svg>,
  chevron: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6"/></svg>,
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
        <h3 style={{fontSize:17,fontWeight:700,margin:0}}>Added to Your Collection</h3>
        <span onClick={()=>setOpen(false)} style={{cursor:'pointer',color:'var(--text-muted)',fontSize:20,lineHeight:1}}>×</span>
      </div>
      <div style={{flex:1,overflowY:'auto',padding:'8px 24px'}}>
        {cart.length === 0 ? <p style={{color:'var(--text-muted)',fontSize:14,marginTop:32}}>Your collection is empty.</p> : cart.map(item => <div key={item.id} style={{display:'flex',gap:14,padding:'16px 0',borderBottom:'1px solid var(--border-hairline-soft)',background: item.id===justAdded ? 'var(--surface-card-raised)' : 'transparent',borderRadius:8}}>
          <div style={{width:64,height:64,flexShrink:0,borderRadius:'var(--radius-md)',overflow:'hidden',background:'var(--surface-gallery)',border:'1px solid var(--border-gallery)'}}>
            {item.p.images && item.p.images[0] ? <img src={item.p.images[0]} style={{width:'100%',height:'100%',objectFit:'cover'}}/> : <image-slot id={`drawer-${item.p.id}`} style={{width:'100%',height:'100%'}} placeholder={`Photo of ${item.p.name}`}></image-slot>}
          </div>
          <div style={{flex:1,minWidth:0}}>
            <div style={{fontSize:14,fontWeight:600,marginBottom:4}}>{item.p.name}</div>
            <div style={{fontSize:12,color:'var(--text-muted)'}}>Qty {item.qty}</div>
          </div>
          <div style={{fontSize:14,fontWeight:700,color:'var(--paint-orange)',whiteSpace:'nowrap'}}>{window.fmtPrice((item.p.salePrice||item.p.price)*item.qty)}</div>
        </div>)}
      </div>
      {cart.length > 0 && <div style={{padding:'20px 24px',borderTop:'1px solid var(--border-hairline-soft)'}}>
        <div style={{display:'flex',justifyContent:'space-between',fontSize:15,fontWeight:700,marginBottom:16}}><span>Subtotal</span><span>{window.fmtPrice(subtotal)}</span></div>
        <div style={{display:'flex',flexDirection:'column',gap:10}}>
          <Button variant="primary" size="lg" onClick={()=>location.href='cart.html'} style={{width:'100%'}}>View Cart</Button>
          <Button variant="secondary" size="md" onClick={()=>setOpen(false)} style={{width:'100%'}}>Continue Shopping</Button>
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
          <img src={menu.feature.img} style={{width:96,height:96,objectFit:'cover',borderRadius:'var(--radius-md)',flexShrink:0}}/>
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

function ThemeToggle(){
  const [theme,setTheme] = useTheme();
  return <span onClick={()=>setTheme(theme==='light'?'dark':'light')} style={{cursor:'pointer',display:'flex',color:'inherit'}} title={theme==='light'?'Switch to dark mode':'Switch to light mode'}>{theme==='light'?ICONS.moon:ICONS.sun}</span>;
}

function Header({ active }) {
  const cartQty = useCartCount();
  return <header style={{position:'sticky',top:0,zIndex:30,fontFamily:'var(--font-body)'}}>
    <AnnouncementBar/>
    <CartDrawer/>
    <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',height:80,padding:'0 40px',background:'rgba(11,11,13,0.86)',backdropFilter:'blur(10px)',borderBottom:'1px solid var(--border-hairline-soft)'}}>
      <a href="index.html" style={{display:'flex',alignItems:'center'}}><img src="assets/logo.svg" style={{height:34}}/></a>
      <nav style={{display:'flex',gap:36}}>
        {NAV_LINKS.map(l => <NavItem key={l.label} l={l} active={active}/>)}
      </nav>
      <div style={{display:'flex',gap:22,alignItems:'center',color:'var(--text-secondary)'}}>
        <ThemeToggle/>
        <a href="search.html" style={{cursor:'pointer',display:'flex',color:'inherit'}} title="Search">{ICONS.search}</a>
        <a href="wishlist.html" style={{cursor:'pointer',display:'flex',color:'inherit'}} title="Wishlist">{ICONS.heart}</a>
        <a href="account.html" style={{cursor:'pointer',display:'flex',color:'inherit'}} title="Account">{ICONS.user}</a>
        <a href="cart.html" style={{cursor:'pointer',display:'flex',color:'inherit',position:'relative'}} title="Cart">{ICONS.cart}{cartQty > 0 && <span style={{position:'absolute',top:-7,right:-9,background:'var(--color-primary)',color:'#fff',fontSize:9,fontWeight:700,minWidth:15,height:15,padding:'0 3px',borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center'}}>{cartQty}</span>}</a>
      </div>
    </div>
  </header>;
}

function Footer() {
  const [email,setEmail] = React.useState('');
  const [subscribed,setSubscribed] = React.useState(false);
  const cols = [
    ['Shop', [['New Arrivals','new.html'],['Trending','trending.html'],['Toys & Plush','toys-plush.html'],['Collectibles','collectibles.html'],['Sale','sale.html']]],
    ['The Universe', [['Provenance','provenance.html'],['Authentication','authentication.html'],['Our Story','story.html'],['Press','press.html']]],
    ['Support', [['Shipping','shipping.html'],['Returns','returns.html'],['Track Order','track-order.html'],['Contact','contact.html']]],
  ];
  return <footer style={{background:'var(--surface-sunken)',borderTop:'1px solid var(--border-hairline-soft)',padding:'64px 40px 32px',fontFamily:'var(--font-body)',color:'var(--text-muted)'}}>
    <div style={{display:'grid',gridTemplateColumns:'1.7fr repeat(3,1fr) 1.2fr',gap:32,maxWidth:1280,margin:'0 auto'}}>
      <div>
        <img src="assets/logo-mark.svg" style={{height:36,marginBottom:14}}/>
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
        <div style={{color:'var(--text-secondary)',fontWeight:600,fontSize:13,marginBottom:14}}>Stay in the loop</div>
        <p style={{fontSize:13,marginBottom:12,lineHeight:1.6}}>New drops and provenance stories, monthly.</p>
        {subscribed ? <div style={{fontSize:13,color:'var(--color-success)'}}>✓ Subscribed — welcome to the Circle.</div> : <form onSubmit={(e)=>{e.preventDefault(); if(email.trim()) setSubscribed(true);}} style={{display:'flex',gap:8}}>
          <input value={email} onChange={e=>setEmail(e.target.value)} type="email" required placeholder="Email" style={{flex:1,height:40,borderRadius:'var(--radius-md)',border:'1px solid var(--border-hairline)',background:'var(--surface-panel)',color:'var(--text-primary)',padding:'0 12px',fontSize:13,outline:'none'}}/>
          <button style={{height:40,padding:'0 16px',borderRadius:'var(--radius-md)',border:'none',background:'var(--color-primary)',color:'#fff',fontWeight:700,fontSize:13,cursor:'pointer'}}>Join</button>
        </form>}
      </div>
    </div>
    <div style={{maxWidth:1280,margin:'48px auto 0',paddingTop:24,borderTop:'1px solid var(--border-hairline-soft)',fontSize:12,display:'flex',justifyContent:'space-between'}}>
      <span>© 2026 The FunX Universe</span>
      <span style={{display:'flex',gap:20}}><a href="terms.html" style={{color:'var(--text-muted)'}}>Terms</a><a href="privacy.html" style={{color:'var(--text-muted)'}}>Privacy</a></span>
    </div>
  </footer>;
}

const BADGE_TONE = { 'New':'info', 'Best Seller':'gold', 'Limited Edition':'gold', 'Exclusive':'success', 'Sale':'error' };

function ProductCard({ p }) {
  const [hover,setHover] = React.useState(false);
  const [wish,setWish] = React.useState(false);
  const videoRef = React.useRef(null);
  const { Badge } = window.FunXDesignSystem_bbd8ae;
  const hasRealImages = p.images && p.images[0];
  const onEnter = () => { setHover(true); const v = videoRef.current; if (v) { v.currentTime = 0; v.play().catch(()=>{}); } };
  const onLeave = () => { setHover(false); const v = videoRef.current; if (v) { v.pause(); v.currentTime = 0; } };
  return <a href={`product.html?id=${p.id}`} onMouseEnter={onEnter} onMouseLeave={onLeave} style={{fontFamily:'var(--font-body)',cursor:'pointer',minWidth:0,display:'block',textDecoration:'none',color:'inherit'}}>
    <div style={{aspectRatio:'1',background:'var(--surface-gallery)',borderRadius:'var(--radius-lg)',marginBottom:20,position:'relative',overflow:'hidden',border:'none',boxShadow:hover?'var(--shadow-gallery-2)':'var(--shadow-gallery-1)',transition:'box-shadow var(--duration-base) var(--ease-standard), transform var(--duration-base) var(--ease-standard)',transform:hover?'translateY(-2px)':'none'}}>
      {hasRealImages ? <img src={p.images[0]} style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover',display:hover&&p.hasVideo?'none':'block'}}/> : <image-slot id={`prod-${p.id}`} style={{width:'100%',height:'100%',pointerEvents:'none',position:'absolute',inset:0,display:hover&&p.hasVideo?'none':'block'}} placeholder={`Photo of ${p.name}`}></image-slot>}
      {p.hasVideo && <video ref={videoRef} muted loop playsInline preload="none" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover',opacity:hover?1:0,transition:'opacity var(--duration-base) var(--ease-standard)',pointerEvents:'none'}}>
        <source src={`videos/${p.id}.mp4`} type="video/mp4"/>
      </video>}
      {p.badge && <span style={{position:'absolute',top:12,left:12,background: p.badge==='Sale' ? 'var(--color-error)' : p.badge==='Exclusive' ? 'var(--color-success)' : 'var(--color-warning)',color: p.badge==='Sale'||p.badge==='Exclusive' ? '#fff' : '#141416',fontSize:10,fontWeight:700,letterSpacing:1,textTransform:'uppercase',padding:'5px 9px',borderRadius:'var(--radius-pill)'}}>{p.badge}</span>}
      <span onClick={(e)=>{e.stopPropagation();setWish(!wish);}} style={{position:'absolute',top:10,right:10,width:32,height:32,borderRadius:'50%',background:'rgba(255,255,255,0.9)',display:'flex',alignItems:'center',justifyContent:'center',color:wish?'var(--paint-red)':'#141416'}}>
        <svg width="15" height="15" viewBox="0 0 24 24" fill={wish?'currentColor':'none'} stroke="currentColor" strokeWidth="1.8"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg>
      </span>
      {p.images && p.images.length > 1 && <div style={{position:'absolute',bottom:54,left:0,right:0,display:'flex',justifyContent:'center',gap:5,opacity:hover?0:1,transition:'opacity var(--duration-fast)'}}>
        {p.images.map((_,i) => <span key={i} style={{width:5,height:5,borderRadius:'50%',background:i===0?'#fff':'rgba(255,255,255,0.4)'}}></span>)}
      </div>}
      <div style={{position:'absolute',left:0,right:0,bottom:0,transform: hover && p.stock>0 ? 'translateY(0)' : 'translateY(100%)',transition:'transform var(--duration-base) var(--ease-decelerate)',padding:10}}>
        <button disabled={p.stock<=0} onClick={(e)=>{e.preventDefault();e.stopPropagation(); if(p.stock>0) window.addToCart(p.id,1);}} style={{width:'100%',height:38,borderRadius:'var(--radius-md)',border:'none',background:'#141416',color:'#fff',fontSize:12,fontWeight:700,letterSpacing:'0.5px',cursor:'pointer'}}>Quick Add</button>
      </div>
    </div>
    <StockLabel stock={p.stock}/>
    <div style={{fontSize:11,color:'var(--text-muted)',letterSpacing:1,textTransform:'uppercase',marginBottom:4,minHeight:28,display:'-webkit-box',WebkitLineClamp:2,WebkitBoxOrient:'vertical',overflow:'hidden'}}>{p.line}</div>
    <div style={{fontSize:'var(--title-md-size)',fontWeight:600,color:'var(--text-primary)',marginBottom:6,lineHeight:1.3,minHeight:'calc(var(--title-md-size) * 1.3 * 2)',display:'-webkit-box',WebkitLineClamp:2,WebkitBoxOrient:'vertical',overflow:'hidden'}}>{p.name}</div>
    {p.rating && <div style={{display:'flex',alignItems:'center',gap:5,marginBottom:6,minHeight:19}}>
      <div style={{display:'flex',gap:1}}>{[1,2,3,4,5].map(i => <span key={i}>{ICONS.star(i<=Math.round(p.rating))}</span>)}</div>
      <span style={{fontSize:12,color:'var(--text-muted)'}}>({p.reviews})</span>
    </div>}
    {!p.rating && <div style={{minHeight:19,marginBottom:6}}></div>}
    <div style={{display:'flex',alignItems:'baseline',gap:8}}>
      {p.salePrice ? <>
        <span style={{fontSize:'var(--body-md-size)',color:'var(--paint-orange)',fontWeight:700}}>{window.fmtPrice(p.salePrice)}</span>
        <span style={{fontSize:13,color:'var(--text-muted-soft)',textDecoration:'line-through'}}>{window.fmtPrice(p.price)}</span>
      </> : <span style={{fontSize:'var(--body-md-size)',color:'var(--text-primary)',fontWeight:600}}>{window.fmtPrice(p.price)}</span>}
    </div>
  </a>;
}

function ProductGrid({ products, cols = 4 }) {
  return <div style={{display:'grid',gridTemplateColumns:`repeat(${cols},minmax(0,1fr))`,gap:'56px 40px'}}>
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
  return <div style={{display:'grid',gridTemplateColumns:`repeat(${tiles.length},1fr)`,gap:24,maxWidth:1280,margin:'0 auto',padding:'0 40px'}}>
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

function FilterGroup({ title, options, type='checkbox' }) {
  const { Checkbox } = window.FunXDesignSystem_bbd8ae;
  const [open,setOpen] = React.useState(true);
  return <div style={{borderBottom:'1px solid var(--border-hairline-soft)',padding:'18px 0'}}>
    <div onClick={()=>setOpen(!open)} style={{display:'flex',justifyContent:'space-between',alignItems:'center',cursor:'pointer',fontSize:14,fontWeight:600,color:'var(--text-primary)'}}>
      {title}<span style={{transform:open?'rotate(90deg)':'rotate(0)',transition:'transform var(--duration-fast)',color:'var(--text-muted)'}}>{ICONS.chevron}</span>
    </div>
    {open && <div style={{marginTop:14,display:'flex',flexDirection:'column',gap:11}}>
      {options.map(o => <Checkbox key={o} label={o}/>)}
    </div>}
  </div>;
}

function FilterSidebar({ groups }) {
  return <aside style={{width:236,flexShrink:0}}>
    <div style={{fontSize:16,fontWeight:700,color:'var(--text-primary)',marginBottom:8,fontFamily:'var(--font-display)',fontStyle:'italic'}}>Filter</div>
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

const PRODUCTS = [
  {id:'p1',name:'GT Vector 12 Drift Racer',line:'RC Spray Drift · 2-in-1 4WD',price:4430,badge:'Best Seller',rating:4.7,reviews:132,age:'8+',universe:'GT Vector',type:'RC Vehicle',isNew:false,isTrending:true,isCollectible:false,isSale:false,images:['assets/products/p1-box-front.jpg','assets/products/p1-full-kit.jpg','assets/products/p1-action-rear.jpg','assets/products/p1-collage.jpg','assets/products/p1-box-info.jpg']},
  {id:'p2',name:'Chrome Falcon Mk.II',line:'Aerodrome · Die-Cast',price:5750,badge:'Best Seller',rating:4.6,reviews:89,age:'13+',universe:'Aerodrome',type:'Die-Cast',isNew:false,isTrending:true,isCollectible:false,isSale:false},
  {id:'p3',name:'Ochre Rambler',line:'Skyline Riders · Die-Cast',price:6960,rating:4.3,reviews:52,age:'8+',universe:'Skyline Riders',type:'Die-Cast',isNew:false,isTrending:false,isCollectible:false,isSale:true,salePrice:5570},
  {id:'p4',name:'Nightshift Racer',line:'Ironclad Legion · Action Figure',price:4280,badge:'New',rating:4.1,reviews:23,age:'8+',universe:'Ironclad Legion',type:'Action Figure',isNew:true,isTrending:false,isCollectible:false,isSale:false},
  {id:'p5',name:'Sundown Coupe',line:'Skyline Riders · Die-Cast',price:5500,badge:'Limited Edition',rating:4.9,reviews:201,age:'13+',universe:'Skyline Riders',type:'Die-Cast',isNew:false,isTrending:true,isCollectible:true,isSale:false},
  {id:'p6',name:'Voltage Rider',line:'Ironclad Legion · Action Figure',price:6920,rating:4.4,reviews:67,age:'8+',universe:'Ironclad Legion',type:'Action Figure',isNew:false,isTrending:true,isCollectible:false,isSale:false},
  {id:'p7',name:'Rangehead Overland Rig',line:'Rangehead · Die-Cast',price:4130,badge:'New',rating:4.7,reviews:12,age:'13+',universe:'Rangehead',type:'Die-Cast',isNew:true,isTrending:false,isCollectible:false,isSale:false},
  {id:'p8',name:'Ironclad Sentinel',line:'Ironclad Legion · Action Figure',price:5450,badge:'Exclusive',rating:4.9,reviews:145,age:'13+',universe:'Ironclad Legion',type:'Action Figure',isNew:false,isTrending:true,isCollectible:true,isSale:false},
  {id:'p9',name:'Midnight Voltage Coupe',line:'Voltage Corps · Die-Cast',price:6770,rating:4.2,reviews:34,age:'13+',universe:'Voltage Corps',type:'Die-Cast',isNew:false,isTrending:false,isCollectible:false,isSale:true,salePrice:5420},
  {id:'p10',name:'Aerodrome Squadron Set',line:'Aerodrome · Die-Cast · 3-Pc.',price:3360,badge:'Exclusive',rating:4.8,reviews:41,age:'13+',universe:'Aerodrome',type:'Die-Cast',isNew:false,isTrending:false,isCollectible:true,isSale:false},
  {id:'p11',name:'Rangehead Trailhand',line:'Rangehead · Action Figure',price:4790,badge:'New',rating:4.0,reviews:8,age:'8+',universe:'Rangehead',type:'Action Figure',isNew:true,isTrending:false,isCollectible:false,isSale:false},
  {id:'p12',name:'Voltage Corps Prototype',line:'Voltage Corps · Action Figure',price:6100,badge:'Limited Edition',rating:4.6,reviews:76,age:'13+',universe:'Voltage Corps',type:'Action Figure',isNew:false,isTrending:true,isCollectible:true,isSale:false},
  {id:'p13',name:'1966 Sable Wagon',line:'Skyline Riders · Die-Cast',price:3420,rating:4.5,reviews:58,age:'13+',universe:'Skyline Riders',type:'Die-Cast',isNew:false,isTrending:false,isCollectible:true,isSale:true,salePrice:2740},
  {id:'p14',name:'Ironclad Recon Unit',line:'Ironclad Legion · Action Figure',price:4640,badge:'New',rating:4.3,reviews:15,age:'8+',universe:'Ironclad Legion',type:'Action Figure',isNew:true,isTrending:false,isCollectible:false,isSale:false},
  {id:'p15',name:'Aerodrome Ace Pilot',line:'Aerodrome · Action Figure',price:5940,rating:4.1,reviews:29,age:'8+',universe:'Aerodrome',type:'Action Figure',isNew:false,isTrending:false,isCollectible:false,isSale:false},
  {id:'p16',name:'Rangehead Convoy Truck',line:'Rangehead · Die-Cast',price:3170,badge:'Best Seller',rating:4.7,reviews:98,age:'13+',universe:'Rangehead',type:'Die-Cast',isNew:false,isTrending:true,isCollectible:false,isSale:false},
  {id:'p17',name:'Voltage Streak GT',line:'Voltage Corps · Die-Cast',price:4490,rating:4.4,reviews:44,age:'13+',universe:'Voltage Corps',type:'Die-Cast',isNew:false,isTrending:false,isCollectible:false,isSale:true,salePrice:3590},
  {id:'p18',name:'Skyline Anniversary Coupe',line:'Skyline Riders · Die-Cast · Numbered',price:5710,badge:'Limited Edition',rating:5.0,reviews:19,age:'13+',universe:'Skyline Riders',type:'Die-Cast',isNew:true,isTrending:false,isCollectible:true,isSale:false},
  {id:'p19',name:'Ironclad Vanguard',line:'Ironclad Legion · Action Figure',price:3130,rating:4.5,reviews:63,age:'13+',universe:'Ironclad Legion',type:'Action Figure',isNew:false,isTrending:false,isCollectible:false,isSale:false},
  {id:'p20',name:'Aerodrome Jetstream',line:'Aerodrome · Die-Cast',price:3310,badge:'New',rating:4.2,reviews:6,age:'13+',universe:'Aerodrome',type:'Die-Cast',isNew:true,isTrending:false,isCollectible:false,isSale:false},
  {id:'p21',name:'Rangehead Trail Scout',line:'Rangehead · Action Figure',price:4530,rating:3.9,reviews:11,age:'8+',universe:'Rangehead',type:'Action Figure',isNew:false,isTrending:false,isCollectible:false,isSale:true,salePrice:3620},
  {id:'p22',name:'Voltage Corps Display Case',line:'Voltage Corps · Accessory',price:5950,rating:4.6,reviews:37,age:'All Ages',universe:'Voltage Corps',type:'Accessory',isNew:false,isTrending:false,isCollectible:true,isSale:false},
  {id:'p23',name:'Skyline Chrome Edition',line:'Skyline Riders · Die-Cast',price:3210,badge:'Exclusive',rating:4.8,reviews:82,age:'13+',universe:'Skyline Riders',type:'Die-Cast',isNew:false,isTrending:true,isCollectible:true,isSale:false},
  {id:'p24',name:'Ironclad Legion Founders Set',line:'Ironclad Legion · Action Figure · 4-Pc.',price:4480,badge:'Limited Edition',rating:4.9,reviews:27,age:'13+',universe:'Ironclad Legion',type:'Action Figure',isNew:false,isTrending:false,isCollectible:true,isSale:false},
  {id:'p25',name:'Turbo Rider',line:'GT Vector · Action Figure · Poseable',price:5800,salePrice:4640,badge:'Sale',rating:3.8,reviews:5,age:'8+',universe:'GT Vector',type:'Action Figure',isNew:true,isTrending:true,isCollectible:true,isSale:true},
  {id:'p26',name:'Shadow Cruiser',line:'Aerodrome · Display Accessory',price:3020,badge:'Best Seller',rating:3.9,reviews:18,age:'All Ages',universe:'Aerodrome',type:'Accessory',isNew:false,isTrending:false,isCollectible:false,isSale:false},
  {id:'p27',name:'Blaze Warden',line:'Skyline Riders · RC · 2.4GHz Remote',price:4240,badge:'Limited Edition',rating:4.0,reviews:31,age:'8+',universe:'Skyline Riders',type:'RC Vehicle',isNew:false,isTrending:false,isCollectible:true,isSale:false},
  {id:'p28',name:'Nova Voyager',line:'Ironclad Legion · Die-Cast · Alloy Build',price:5630,badge:'Exclusive',rating:4.1,reviews:44,age:'13+',universe:'Ironclad Legion',type:'Die-Cast',isNew:false,isTrending:true,isCollectible:true,isSale:false},
  {id:'p29',name:'Storm Runner',line:'Rangehead · Action Figure · Poseable',price:6870,badge:'Sale',rating:4.2,reviews:57,age:'8+',universe:'Rangehead',type:'Action Figure',isNew:false,isTrending:false,isCollectible:false,isSale:false},
  {id:'p30',name:'Rapid Guardian',line:'Voltage Corps · Display Accessory',price:3260,rating:4.3,reviews:70,age:'All Ages',universe:'Voltage Corps',type:'Accessory',isNew:true,isTrending:false,isCollectible:false,isSale:false},
  {id:'p31',name:'Vortex Blazer',line:'Nova Squad · RC · 2.4GHz Remote',price:4480,salePrice:3580,badge:'Sale',rating:4.4,reviews:83,age:'8+',universe:'Nova Squad',type:'RC Vehicle',isNew:false,isTrending:true,isCollectible:false,isSale:true},
  {id:'p32',name:'Apex Scout',line:'Titan Works · Die-Cast · Alloy Build',price:5750,badge:'New',rating:4.5,reviews:96,age:'13+',universe:'Titan Works',type:'Die-Cast',isNew:true,isTrending:false,isCollectible:true,isSale:false},
  {id:'p33',name:'Comet Trooper',line:'Blaze Circuit · Action Figure · Poseable',price:3010,badge:'Best Seller',rating:4.6,reviews:109,age:'8+',universe:'Blaze Circuit',type:'Action Figure',isNew:false,isTrending:false,isCollectible:false,isSale:false},
  {id:'p34',name:'Ember Drifter',line:'Frostbyte · Display Accessory',price:4330,badge:'Limited Edition',rating:4.7,reviews:122,age:'All Ages',universe:'Frostbyte',type:'Accessory',isNew:false,isTrending:true,isCollectible:true,isSale:false},
  {id:'p35',name:'Frost Hunter',line:'GT Vector · RC · 2.4GHz Remote',price:5550,badge:'Exclusive',rating:4.8,reviews:135,age:'8+',universe:'GT Vector',type:'RC Vehicle',isNew:true,isTrending:false,isCollectible:true,isSale:false},
  {id:'p36',name:'Talon Rambler',line:'Aerodrome · Die-Cast · Alloy Build',price:6900,badge:'Sale',rating:4.9,reviews:148,age:'13+',universe:'Aerodrome',type:'Die-Cast',isNew:false,isTrending:false,isCollectible:false,isSale:false},
  {id:'p37',name:'Onyx Racer',line:'Skyline Riders · Action Figure · Poseable',price:4180,salePrice:3340,badge:'Sale',rating:3.8,reviews:161,age:'8+',universe:'Skyline Riders',type:'Action Figure',isNew:false,isTrending:true,isCollectible:false,isSale:true},
  {id:'p38',name:'Rogue Striker',line:'Ironclad Legion · Display Accessory',price:5400,rating:3.9,reviews:174,age:'All Ages',universe:'Ironclad Legion',type:'Accessory',isNew:false,isTrending:false,isCollectible:false,isSale:false},
  {id:'p39',name:'Surge Sentinel',line:'Rangehead · RC · 2.4GHz Remote',price:6820,badge:'New',rating:4.0,reviews:7,age:'8+',universe:'Rangehead',type:'RC Vehicle',isNew:true,isTrending:false,isCollectible:true,isSale:false},
  {id:'p40',name:'Havoc Rider',line:'Voltage Corps · Die-Cast · Alloy Build',price:3010,badge:'Best Seller',rating:4.1,reviews:20,age:'13+',universe:'Voltage Corps',type:'Die-Cast',isNew:true,isTrending:true,isCollectible:false,isSale:false},
  {id:'p41',name:'Cipher Cruiser',line:'Nova Squad · Action Figure · Poseable',price:4320,badge:'Limited Edition',rating:4.2,reviews:33,age:'8+',universe:'Nova Squad',type:'Action Figure',isNew:false,isTrending:false,isCollectible:true,isSale:false},
  {id:'p42',name:'Nitro Warden',line:'Titan Works · Display Accessory',price:5640,badge:'Exclusive',rating:4.3,reviews:46,age:'All Ages',universe:'Titan Works',type:'Accessory',isNew:false,isTrending:false,isCollectible:true,isSale:false},
  {id:'p43',name:'Falcon Voyager',line:'Blaze Circuit · RC · 2.4GHz Remote',price:6860,salePrice:5490,badge:'Sale',rating:4.4,reviews:59,age:'8+',universe:'Blaze Circuit',type:'RC Vehicle',isNew:false,isTrending:true,isCollectible:false,isSale:true},
  {id:'p44',name:'Ranger Runner',line:'Frostbyte · Die-Cast · Alloy Build',price:4180,rating:4.5,reviews:72,age:'13+',universe:'Frostbyte',type:'Die-Cast',isNew:false,isTrending:false,isCollectible:false,isSale:false},
  {id:'p45',name:'Turbo Guardian',line:'GT Vector · Action Figure · Poseable',price:5390,rating:4.6,reviews:85,age:'8+',universe:'GT Vector',type:'Action Figure',isNew:true,isTrending:false,isCollectible:false,isSale:false},
  {id:'p46',name:'Shadow Blazer',line:'Aerodrome · Display Accessory',price:6710,badge:'New',rating:4.7,reviews:98,age:'All Ages',universe:'Aerodrome',type:'Accessory',isNew:true,isTrending:true,isCollectible:true,isSale:false},
  {id:'p47',name:'Blaze Scout',line:'Skyline Riders · RC · 2.4GHz Remote',price:3930,badge:'Best Seller',rating:4.8,reviews:111,age:'8+',universe:'Skyline Riders',type:'RC Vehicle',isNew:false,isTrending:false,isCollectible:false,isSale:false},
  {id:'p48',name:'Nova Trooper',line:'Ironclad Legion · Die-Cast · Alloy Build',price:5350,badge:'Limited Edition',rating:4.9,reviews:124,age:'13+',universe:'Ironclad Legion',type:'Die-Cast',isNew:false,isTrending:false,isCollectible:true,isSale:false},
  {id:'p49',name:'Storm Drifter',line:'Rangehead · Action Figure · Poseable',price:6590,salePrice:5270,badge:'Sale',rating:3.8,reviews:137,age:'8+',universe:'Rangehead',type:'Action Figure',isNew:false,isTrending:true,isCollectible:false,isSale:true},
  {id:'p50',name:'Rapid Hunter',line:'Voltage Corps · Display Accessory',price:6750,badge:'Sale',rating:3.9,reviews:150,age:'All Ages',universe:'Voltage Corps',type:'Accessory',isNew:true,isTrending:false,isCollectible:false,isSale:false},
  {id:'p51',name:'Vortex Rambler',line:'Nova Squad · RC · 2.4GHz Remote',price:4170,rating:4.0,reviews:163,age:'8+',universe:'Nova Squad',type:'RC Vehicle',isNew:false,isTrending:false,isCollectible:false,isSale:false},
  {id:'p52',name:'Apex Racer',line:'Titan Works · Die-Cast · Alloy Build',price:5440,rating:4.1,reviews:176,age:'13+',universe:'Titan Works',type:'Die-Cast',isNew:false,isTrending:true,isCollectible:false,isSale:false},
  {id:'p53',name:'Comet Striker',line:'Blaze Circuit · Action Figure · Poseable',price:6710,badge:'New',rating:4.2,reviews:9,age:'8+',universe:'Blaze Circuit',type:'Action Figure',isNew:true,isTrending:false,isCollectible:true,isSale:false},
  {id:'p54',name:'Ember Sentinel',line:'Frostbyte · Display Accessory',price:4020,badge:'Best Seller',rating:4.3,reviews:22,age:'All Ages',universe:'Frostbyte',type:'Accessory',isNew:false,isTrending:false,isCollectible:false,isSale:false},
  {id:'p55',name:'Frost Rider',line:'GT Vector · RC · 2.4GHz Remote',price:5240,salePrice:4190,badge:'Sale',rating:4.4,reviews:35,age:'8+',universe:'GT Vector',type:'RC Vehicle',isNew:true,isTrending:true,isCollectible:false,isSale:true},
  {id:'p56',name:'Talon Cruiser',line:'Aerodrome · Die-Cast · Alloy Build',price:6660,badge:'Exclusive',rating:4.5,reviews:48,age:'13+',universe:'Aerodrome',type:'Die-Cast',isNew:false,isTrending:false,isCollectible:true,isSale:false},
  {id:'p57',name:'Onyx Warden',line:'Skyline Riders · Action Figure · Poseable',price:3880,badge:'Sale',rating:4.6,reviews:61,age:'8+',universe:'Skyline Riders',type:'Action Figure',isNew:false,isTrending:false,isCollectible:false,isSale:false},
  {id:'p58',name:'Rogue Voyager',line:'Ironclad Legion · Display Accessory',price:5090,rating:4.7,reviews:74,age:'All Ages',universe:'Ironclad Legion',type:'Accessory',isNew:false,isTrending:true,isCollectible:false,isSale:false},
  {id:'p59',name:'Surge Runner',line:'Rangehead · RC · 2.4GHz Remote',price:6410,rating:4.8,reviews:87,age:'8+',universe:'Rangehead',type:'RC Vehicle',isNew:false,isTrending:false,isCollectible:false,isSale:false},
  {id:'p60',name:'Havoc Guardian',line:'Voltage Corps · Die-Cast · Alloy Build',price:6720,badge:'New',rating:4.9,reviews:100,age:'13+',universe:'Voltage Corps',type:'Die-Cast',isNew:true,isTrending:false,isCollectible:true,isSale:false},
  {id:'p61',name:'Cipher Blazer',line:'Nova Squad · Action Figure · Poseable',price:3970,salePrice:3180,badge:'Sale',rating:3.8,reviews:113,age:'8+',universe:'Nova Squad',type:'Action Figure',isNew:false,isTrending:true,isCollectible:false,isSale:true},
  {id:'p62',name:'Nitro Scout',line:'Titan Works · Display Accessory',price:5230,badge:'Limited Edition',rating:3.9,reviews:126,age:'All Ages',universe:'Titan Works',type:'Accessory',isNew:false,isTrending:false,isCollectible:true,isSale:false},
  {id:'p63',name:'Falcon Trooper',line:'Blaze Circuit · RC · 2.4GHz Remote',price:6550,badge:'Exclusive',rating:4.0,reviews:139,age:'8+',universe:'Blaze Circuit',type:'RC Vehicle',isNew:false,isTrending:false,isCollectible:true,isSale:false},
  {id:'p64',name:'Ranger Drifter',line:'Frostbyte · Die-Cast · Alloy Build',price:4850,badge:'Sale',rating:4.1,reviews:152,age:'13+',universe:'Frostbyte',type:'Die-Cast',isNew:false,isTrending:true,isCollectible:false,isSale:false},
  {id:'p65',name:'Turbo Hunter',line:'GT Vector · Action Figure · Poseable',price:6220,rating:4.2,reviews:165,age:'8+',universe:'GT Vector',type:'Action Figure',isNew:true,isTrending:false,isCollectible:false,isSale:false},
  {id:'p66',name:'Shadow Rambler',line:'Aerodrome · Display Accessory',price:3490,rating:4.3,reviews:178,age:'All Ages',universe:'Aerodrome',type:'Accessory',isNew:false,isTrending:false,isCollectible:false,isSale:false},
  {id:'p67',name:'Blaze Racer',line:'Skyline Riders · RC · 2.4GHz Remote',price:4800,salePrice:3840,badge:'Sale',rating:4.4,reviews:11,age:'8+',universe:'Skyline Riders',type:'RC Vehicle',isNew:false,isTrending:true,isCollectible:true,isSale:true},
  {id:'p68',name:'Nova Striker',line:'Ironclad Legion · Die-Cast · Alloy Build',price:6120,badge:'Best Seller',rating:4.5,reviews:24,age:'13+',universe:'Ironclad Legion',type:'Die-Cast',isNew:false,isTrending:false,isCollectible:false,isSale:false},
  {id:'p69',name:'Storm Sentinel',line:'Rangehead · Action Figure · Poseable',price:3340,badge:'Limited Edition',rating:4.6,reviews:37,age:'8+',universe:'Rangehead',type:'Action Figure',isNew:false,isTrending:false,isCollectible:true,isSale:false},
  {id:'p70',name:'Rapid Rider',line:'Voltage Corps · Display Accessory',price:3630,badge:'Exclusive',rating:4.7,reviews:50,age:'All Ages',universe:'Voltage Corps',type:'Accessory',isNew:true,isTrending:true,isCollectible:true,isSale:false},
  {id:'p71',name:'Vortex Cruiser',line:'Nova Squad · RC · 2.4GHz Remote',price:4950,badge:'Sale',rating:4.8,reviews:63,age:'8+',universe:'Nova Squad',type:'RC Vehicle',isNew:false,isTrending:false,isCollectible:false,isSale:false},
  {id:'p72',name:'Apex Warden',line:'Titan Works · Die-Cast · Alloy Build',price:6160,rating:4.9,reviews:76,age:'13+',universe:'Titan Works',type:'Die-Cast',isNew:false,isTrending:false,isCollectible:false,isSale:false},
  {id:'p73',name:'Comet Voyager',line:'Blaze Circuit · Action Figure · Poseable',price:3490,salePrice:2790,badge:'Sale',rating:3.8,reviews:89,age:'8+',universe:'Blaze Circuit',type:'Action Figure',isNew:false,isTrending:true,isCollectible:false,isSale:true},
  {id:'p74',name:'Ember Runner',line:'Frostbyte · Display Accessory',price:4800,badge:'New',rating:3.9,reviews:102,age:'All Ages',universe:'Frostbyte',type:'Accessory',isNew:true,isTrending:false,isCollectible:true,isSale:false},
  {id:'p75',name:'Cloudpaw Bear',line:'Plush Forest · Plush · 14in',price:3450,badge:'Best Seller',rating:4.8,reviews:64,age:'All Ages',universe:'Plush Forest',type:'Plush',isNew:false,isTrending:true,isCollectible:false,isSale:false},
  {id:'p76',name:'Marshwhistle Otter',line:'Plush Forest · Plush · 12in',price:3020,rating:4.6,reviews:38,age:'All Ages',universe:'Plush Forest',type:'Plush',isNew:false,isTrending:false,isCollectible:false,isSale:false},
  {id:'p77',name:'Duskling Fox Cub',line:'Plush Forest · Plush · 10in',price:3980,badge:'New',rating:4.4,reviews:14,age:'All Ages',universe:'Plush Forest',type:'Plush',isNew:true,isTrending:false,isCollectible:false,isSale:false},
  {id:'p78',name:'Snoreleaf Sloth',line:'Plush Forest · Plush · Weighted 16in',price:5230,badge:'Exclusive',rating:4.9,reviews:91,age:'All Ages',universe:'Plush Forest',type:'Plush',isNew:false,isTrending:true,isCollectible:true,isSale:false},
  {id:'p79',name:'Puffling Penguin Trio',line:'Plush Forest · Plush · 3-Pc.',price:4610,rating:4.3,reviews:22,age:'All Ages',universe:'Plush Forest',type:'Plush',isNew:false,isTrending:false,isCollectible:false,isSale:true,salePrice:3690},
  {id:'p80',name:'Cirrus Skybuild Tower',line:'Blockworks · Building Blocks · 480-Pc.',price:6400,badge:'Best Seller',rating:4.7,reviews:56,age:'8+',universe:'Blockworks',type:'Building Blocks',isNew:false,isTrending:true,isCollectible:false,isSale:false},
  {id:'p81',name:'Ironvale Fortress Set',line:'Blockworks · Building Blocks · 620-Pc.',price:6980,badge:'Limited Edition',rating:4.9,reviews:33,age:'8+',universe:'Blockworks',type:'Building Blocks',isNew:false,isTrending:false,isCollectible:true,isSale:false},
  {id:'p82',name:'Harborlight Crane Rig',line:'Blockworks · Building Blocks · 340-Pc.',price:4390,badge:'New',rating:4.2,reviews:9,age:'8+',universe:'Blockworks',type:'Building Blocks',isNew:true,isTrending:false,isCollectible:false,isSale:false},
  {id:'p83',name:'Nova Outpost Modular Base',line:'Blockworks · Building Blocks · 710-Pc.',price:6850,rating:4.6,reviews:47,age:'13+',universe:'Blockworks',type:'Building Blocks',isNew:false,isTrending:true,isCollectible:false,isSale:false},
  {id:'p84',name:'Riverside Cottage Build',line:'Blockworks · Building Blocks · 390-Pc.',price:3760,rating:4.1,reviews:18,age:'8+',universe:'Blockworks',type:'Building Blocks',isNew:false,isTrending:false,isCollectible:false,isSale:true,salePrice:3010},
  {id:'p85',name:'Skyline Riders Circuit Puzzle',line:'Puzzle Works · Jigsaw · 500-Pc.',price:3150,rating:4.4,reviews:26,age:'8+',universe:'Puzzle Works',type:'Puzzle',isNew:false,isTrending:false,isCollectible:false,isSale:false},
  {id:'p86',name:'Aerodrome Skymap Puzzle',line:'Puzzle Works · Jigsaw · 1000-Pc.',price:4020,badge:'Best Seller',rating:4.7,reviews:41,age:'13+',universe:'Puzzle Works',type:'Puzzle',isNew:false,isTrending:true,isCollectible:false,isSale:false},
  {id:'p87',name:'Ironclad Legion Night Ops Puzzle',line:'Puzzle Works · Jigsaw · 750-Pc.',price:3540,badge:'New',rating:4.0,reviews:7,age:'8+',universe:'Puzzle Works',type:'Puzzle',isNew:true,isTrending:false,isCollectible:false,isSale:false},
  {id:'p88',name:'Voltage Corps Glow Puzzle',line:'Puzzle Works · Jigsaw · Glow-in-Dark 400-Pc.',price:4870,badge:'Exclusive',rating:4.8,reviews:52,age:'8+',universe:'Puzzle Works',type:'Puzzle',isNew:false,isTrending:false,isCollectible:true,isSale:false},
  {id:'p89',name:'Harlow Studio Doll',line:'Kindred Circle · Doll · 18in Poseable',price:5480,badge:'Best Seller',rating:4.9,reviews:73,age:'8+',universe:'Kindred Circle',type:'Doll',isNew:false,isTrending:true,isCollectible:false,isSale:false},
  {id:'p90',name:'Marin Voyager Doll',line:'Kindred Circle · Doll · 18in Poseable',price:5480,rating:4.5,reviews:29,age:'8+',universe:'Kindred Circle',type:'Doll',isNew:false,isTrending:false,isCollectible:false,isSale:false},
  {id:'p91',name:'Kindred Circle Cafe Playset',line:'Kindred Circle · Doll Accessory Set',price:4260,badge:'New',rating:4.3,reviews:11,age:'6+',universe:'Kindred Circle',type:'Doll',isNew:true,isTrending:false,isCollectible:false,isSale:false},
  {id:'p92',name:'Rosette Bloom Doll',line:'Kindred Circle · Doll · 18in Poseable',price:5480,badge:'Limited Edition',rating:5.0,reviews:16,age:'8+',universe:'Kindred Circle',type:'Doll',isNew:false,isTrending:false,isCollectible:true,isSale:false},
  {id:'p93',name:'Kindred Circle Studio Wardrobe',line:'Kindred Circle · Doll Accessory · 6-Pc.',price:3390,rating:4.2,reviews:19,age:'6+',universe:'Kindred Circle',type:'Doll',isNew:false,isTrending:false,isCollectible:false,isSale:true,salePrice:2710},
  {id:'p94',name:'Rangehead Trail Blaster Water Gun',line:'Basecamp Outdoor · Water Toy',price:3080,badge:'Best Seller',rating:4.4,reviews:37,age:'6+',universe:'Basecamp Outdoor',type:'Outdoor Toy',isNew:false,isTrending:true,isCollectible:false,isSale:false},
  {id:'p95',name:'Skyline Riders Kick Scooter',line:'Basecamp Outdoor · Ride-On',price:6710,badge:'New',rating:4.6,reviews:24,age:'6+',universe:'Basecamp Outdoor',type:'Outdoor Toy',isNew:true,isTrending:false,isCollectible:false,isSale:false},
  {id:'p96',name:'Nova Squad Sidewalk Chalk Set',line:'Basecamp Outdoor · Arts & Craft · 24-Pc.',price:3020,rating:4.1,reviews:8,age:'3+',universe:'Nova Squad',type:'Outdoor Toy',isNew:false,isTrending:false,isCollectible:false,isSale:false},
  {id:'p97',name:'Aerodrome Sky Glider Kite',line:'Basecamp Outdoor · Outdoor Toy',price:3460,badge:'Sale',rating:4.3,reviews:15,age:'6+',universe:'Aerodrome',type:'Outdoor Toy',isNew:false,isTrending:false,isCollectible:false,isSale:true,salePrice:2770},
  {id:'p98',name:'GT Vector Trail Skateboard',line:'Basecamp Outdoor · Ride-On',price:6390,badge:'Exclusive',rating:4.7,reviews:44,age:'8+',universe:'GT Vector',type:'Outdoor Toy',isNew:false,isTrending:true,isCollectible:true,isSale:false},
  {id:'p99',name:'Frostbyte Bounce Trampoline Set',line:'Basecamp Outdoor · Outdoor Toy',price:6970,rating:4.5,reviews:31,age:'6+',universe:'Frostbyte',type:'Outdoor Toy',isNew:false,isTrending:false,isCollectible:false,isSale:false},
  {id:'p100',name:'Titan Works Backyard Obstacle Kit',line:'Basecamp Outdoor · Outdoor Toy · Set',price:6510,badge:'New',rating:4.2,reviews:6,age:'6+',universe:'Titan Works',type:'Outdoor Toy',isNew:true,isTrending:false,isCollectible:false,isSale:false},
];

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

PRODUCTS.forEach(p => {
  if (!p.images) p.images = [1,2,3].map(n => `https://picsum.photos/seed/${p.id}-${n}/800/800`);
  if (p.stock === undefined) p.stock = 25;
  if (!p.brand) p.brand = 'FunX';
  if (!p.material) p.material = p.type==='Die-Cast' ? 'Zinc Alloy Die-Cast' : p.type==='RC Vehicle' ? 'ABS Polymer & Die-Cast Alloy' : 'Painted PVC & ABS';
  if (!p.color) p.color = 'As Shown';
  if (p.electronic === undefined) p.electronic = p.type==='RC Vehicle';
  if (!p.boxDims) p.boxDims = p.type==='RC Vehicle' ? '14" x 9" x 6"' : (p.line||'').includes('3-Pc') ? '16" x 10" x 5"' : '9" x 5" x 4"';
  if (!p.weight) p.weight = p.type==='RC Vehicle' ? '2.4 lb' : '1.1 lb';
  if (!p.description) p.description = `The ${p.name} is built for ${p.universe} fans who actually want to play \u2014 ${p.badge==='Limited Edition'||p.isCollectible ? 'a numbered piece worth keeping on the shelf, and worth taking down.' : 'solid enough for daily play, sharp enough to display.'}`;
  if (p.hasVideo === undefined) p.hasVideo = p.id === 'p1';
});

function StockLabel({ stock }) {
  if (stock <= 0) return <div style={{fontSize:12,fontWeight:600,color:'var(--color-error)',marginTop:4}}>Out of Stock</div>;
  if (stock <= 5) return <div style={{fontSize:12,fontWeight:600,color:'var(--color-warning)',marginTop:4}}>Only {stock} left</div>;
  return null;
}

function fmtPrice(n) { return `PKR ${Number(n).toLocaleString('en-PK')}`; }

Object.assign(window, { NAV_LINKS, ICONS, SOCIAL_LINKS, Header, Footer, ProductCard, ProductGrid, CategoryTile, CategoryRail, SectionHeading, FilterSidebar, FilterGroup, PromoBanner, PRODUCTS, BADGE_TONE, JOURNAL_POSTS, fmtPrice, getCart, saveCart, addToCart, cartCount });
