import { useEffect, useRef, useState } from 'react';
import {
  ArrowRight,
  Check,
  ChevronRight,
  CircleUserRound,
  Minus,
  Plus,
  Search,
  ShoppingCart,
  Snowflake,
  Sparkles,
  X,
} from 'lucide-react';

const rawProducts = [
  { id: 'v1', name: 'French Fries', brand: 'McCain', category: 'Fries', type: 'veg', weight: '425g', price: 165, mrp: 199 },
  { id: 'v2', name: 'Potato Wedges', brand: 'HyFun', category: 'Fries', type: 'veg', weight: '425g', price: 145, mrp: 145 },
  { id: 'v3', name: 'Peri Peri Fries', brand: 'ITC Master Chef', category: 'Fries', type: 'veg', weight: '400g', price: 159, mrp: 179 },
  { id: 'v4', name: 'Aloo Smiles', brand: 'McCain', category: 'Fries', type: 'veg', weight: '420g', price: 175, mrp: 175 },
  { id: 'v5', name: 'Veg Momos', brand: "Ching's Secret", category: 'Momos', type: 'veg', weight: '270g', price: 99, mrp: 120 },
  { id: 'v6', name: 'Veg Momos', brand: 'Wai Wai', category: 'Momos', type: 'veg', weight: '250g', price: 90, mrp: 90 },
  { id: 'v7', name: 'Veg Momos', brand: 'Sumeru', category: 'Momos', type: 'veg', weight: '400g', price: 135, mrp: 150 },
  { id: 'v8', name: 'Aloo Paratha', brand: 'ITC Aashirvaad', category: 'Parathas', type: 'veg', weight: '400g', price: 89, mrp: 99 },
  { id: 'v9', name: 'Lachha Paratha', brand: 'ITC Aashirvaad', category: 'Parathas', type: 'veg', weight: '400g', price: 85, mrp: 85 },
  { id: 'v10', name: 'Malabar Paratha', brand: 'ID Fresh Food', category: 'Parathas', type: 'veg', weight: '400g', price: 95, mrp: 110 },
  { id: 'v11', name: 'Veg Cutlets', brand: 'Godrej Yummiez', category: 'Snacks', type: 'veg', weight: '216g', price: 110, mrp: 125 },
  { id: 'v12', name: 'Veg Nuggets', brand: 'ITC Master Chef', category: 'Snacks', type: 'veg', weight: '216g', price: 105, mrp: 105 },
  { id: 'v13', name: 'Veg Samosas', brand: 'Al Kabeer', category: 'Snacks', type: 'veg', weight: '400g', price: 149, mrp: 169 },
  { id: 'v14', name: 'Green Peas', brand: 'Safal', category: 'Vegetables', type: 'veg', weight: '500g', price: 65, mrp: 65 },
  { id: 'v15', name: 'Mixed Vegetables', brand: 'McCain', category: 'Vegetables', type: 'veg', weight: '500g', price: 89, mrp: 99 },
  { id: 'v16', name: 'Sweet Corn', brand: 'Safal', category: 'Vegetables', type: 'veg', weight: '500g', price: 79, mrp: 79 },
  { id: 'v17', name: 'Margherita Pizza Snacks', brand: 'McCain', category: 'Pizza', type: 'veg', weight: '296g', price: 189, mrp: 220 },
  { id: 'v18', name: 'Vanilla Ice Cream Tub', brand: 'Amul', category: 'Ice Cream', type: 'veg', weight: '1L', price: 195, mrp: 195 },
  { id: 'v19', name: 'Choco Bar', brand: "Kwality Wall's", category: 'Ice Cream', type: 'veg', weight: '4 pcs', price: 120, mrp: 140 },
  { id: 'n1', name: 'Chicken Momos', brand: "Ching's Secret", category: 'Momos', type: 'non-veg', weight: '270g', price: 129, mrp: 150 },
  { id: 'n2', name: 'Chicken Momos', brand: 'Sumeru', category: 'Momos', type: 'non-veg', weight: '400g', price: 165, mrp: 165 },
  { id: 'n3', name: 'Chicken Nuggets', brand: 'Godrej Yummiez', category: 'Snacks', type: 'non-veg', weight: '216g', price: 135, mrp: 155 },
  { id: 'n4', name: 'Chicken Nuggets', brand: "Venky's", category: 'Snacks', type: 'non-veg', weight: '425g', price: 220, mrp: 249 },
  { id: 'n5', name: 'Fish Fingers', brand: 'Godrej Yummiez', category: 'Snacks', type: 'non-veg', weight: '216g', price: 145, mrp: 145 },
  { id: 'n6', name: 'Chicken Popcorn', brand: 'Godrej Yummiez', category: 'Snacks', type: 'non-veg', weight: '225g', price: 150, mrp: 170 },
  { id: 'n7', name: 'Seekh Kebab', brand: 'Al Kabeer', category: 'Kebabs', type: 'non-veg', weight: '400g', price: 249, mrp: 279 },
  { id: 'n8', name: 'Chicken Sausages', brand: "Venky's", category: 'Snacks', type: 'non-veg', weight: '340g', price: 185, mrp: 185 },
  { id: 'n9', name: 'Chicken Samosas', brand: 'Al Kabeer', category: 'Snacks', type: 'non-veg', weight: '400g', price: 179, mrp: 199 },
  { id: 'n10', name: 'Ready-to-Eat Butter Chicken', brand: 'Prasuma', category: 'Meals', type: 'non-veg', weight: '300g', price: 210, mrp: 240 },
];

