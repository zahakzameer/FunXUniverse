const NAV_LINKS = [
  { label: 'New', href: 'new.html' },
  { label: 'Trending', href: 'trending.html' },
  { label: 'Toys & Plush', href: 'toys-plush.html' },
  { label: 'Collectibles', href: 'collectibles.html' },
  { label: 'Sale', href: 'sale.html' },
];

const ICONS = {
  search: <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>,
  heart: <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg>,
  user: <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 20c1.6-3.8 4.8-6 8-6s6.4 2.2 8 6"/></svg>,
  cart: <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3h2l2.4 12.4a2 2 0 002 1.6h8.4a2 2 0 002-1.6L21 8H6"/><circle cx="9" cy="20" r="1"/><circle cx="18" cy="20" r="1"/></svg>,
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
  return <div style={{background:'var(--surface-sunken)',borderBottom:'1px solid var(--border-hairline-soft)',color:'var(--text-secondary)',fontSize:12,letterSpacing:'0.4px',textAlign:'center',padding:'9px 20px',fontFamily:'var(--font-body)'}}>
    Free authentication certificate & display stand on every order over PKR 150 — <span style={{color:'var(--accent-cyan)',cursor:'pointer'}}>see details</span>
  </div>;
}

function Header({ active }) {
  return <header style={{position:'sticky',top:0,zIndex:30,fontFamily:'var(--font-body)'}}>
    <AnnouncementBar/>
    <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',height:80,padding:'0 40px',background:'rgba(11,11,13,0.86)',backdropFilter:'blur(10px)',borderBottom:'1px solid var(--border-hairline-soft)'}}>
      <a href="index.html" style={{display:'flex',alignItems:'center'}}><img src="assets/logo.svg" style={{height:32}}/></a>
      <nav style={{display:'flex',gap:36}}>
        {NAV_LINKS.map(l => <a key={l.label} href={l.href} style={{fontSize:'var(--nav-link-size)',fontWeight:'var(--nav-link-weight)',color:l.label===active?'var(--text-primary)':'var(--text-secondary)',textDecoration:'none',position:'relative',paddingBottom:4,borderBottom:l.label===active?'2px solid var(--paint-orange)':'2px solid transparent'}}>{l.label}</a>)}
      </nav>
      <div style={{display:'flex',gap:22,alignItems:'center',color:'var(--text-secondary)'}}>
        <a href="search.html" style={{cursor:'pointer',display:'flex',color:'inherit'}} title="Search">{ICONS.search}</a>
        <a href="wishlist.html" style={{cursor:'pointer',display:'flex',color:'inherit'}} title="Wishlist">{ICONS.heart}</a>
        <a href="account.html" style={{cursor:'pointer',display:'flex',color:'inherit'}} title="Account">{ICONS.user}</a>
        <a href="cart.html" style={{cursor:'pointer',display:'flex',color:'inherit'}} title="Cart">{ICONS.cart}</a>
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
  const hasRealImages = p.images && p.images[0] && p.images[0].startsWith('assets/');
  const onEnter = () => { setHover(true); const v = videoRef.current; if (v) { v.currentTime = 0; v.play().catch(()=>{}); } };
  const onLeave = () => { setHover(false); const v = videoRef.current; if (v) { v.pause(); v.currentTime = 0; } };
  return <a href={`product.html?id=${p.id}`} onMouseEnter={onEnter} onMouseLeave={onLeave} style={{fontFamily:'var(--font-body)',cursor:'pointer',minWidth:0,display:'block',textDecoration:'none',color:'inherit'}}>
    <div style={{aspectRatio:'1',background:'var(--surface-gallery)',borderRadius:'var(--radius-lg)',marginBottom:14,position:'relative',overflow:'hidden',border:'1px solid var(--border-gallery)',boxShadow:hover?'var(--shadow-gallery-2)':'var(--shadow-gallery-1)',transition:'box-shadow var(--duration-base) var(--ease-standard)'}}>
      {hasRealImages ? <img src={p.images[0]} style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover',display:hover?'none':'block'}}/> : <image-slot id={`prod-${p.id}`} style={{width:'100%',height:'100%',pointerEvents:'none'}} placeholder={`Photo of ${p.name}`}></image-slot>}
      <video ref={videoRef} muted loop playsInline preload="none" poster="" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover',opacity:hover?1:0,transition:'opacity var(--duration-base) var(--ease-standard)',pointerEvents:'none'}}>
        <source src={`videos/${p.id}.mp4`} type="video/mp4"/>
      </video>
      {p.badge && <span style={{position:'absolute',top:12,left:12,background: p.badge==='Sale' ? 'var(--color-error)' : p.badge==='Exclusive' ? 'var(--color-success)' : 'var(--color-warning)',color: p.badge==='Sale'||p.badge==='Exclusive' ? '#fff' : '#141416',fontSize:10,fontWeight:700,letterSpacing:1,textTransform:'uppercase',padding:'5px 9px',borderRadius:'var(--radius-pill)'}}>{p.badge}</span>}
      <span onClick={(e)=>{e.stopPropagation();setWish(!wish);}} style={{position:'absolute',top:10,right:10,width:32,height:32,borderRadius:'50%',background:'rgba(255,255,255,0.9)',display:'flex',alignItems:'center',justifyContent:'center',color:wish?'var(--paint-red)':'#141416'}}>
        <svg width="15" height="15" viewBox="0 0 24 24" fill={wish?'currentColor':'none'} stroke="currentColor" strokeWidth="1.8"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg>
      </span>
      {p.images && p.images.length > 1 && <div style={{position:'absolute',bottom:54,left:0,right:0,display:'flex',justifyContent:'center',gap:5,opacity:hover?0:1,transition:'opacity var(--duration-fast)'}}>
        {p.images.map((_,i) => <span key={i} style={{width:5,height:5,borderRadius:'50%',background:i===0?'#fff':'rgba(255,255,255,0.4)'}}></span>)}
      </div>}
      <div style={{position:'absolute',left:0,right:0,bottom:0,transform: hover && p.stock>0 ? 'translateY(0)' : 'translateY(100%)',transition:'transform var(--duration-base) var(--ease-decelerate)',padding:10}}>
        <button disabled={p.stock<=0} onClick={(e)=>{e.preventDefault();e.stopPropagation();}} style={{width:'100%',height:38,borderRadius:'var(--radius-md)',border:'none',background:'#141416',color:'#fff',fontSize:12,fontWeight:700,letterSpacing:'0.5px',cursor:'pointer'}}>Quick Add</button>
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
  return <div style={{display:'grid',gridTemplateColumns:`repeat(${cols},minmax(0,1fr))`,gap:32}}>
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
  return <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',marginBottom:32}}>
    <div>
      {eyebrow && <div style={{fontSize:12,letterSpacing:2,fontWeight:700,color:'var(--accent-cyan)',textTransform:'uppercase',marginBottom:10}}>{eyebrow}</div>}
      <h2 style={{fontFamily:'var(--font-display)',fontStyle:'italic',fontWeight:700,fontSize:40,margin:0,color:'var(--text-primary)'}}>{title}</h2>
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
  {id:'p1',name:'GT Vector 12 Drift Racer',line:'RC Spray Drift · 2-in-1 4WD',price:69,badge:'Best Seller',rating:4.7,reviews:132,age:'8+',universe:'GT Vector',type:'RC Vehicle',isNew:false,isTrending:true,isCollectible:false,isSale:false,images:['assets/products/p1-box-front.jpg','assets/products/p1-full-kit.jpg','assets/products/p1-action-rear.jpg','assets/products/p1-collage.jpg','assets/products/p1-box-info.jpg']},
  {id:'p2',name:'Chrome Falcon Mk.II',line:'Aerodrome · Die-Cast',price:180,badge:'Best Seller',rating:4.6,reviews:89,age:'13+',universe:'Aerodrome',type:'Die-Cast',isNew:false,isTrending:true,isCollectible:false,isSale:false},
  {id:'p3',name:'Ochre Rambler',line:'Skyline Riders · Die-Cast',price:140,rating:4.3,reviews:52,age:'8+',universe:'Skyline Riders',type:'Die-Cast',isNew:false,isTrending:false,isCollectible:false,isSale:true,salePrice:98},
  {id:'p4',name:'Nightshift Racer',line:'Ironclad Legion · Action Figure',price:95,badge:'New',rating:4.1,reviews:23,age:'8+',universe:'Ironclad Legion',type:'Action Figure',isNew:true,isTrending:false,isCollectible:false,isSale:false},
  {id:'p5',name:'Sundown Coupe',line:'Skyline Riders · Die-Cast',price:260,badge:'Limited Edition',rating:4.9,reviews:201,age:'13+',universe:'Skyline Riders',type:'Die-Cast',isNew:false,isTrending:true,isCollectible:true,isSale:false},
  {id:'p6',name:'Voltage Rider',line:'Ironclad Legion · Action Figure',price:110,rating:4.4,reviews:67,age:'8+',universe:'Ironclad Legion',type:'Action Figure',isNew:false,isTrending:true,isCollectible:false,isSale:false},
  {id:'p7',name:'Rangehead Overland Rig',line:'Rangehead · Die-Cast',price:195,badge:'New',rating:4.7,reviews:12,age:'13+',universe:'Rangehead',type:'Die-Cast',isNew:true,isTrending:false,isCollectible:false,isSale:false},
  {id:'p8',name:'Ironclad Sentinel',line:'Ironclad Legion · Action Figure',price:130,badge:'Exclusive',rating:4.9,reviews:145,age:'13+',universe:'Ironclad Legion',type:'Action Figure',isNew:false,isTrending:true,isCollectible:true,isSale:false},
  {id:'p9',name:'Midnight Voltage Coupe',line:'Voltage Corps · Die-Cast',price:210,rating:4.2,reviews:34,age:'13+',universe:'Voltage Corps',type:'Die-Cast',isNew:false,isTrending:false,isCollectible:false,isSale:true,salePrice:159},
  {id:'p10',name:'Aerodrome Squadron Set',line:'Aerodrome · Die-Cast · 3-Pc.',price:340,badge:'Exclusive',rating:4.8,reviews:41,age:'13+',universe:'Aerodrome',type:'Die-Cast',isNew:false,isTrending:false,isCollectible:true,isSale:false},
  {id:'p11',name:'Rangehead Trailhand',line:'Rangehead · Action Figure',price:85,badge:'New',rating:4.0,reviews:8,age:'8+',universe:'Rangehead',type:'Action Figure',isNew:true,isTrending:false,isCollectible:false,isSale:false},
  {id:'p12',name:'Voltage Corps Prototype',line:'Voltage Corps · Action Figure',price:150,badge:'Limited Edition',rating:4.6,reviews:76,age:'13+',universe:'Voltage Corps',type:'Action Figure',isNew:false,isTrending:true,isCollectible:true,isSale:false},
  {id:'p13',name:'1966 Sable Wagon',line:'Skyline Riders · Die-Cast',price:245,rating:4.5,reviews:58,age:'13+',universe:'Skyline Riders',type:'Die-Cast',isNew:false,isTrending:false,isCollectible:true,isSale:true,salePrice:196},
  {id:'p14',name:'Ironclad Recon Unit',line:'Ironclad Legion · Action Figure',price:105,badge:'New',rating:4.3,reviews:15,age:'8+',universe:'Ironclad Legion',type:'Action Figure',isNew:true,isTrending:false,isCollectible:false,isSale:false},
  {id:'p15',name:'Aerodrome Ace Pilot',line:'Aerodrome · Action Figure',price:90,rating:4.1,reviews:29,age:'8+',universe:'Aerodrome',type:'Action Figure',isNew:false,isTrending:false,isCollectible:false,isSale:false},
  {id:'p16',name:'Rangehead Convoy Truck',line:'Rangehead · Die-Cast',price:225,badge:'Best Seller',rating:4.7,reviews:98,age:'13+',universe:'Rangehead',type:'Die-Cast',isNew:false,isTrending:true,isCollectible:false,isSale:false},
  {id:'p17',name:'Voltage Streak GT',line:'Voltage Corps · Die-Cast',price:175,rating:4.4,reviews:44,age:'13+',universe:'Voltage Corps',type:'Die-Cast',isNew:false,isTrending:false,isCollectible:false,isSale:true,salePrice:131},
  {id:'p18',name:'Skyline Anniversary Coupe',line:'Skyline Riders · Die-Cast · Numbered',price:310,badge:'Limited Edition',rating:5.0,reviews:19,age:'13+',universe:'Skyline Riders',type:'Die-Cast',isNew:true,isTrending:false,isCollectible:true,isSale:false},
  {id:'p19',name:'Ironclad Vanguard',line:'Ironclad Legion · Action Figure',price:120,rating:4.5,reviews:63,age:'13+',universe:'Ironclad Legion',type:'Action Figure',isNew:false,isTrending:false,isCollectible:false,isSale:false},
  {id:'p20',name:'Aerodrome Jetstream',line:'Aerodrome · Die-Cast',price:200,badge:'New',rating:4.2,reviews:6,age:'13+',universe:'Aerodrome',type:'Die-Cast',isNew:true,isTrending:false,isCollectible:false,isSale:false},
  {id:'p21',name:'Rangehead Trail Scout',line:'Rangehead · Action Figure',price:75,rating:3.9,reviews:11,age:'8+',universe:'Rangehead',type:'Action Figure',isNew:false,isTrending:false,isCollectible:false,isSale:true,salePrice:52},
  {id:'p22',name:'Voltage Corps Display Case',line:'Voltage Corps · Accessory',price:65,rating:4.6,reviews:37,age:'All Ages',universe:'Voltage Corps',type:'Accessory',isNew:false,isTrending:false,isCollectible:true,isSale:false},
  {id:'p23',name:'Skyline Chrome Edition',line:'Skyline Riders · Die-Cast',price:230,badge:'Exclusive',rating:4.8,reviews:82,age:'13+',universe:'Skyline Riders',type:'Die-Cast',isNew:false,isTrending:true,isCollectible:true,isSale:false},
  {id:'p24',name:'Ironclad Legion Founders Set',line:'Ironclad Legion · Action Figure · 4-Pc.',price:280,badge:'Limited Edition',rating:4.9,reviews:27,age:'13+',universe:'Ironclad Legion',type:'Action Figure',isNew:false,isTrending:false,isCollectible:true,isSale:false},
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
  if (!p.images) p.images = [1,2,3].map(n => `${p.id}-${n}`);
  if (p.stock === undefined) p.stock = 25;
  if (!p.brand) p.brand = 'FunX';
  if (!p.material) p.material = p.type==='Die-Cast' ? 'Zinc Alloy Die-Cast' : p.type==='RC Vehicle' ? 'ABS Polymer & Die-Cast Alloy' : 'Painted PVC & ABS';
  if (!p.color) p.color = 'As Shown';
  if (p.electronic === undefined) p.electronic = p.type==='RC Vehicle';
  if (!p.boxDims) p.boxDims = p.type==='RC Vehicle' ? '14" x 9" x 6"' : (p.line||'').includes('3-Pc') ? '16" x 10" x 5"' : '9" x 5" x 4"';
  if (!p.weight) p.weight = p.type==='RC Vehicle' ? '2.4 lb' : '1.1 lb';
  if (!p.description) p.description = `The ${p.name} is built for ${p.universe} fans who actually want to play \u2014 ${p.badge==='Limited Edition'||p.isCollectible ? 'a numbered piece worth keeping on the shelf, and worth taking down.' : 'solid enough for daily play, sharp enough to display.'}`;
});

function StockLabel({ stock }) {
  if (stock <= 0) return <div style={{fontSize:12,fontWeight:600,color:'var(--color-error)',marginTop:4}}>Out of Stock</div>;
  if (stock <= 5) return <div style={{fontSize:12,fontWeight:600,color:'var(--color-warning)',marginTop:4}}>Only {stock} left</div>;
  return null;
}

function fmtPrice(n) { return `PKR ${Number(n).toLocaleString('en-PK')}`; }

Object.assign(window, { NAV_LINKS, ICONS, SOCIAL_LINKS, Header, Footer, ProductCard, ProductGrid, CategoryTile, CategoryRail, SectionHeading, FilterSidebar, FilterGroup, PromoBanner, PRODUCTS, BADGE_TONE, JOURNAL_POSTS, fmtPrice });