const displayCategoryMap = { Fries: 'Snacks', Momos: 'Snacks', Parathas: 'Breakfast', Snacks: 'Snacks', Vegetables: 'Vegetables', Pizza: 'Pizza', 'Ice Cream': 'Desserts', Kebabs: 'Meals', Meals: 'Meals' };
const productVisuals = { Fries: '🍟', Momos: '🥟', Parathas: '🫓', Snacks: '🥠', Vegetables: '🥦', Pizza: '🍕', 'Ice Cream': '🍨', Kebabs: '🍢', Meals: '🍛' };
const productTones = { Fries: 'from-yellow-100 to-stone-50', Momos: 'from-stone-100 to-orange-50', Parathas: 'from-amber-100 to-orange-50', Snacks: 'from-green-100 to-lime-50', Vegetables: 'from-emerald-100 to-green-50', Pizza: 'from-orange-100 to-amber-50', 'Ice Cream': 'from-purple-100 to-pink-50', Kebabs: 'from-red-100 to-orange-50', Meals: 'from-orange-100 to-rose-50' };
const categoryImageMap = { Fries: '/products/fries.jpg', Momos: '/products/momos.jpg', Parathas: '/products/parathas.jpg', Snacks: '/products/snacks.jpg', Vegetables: '/products/vegetables.jpg', Pizza: '/products/pizza.jpg', 'Ice Cream': '/products/ice-cream.jpg', Kebabs: '/products/kebabs.jpg', Meals: '/products/meals.jpg' };
const imageSlugs = { 'French Fries': 'french-fries', 'Potato Wedges': 'potato-wedges', 'Peri Peri Fries': 'peri-peri-fries', 'Aloo Smiles': 'aloo-smiles', 'Veg Momos': 'veg-momos', 'Chicken Momos': 'chicken-momos', 'Aloo Paratha': 'aloo-paratha', 'Lachha Paratha': 'lachha-paratha', 'Malabar Paratha': 'malabar-paratha', 'Veg Cutlets': 'veg-cutlets', 'Veg Nuggets': 'veg-nuggets', 'Veg Samosas': 'veg-samosas', 'Green Peas': 'green-peas', 'Mixed Vegetables': 'mixed-vegetables', 'Sweet Corn': 'sweet-corn', 'Margherita Pizza Snacks': 'margherita-pizza', 'Vanilla Ice Cream Tub': 'vanilla-ice-cream', 'Choco Bar': 'choco-bar', 'Chicken Nuggets': 'chicken-nuggets', 'Fish Fingers': 'fish-fingers', 'Chicken Popcorn': 'chicken-popcorn', 'Seekh Kebab': 'seekh-kebab', 'Chicken Sausages': 'chicken-sausages', 'Chicken Samosas': 'chicken-samosas', 'Ready-to-Eat Butter Chicken': 'butter-chicken' };

function getCategoryImage(category) {
  if (!category) return null;
  const match = Object.entries(categoryImageMap).find(([key]) => key.toLowerCase() === category.trim().toLowerCase());
  return match ? match[1] : null;
}
const products = rawProducts.map((p) => {
  const hasDiscount = p.mrp > p.price;
  const displayCategory = displayCategoryMap[p.category];
  const discoveryTags = ['Fries', 'Snacks'].includes(p.category) ? ['crispy'] : [];
  if (['Momos', 'Snacks', 'Kebabs'].includes(p.category)) discoveryTags.push('quick bites');
  if (p.category === 'Ice Cream') discoveryTags.push('sweet treats');
  const image = p.name === 'Aloo Smiles' ? '/products/AlooSmiles.jpg' : p.name === 'Chicken Samosas' ? '/products/samosa1.jpg' : p.name === 'Fish Fingers' ? '/products/fishfinger.jpg' : p.name === 'French Fries' ? '/products/french-fries.jpg' : p.name === 'Peri Peri Fries' ? '/products/PeriPeriFries1.jpg' : p.name === 'Potato Wedges' ? '/products/potato-wedges.png' : `/products/${imageSlugs[p.name]}.svg`;
  return { ...p, displayCategory, hasDiscount, discountPercent: hasDiscount ? Math.round(((p.mrp - p.price) / p.mrp) * 100) : 0, pack: p.weight, tags: [p.name, p.brand, p.category, displayCategory, p.type === 'veg' ? 'vegetarian' : 'non-vegetarian', ...discoveryTags].map((tag) => tag.toLowerCase()), visual: productVisuals[p.category], tone: productTones[p.category], image };
});

const categories = ['All Picks', 'Pizza', 'Snacks', 'Meals', 'Vegetables', 'Desserts', 'Breakfast'];
const dietaryFilters = [
  { label: 'All', value: 'all' },
  { label: 'Vegetarian', value: 'veg' },
  { label: 'Non-vegetarian', value: 'non-veg' },
];

function money(value) {
  return `₹${value}`;
}

export default function App() {
  const [query, setQuery] = useState('');
  const [diet, setDiet] = useState('all');
  const [category, setCategory] = useState('All Picks');
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutStage, setCheckoutStage] = useState('cart');
  const [profileOpen, setProfileOpen] = useState(false);
  const [toast, setToast] = useState('');
  const [eggOpen, setEggOpen] = useState(false);
  const [eggClosing, setEggClosing] = useState(false);
  const [logoPulse, setLogoPulse] = useState(false);
  const logoClicks = useRef(0);
  const logoTimer = useRef(null);
  const eggLock = useRef(false);
  const cartTriggerRef = useRef(null);
  const profileRef = useRef(null);
  const profileCloseTimer = useRef(null);
  const eggCloseTimer = useRef(null);

  const filteredProducts = products.filter((product) => {
    const matchesDiet = diet === 'all' || product.type === diet;
    const matchesCategory = category === 'All Picks' || product.displayCategory === category;
    const text = `${product.name} ${product.brand} ${product.category} ${product.displayCategory} ${product.type} ${product.tags.join(' ')}`.toLowerCase();
    const matchesSearch = !query.trim() || text.includes(query.trim().toLowerCase());
    return matchesDiet && matchesCategory && matchesSearch;
  });

  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);
  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  useEffect(() => () => {
    clearTimeout(logoTimer.current);
    clearTimeout(profileCloseTimer.current);
    clearTimeout(eggCloseTimer.current);
  }, []);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        if (profileOpen) setProfileOpen(false);
        else if (eggOpen) closeEgg();
        else if (cartOpen) closeCart();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [profileOpen, eggOpen, cartOpen]);

  useEffect(() => {
    if (!profileOpen) return undefined;
    const onPointerDown = (event) => {
      if (!profileRef.current?.contains(event.target)) setProfileOpen(false);
    };
    document.addEventListener('pointerdown', onPointerDown);
    return () => document.removeEventListener('pointerdown', onPointerDown);
  }, [profileOpen]);

  function handleLogoClick() {
    if (eggLock.current) return;
    setLogoPulse(true);
    window.setTimeout(() => setLogoPulse(false), 120);
    logoClicks.current += 1;
    clearTimeout(logoTimer.current);
    if (logoClicks.current === 5) {
      logoClicks.current = 0;
      eggLock.current = true;
      setEggOpen(true);
      setEggClosing(false);
      return;
    }
    logoTimer.current = window.setTimeout(() => {
      logoClicks.current = 0;
    }, 2500);
  }

  function closeEgg() {
    if (!eggOpen) return;
    setEggClosing(true);
    clearTimeout(eggCloseTimer.current);
    eggCloseTimer.current = window.setTimeout(() => {
      setEggOpen(false);
      setEggClosing(false);
      eggLock.current = false;
    }, 220);
  }

  function addToCart(product) {
    setCart((current) => {
      const existing = current.find((item) => item.id === product.id);
      if (existing) return current.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      return [...current, { ...product, quantity: 1 }];
    });
    setToast(`${product.name} added to your freezer`);
    window.setTimeout(() => setToast(''), 2200);
  }

  function updateQuantity(id, delta) {
    setCart((current) => current.flatMap((item) => {
      if (item.id !== id) return [item];
      const quantity = Math.max(0, item.quantity + delta);
      return quantity ? [{ ...item, quantity }] : [];
    }));
  }

  function removeItem(id) {
    setCart((current) => current.filter((item) => item.id !== id));
  }

  function openCart() {
    setCartOpen(true);
    setCheckoutStage('cart');
  }

  function openProfile() {
    clearTimeout(profileCloseTimer.current);
    setProfileOpen(true);
  }

  function closeProfileSoon() {
    clearTimeout(profileCloseTimer.current);
    profileCloseTimer.current = window.setTimeout(() => setProfileOpen(false), 140);
  }

  function toggleProfile() {
    clearTimeout(profileCloseTimer.current);
    setProfileOpen((current) => !current);
  }

  function closeCart() {
    setCartOpen(false);
    setCheckoutStage('cart');
    window.setTimeout(() => cartTriggerRef.current?.focus(), 0);
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#F7FAFC] text-ink">
      <header className="fixed inset-x-0 top-0 z-30 border-b border-line/80 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1200px] items-center gap-5 px-4 py-3 sm:px-6 lg:px-8">
          <a href="#top" onClick={handleLogoClick} className={`logo-button shrink-0 ${logoPulse ? 'logo-pulse' : ''}`} aria-label="FrostCart home">
            <span className="logo-mark"><Snowflake size={18} strokeWidth={2.5} /></span>
            <span>Frost<span>Cart</span></span>
          </a>
          <nav className="hidden items-center gap-6 text-sm font-medium text-muted lg:flex" aria-label="Primary navigation">
            <a href="#products" className="nav-link">Browse</a>
            <a href="#compare" className="nav-link">Brands</a>
            <a href="#freezer" className="nav-link">Still deciding?</a>
          </nav>
          <label className="global-search relative ml-auto min-w-0 max-w-[320px] flex-1">
            <span className="sr-only">Search frozen food</span>
            <Search size={17} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
            <input value={query} onChange={(event) => { setQuery(event.target.value); }} placeholder="Search your freezer" className="h-11 w-full rounded-xl border border-line bg-[#F7FAFC] pl-10 pr-10 text-sm outline-none transition focus:border-frost focus:ring-2 focus:ring-frost/20" />
            {query && <button type="button" onClick={() => setQuery('')} className="search-clear" aria-label="Clear search"><X size={16} /></button>}
          </label>
          <div ref={profileRef} className="profile-menu" onMouseEnter={openProfile} onMouseLeave={closeProfileSoon}>
            <button type="button" onClick={toggleProfile} className="icon-button" aria-label="Open profile menu" aria-expanded={profileOpen} aria-haspopup="menu"><CircleUserRound size={20} /></button>
            {profileOpen && <div className="profile-card" role="menu" aria-label="Demo profile menu" onMouseEnter={openProfile} onMouseLeave={closeProfileSoon}>
              <div className="profile-summary"><span className="profile-avatar" aria-hidden="true">AR</span><div><strong>Ayush</strong><span>FrostCart Member</span></div></div>
              <span className="profile-demo-label">Demo profile</span>
              <div className="profile-options">
                {['My Profile', 'My Orders', 'Saved Items'].map((option) => <button key={option} type="button" role="menuitem" onClick={() => setToast('Demo feature')}>{option}<ChevronRight size={15} /></button>)}
              </div>
            </div>}
          </div>
          <button ref={cartTriggerRef} onClick={openCart} className="icon-button relative" aria-label={`Open cart, ${itemCount} items`}>
            <ShoppingCart size={20} />
            {itemCount > 0 && <span className="cart-badge" aria-live="polite">{itemCount}</span>}
          </button>
        </div>
      </header>

      <main id="top" className="pt-[68px]">
        <section className="hero-shell">
          <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8 lg:py-20">
            <div className="max-w-xl">
              <div className="eyebrow"><span className="eyebrow-dot" /> FROZEN FAVORITES, CURATED FOR YOU</div>
              <h1 className="mt-5 text-5xl font-bold leading-[1.06] tracking-[-0.04em] text-navy sm:text-6xl">Every frozen favorite.<br /><span className="text-frost">One place.</span></h1>
              <p className="mt-6 max-w-lg text-base leading-7 text-muted sm:text-lg">Discover and compare frozen food from brands you already love. Make room for something good.</p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a href="#products" className="primary-button">Explore frozen food <ArrowRight size={17} /></a>
                <a href="#compare" className="secondary-button">Compare brands</a>
              </div>
              <div className="mt-8 flex items-center gap-3 text-sm text-muted"><span className="avatar-stack"><i /><i /><i /></span><span>Curated for everyday freezer decisions</span></div>
            </div>
            <div className="hero-catalog" aria-label="FrostCart freezer discovery">
              <div className="hero-catalog-top"><div><span className="mini-label">WHAT'S YOUR CRAVING?</span><h2>Find something worth making room for.</h2></div><span className="ice-orb"><Snowflake size={20} /></span></div>
              <div className="hero-product-row">{products.slice(0, 3).map((product) => <MiniProduct key={product.id} product={product} onAdd={addToCart} cartItem={cart.find((item) => item.id === product.id)} />)}</div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1200px] px-4 py-10 sm:px-6 lg:px-8" aria-label="Food categories">
          <div className="flex items-end justify-between gap-4"><div><span className="section-kicker">START WITH A CRAVING</span><h2 className="section-title mt-2">Find something for your freezer.</h2></div><a href="#products" className="text-sm font-semibold text-frost">View all <ChevronRight size={16} className="inline" /></a></div>
          <div className="filter-groups mt-6">
            <div className="filter-group"><span className="filter-label">Dietary</span><div className="filter-row">{dietaryFilters.map((item) => <button key={item.value} onClick={() => setDiet(item.value)} className={`category-chip ${diet === item.value ? 'category-chip-active' : ''}`}>{item.label}</button>)}</div></div>
            <div className="filter-group"><span className="filter-label">Category</span><div className="filter-row">{categories.map((item) => <button key={item} onClick={() => setCategory(item)} className={`category-chip ${category === item ? 'category-chip-active' : ''}`}>{item}</button>)}</div></div>
          </div>
        </section>

        <section id="products" className="mx-auto max-w-[1200px] scroll-mt-24 px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4"><div><span className="section-kicker">THE FREEZER EDIT</span><h2 className="section-title mt-2">{query ? `Search results for “${query}”` : 'Popular right now'}</h2></div><span className="text-sm text-muted">{filteredProducts.length} items</span></div>
          {filteredProducts.length ? <div className="product-grid mt-7">{filteredProducts.map((product) => <ProductCard key={product.id} product={product} onAdd={addToCart} cartItem={cart.find((item) => item.id === product.id)} />)}</div> : <div className="empty-results mt-7"><div><p className="font-semibold text-navy">No frozen picks found.</p><p className="mt-2 text-sm text-muted">Try another category or dietary preference.</p></div><button onClick={() => { setQuery(''); setDiet('all'); setCategory('All Picks'); }} className="secondary-button">Clear filters</button></div>}
        </section>

        <section id="compare" className="mx-auto max-w-[1200px] scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8">
          <div className="compare-band"><div className="max-w-md"><span className="section-kicker text-frost">THE FROSTCART DIFFERENCE</span><h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">Compare across brands, without the freezer aisle shuffle.</h2><p className="mt-4 leading-7 text-muted">See familiar options side by side and choose what fits your week. These are sample products for this prototype.</p><a href="#products" className="secondary-button mt-7 inline-flex">Browse the collection <ArrowRight size={16} /></a></div><div className="compare-table"><div className="compare-head"><span>Sample pick</span><span>Pack</span><span>Price</span></div>{products.slice(0, 3).map((product) => <div className="compare-row" key={product.id}><span><b>{product.brand}</b>{product.name}</span><span>{product.pack}</span><strong>{money(product.price)}</strong></div>)}</div></div>
        </section>

        <MoodPicker products={products} onAdd={addToCart} />

        <section className="mx-auto max-w-[1200px] px-4 pb-20 sm:px-6 lg:px-8"><div className="mb-8"><span className="section-kicker">HOW IT WORKS</span><h2 className="section-title mt-2">From craving to cold storage</h2></div><div className="steps-grid">{[['01', 'Discover', 'Search by craving, browse dietary preferences, or choose a category.'], ['02', 'Compare', 'See pack sizes, brands, and prices together before you decide.'], ['03', 'Stock up', 'Add your picks, review the freezer, and keep browsing when you’re ready.']].map(([number, title, copy]) => <div className="step" key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></div>)}</div></section>

        <section className="mx-auto max-w-[1200px] px-4 pb-20 sm:px-6 lg:px-8"><div className="final-cta"><div><span className="section-kicker text-white/70">MAKE SPACE FOR GOOD</span><h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Your next freezer favorite is closer than you think.</h2></div><a href="#products" className="white-button">Explore frozen food <ArrowRight size={17} /></a></div></section>
      </main>

      <footer className="border-t border-line bg-white"><div className="mx-auto flex max-w-[1200px] flex-col gap-5 px-4 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8"><div><a href="#top" className="font-bold text-navy">FrostCart</a><p className="mt-1">Every frozen favorite. One place.</p></div><div className="flex gap-5"><a href="#products">Browse</a><a href="#compare">Brands</a><a href="#freezer">Build your freezer</a></div><span>Sample homepage prototype</span></div></footer>

      {toast && <div className="toast" role="status"><Check size={17} /> {toast}</div>}
      {cartOpen && <CartDrawer cart={cart} itemCount={itemCount} subtotal={subtotal} onClose={closeCart} onUpdate={updateQuantity} onRemove={removeItem} checkoutStage={checkoutStage} onStartCheckout={() => setCheckoutStage('checkout')} onBackToCart={() => setCheckoutStage('cart')} onConfirmDemoOrder={() => setCheckoutStage('confirmed')} />}
      {eggOpen && <div className={`egg-overlay ${eggClosing ? 'egg-overlay-closing' : ''}`} role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) closeEgg(); }}><section className={`egg-panel ${eggClosing ? 'egg-panel-closing' : ''}`} role="dialog" aria-modal="true" aria-labelledby="egg-title"><button onClick={closeEgg} className="egg-close" aria-label="Close freezer reward"><X size={20} /></button><div className="egg-glow"><Snowflake size={36} /></div><div className="egg-freezer"><div className="egg-door"><span>FROST</span></div><div className="egg-inside"><Snowflake size={28} /></div></div><h2 id="egg-title">Freezer unlocked.</h2><p>You found the cold side of FrostCart.</p><button onClick={closeEgg} className="primary-button mx-auto mt-6">Keep shopping <ArrowRight size={16} /></button></section></div>}
    </div>
  );
}

function ProductImage({ product, className = 'product-image' }) {
  const [imageSrc, setImageSrc] = useState(product?.image || getCategoryImage(product?.category) || null);
  const [usedCategoryImage, setUsedCategoryImage] = useState(false);

  useEffect(() => {
    const nextImage = product?.image || getCategoryImage(product?.category) || null;
    setImageSrc(nextImage);
    setUsedCategoryImage(false);
  }, [product]);

  const handleImageError = () => {
    const categoryImage = getCategoryImage(product?.category);

    if (!usedCategoryImage && categoryImage && imageSrc !== categoryImage) {
      setUsedCategoryImage(true);
      setImageSrc(categoryImage);
      return;
    }

    setImageSrc(null);
  };

  return <div className={`${className} product-image bg-gradient-to-br ${product.tone}`}><div className="image-placeholder"><Snowflake size={24} /></div><span className="product-visual" aria-hidden="true">{product.visual}</span>{imageSrc ? <img src={imageSrc} alt={`${product.brand} ${product.name}`} onError={handleImageError} /> : null}</div>;
}

function MiniProduct({ product, onAdd, cartItem }) {
  return <div className="mini-product"><ProductImage product={product} className="mini-image" /><strong>{product.name}</strong><span>{product.pack} · {money(product.price)}</span><button type="button" onClick={() => onAdd(product)} className="mini-add-button">{cartItem ? <><Check size={13} /> Added</> : <><Plus size={13} /> Add to freezer</>}</button></div>;
}

function ProductCard({ product, onAdd, cartItem }) {
  return <article className="product-card"><ProductImage product={product} /><div className="flex flex-1 flex-col p-4"><div className="flex items-center justify-between gap-2"><p className="text-xs font-semibold uppercase tracking-wide text-muted">{product.brand}</p><span className={`diet-dot diet-dot-${product.type}`} aria-label={product.type === 'veg' ? 'Vegetarian' : 'Non-vegetarian'} /></div><h3 className="product-name mt-2">{product.name}</h3><p className="mt-1 text-sm text-muted">{product.weight}</p><div className="mt-auto flex items-end justify-between gap-3 pt-5"><div><strong className="block text-lg text-navy">{money(product.price)}</strong>{product.hasDiscount && <span className="price-meta"><s>{money(product.mrp)}</s><b>{product.discountPercent}% off</b></span>}</div><button onClick={() => onAdd(product)} className={`add-button ${cartItem ? 'add-button-added' : ''}`} aria-label={`Add ${product.name} to freezer`}>{cartItem ? <><Check size={15} /> {cartItem.quantity > 1 ? `Added ${cartItem.quantity}` : 'Added'}</> : <><Plus size={16} /> Add to freezer</>}</button></div></div></article>;
}

const moodOptions = [
  { label: 'Excited', emoji: '🤩', description: 'Give me something fun', categories: ['Snacks', 'Momos', 'Pizza', 'Kebabs', 'Fries'] },
  { label: 'Happy', emoji: '😊', description: "I'm ready for a treat", categories: ['Pizza', 'Momos', 'Snacks', 'Fries', 'Ice Cream'] },
  { label: 'Just okay', emoji: '😐', description: 'Keep it simple', categories: ['Parathas', 'Momos', 'Snacks', 'Vegetables', 'Fries'] },
  { label: 'Stressed', emoji: '😫', description: 'I need some comfort', categories: ['Meals', 'Momos', 'Snacks', 'Fries', 'Kebabs'] },
  { label: 'Sad', emoji: '🥲', description: 'Give me a little comfort', categories: ['Ice Cream', 'Momos', 'Snacks', 'Fries', 'Pizza'] },
];

function getRecommendation(mood, preference, productList, currentId = null) {
  if (!mood || !preference || !Array.isArray(productList)) return null;
  const eligibleCategories = moodOptions.find((option) => option.label === mood)?.categories || [];
  const matches = productList.filter((product) => eligibleCategories.includes(product.category) && product.type === preference);
  if (!matches.length) return null;
  const alternatives = matches.length > 1 && currentId ? matches.filter((product) => product.id !== currentId) : matches;
  return alternatives[Math.floor(Math.random() * alternatives.length)];
}

function MoodPicker({ products: productList, onAdd }) {
  const [selectedMood, setSelectedMood] = useState('');
  const [selectedPreference, setSelectedPreference] = useState('');
  const [recommendation, setRecommendation] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);

  function chooseMood(mood) {
    setSelectedMood(mood);
    setRecommendation(null);
    setHasSearched(false);
  }

  function choosePreference(preference) {
    setSelectedPreference(preference);
    setRecommendation(null);
    setHasSearched(false);
  }

  function findPick(mood = selectedMood, preference = selectedPreference) {
    const currentId = mood === selectedMood && preference === selectedPreference ? recommendation?.id : null;
    setRecommendation(getRecommendation(mood, preference, productList, currentId));
    setHasSearched(true);
  }

  function surpriseMe() {
    const mood = moodOptions[Math.floor(Math.random() * moodOptions.length)].label;
    const preference = Math.random() < 0.5 ? 'veg' : 'non-veg';
    setSelectedMood(mood);
    setSelectedPreference(preference);
    findPick(mood, preference);
  }

  function tryAnotherMood() {
    setSelectedMood('');
    setSelectedPreference('');
    setRecommendation(null);
    setHasSearched(false);
  }

  const selectedMoodOption = moodOptions.find((option) => option.label === selectedMood);

  return <section id="freezer" className="mx-auto max-w-[1200px] scroll-mt-24 px-4 pb-20 sm:px-6 lg:px-8"><div className="mood-picker-band"><div className="mood-picker-copy"><span className="section-kicker text-frost">A SMALL FREEZER DETOUR</span><h2 className="mt-3 max-w-xl text-3xl font-bold tracking-tight text-navy sm:text-4xl">Still deciding? Let your mood pick.</h2><p className="mt-4 max-w-xl leading-7 text-muted">Tell us how you're feeling — we'll recommend something from the freezer.</p></div><div className="mood-picker-controls"><div className="mood-control-group"><span className="mood-control-label">How are you feeling?</span><div className="mood-options" role="radiogroup" aria-label="Choose your mood">{moodOptions.map((option) => <button key={option.label} type="button" role="radio" aria-checked={selectedMood === option.label} onClick={() => chooseMood(option.label)} className={`mood-option ${selectedMood === option.label ? 'mood-option-active' : ''}`}><span aria-hidden="true">{option.emoji}</span>{option.label}</button>)}</div></div><div className="mood-control-group"><span className="mood-control-label">What's your preference?</span><div className="mood-options" role="radiogroup" aria-label="Choose your food preference"><button type="button" role="radio" aria-checked={selectedPreference === 'veg'} onClick={() => choosePreference('veg')} className={`mood-option ${selectedPreference === 'veg' ? 'mood-option-active' : ''}`}><span aria-hidden="true">🌱</span>Vegetarian</button><button type="button" role="radio" aria-checked={selectedPreference === 'non-veg'} onClick={() => choosePreference('non-veg')} className={`mood-option ${selectedPreference === 'non-veg' ? 'mood-option-active' : ''}`}><span aria-hidden="true">🍗</span>Non-vegetarian</button></div></div><div className="mood-actions"><button type="button" disabled={!selectedMood || !selectedPreference} onClick={() => findPick()} className="primary-button">Find my pick <ArrowRight size={16} /></button><button type="button" onClick={surpriseMe} className="secondary-button">🎲 Surprise me</button></div></div>{hasSearched && <div className="mood-result" aria-live="polite">{recommendation ? <><div className="mood-result-heading"><span>{selectedMoodOption?.emoji}</span><h3>Your pick for feeling {selectedMood}</h3></div><div className="mood-result-product"><ProductImage product={recommendation} className="mood-result-image" /><div className="mood-result-details"><p className="mood-result-brand">{recommendation.brand}</p><h4>{recommendation.name}</h4><p className="mood-result-meta">{recommendation.weight}</p><div className="mood-result-price"><strong>{money(recommendation.price)}</strong>{recommendation.hasDiscount && <span><s>{money(recommendation.mrp)}</s> {recommendation.discountPercent}% off</span>}</div><button type="button" onClick={() => onAdd(recommendation)} className="primary-button">Add to cart <Plus size={16} /></button></div></div><button type="button" onClick={tryAnotherMood} className="try-mood-button">Try another mood</button></> : <div className="mood-no-match"><p>No pick for this combination yet — try another mood or preference.</p><button type="button" onClick={tryAnotherMood} className="secondary-button">Try another mood</button></div>}</div>}</div></section>;
}

function CartDrawer({ cart, itemCount, subtotal, onClose, onUpdate, onRemove }) {
  return <div className="drawer-overlay" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}><aside className="cart-drawer" role="dialog" aria-modal="true" aria-labelledby="cart-title" tabIndex="-1"><div className="flex items-start justify-between border-b border-line px-5 py-5"><div><h2 id="cart-title" className="text-xl font-bold text-navy">Your freezer picks</h2><p className="mt-1 text-sm text-muted" aria-live="polite">{itemCount} {itemCount === 1 ? 'item' : 'items'}</p></div><button onClick={onClose} className="icon-button" aria-label="Close cart"><X size={20} /></button></div>{cart.length ? <><div className="cart-lines">{cart.map((item) => <div className="cart-line" key={item.id}><ProductImage product={item} className="cart-thumb" /><div className="min-w-0 flex-1"><p className="line-brand">{item.brand}</p><h3 className="line-name">{item.name}</h3><p className="line-meta">{item.pack} · freezer pick</p><strong className="mt-2 block text-base text-navy">{money(item.price * item.quantity)}</strong><div className="mt-2 flex items-center justify-between"><div className="quantity-control"><button onClick={() => onUpdate(item.id, -1)} aria-label={`Decrease ${item.name}`}><Minus size={15} /></button><span aria-label={`Quantity ${item.quantity}`}>{item.quantity}</span><button onClick={() => onUpdate(item.id, 1)} aria-label={`Increase ${item.name}`}><Plus size={15} /></button></div><button onClick={() => onRemove(item.id)} className="remove-button">Remove</button></div></div></div>)}</div><div className="cart-footer"><div className="flex items-center justify-between text-base"><span className="text-muted">Subtotal</span><strong className="text-xl text-navy">{money(subtotal)}</strong></div><button className="primary-button mt-4 w-full justify-center">Checkout demo <ArrowRight size={16} /></button><button onClick={onClose} className="secondary-button mt-3 w-full justify-center">Keep browsing</button><p className="mt-4 text-center text-xs text-muted">This prototype does not process payment.</p></div></> : <div className="empty-cart"><div className="empty-cart-icon"><ShoppingCart size={28} /></div><h3>Your freezer is waiting.</h3><p>Start with something delicious from the freezer collection.</p><button onClick={onClose} className="primary-button mt-5">Browse frozen food <ArrowRight size={16} /></button></div>}</aside></div>;
}
