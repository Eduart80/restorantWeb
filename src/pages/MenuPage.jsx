import { useState } from 'react';
import { menuItems, categories, lunchMenuItems, lunchCategories, drinksDessertItems, drinksDessertCategories } from '../data/menuData';
import Footer from '../components/Footer';
import Nav from '../components/Nav';

export default function MenuPage() {
  const [active, setActive] = useState('All');
  const [lunchActive, setLunchActive] = useState('All');
  const [drinksActive, setDrinksActive] = useState('All');

  const filtered = active === 'All' ? menuItems : menuItems.filter((i) => i.category === active);
  const lunchFiltered = lunchActive === 'All' ? lunchMenuItems : lunchMenuItems.filter((i) => i.category === lunchActive);
  const drinksFiltered = drinksActive === 'All' ? drinksDessertItems : drinksDessertItems.filter((i) => i.category === drinksActive);

  return (
    <>
      <Nav />

      {/* Hero Banner */}
      <div className="res-page-hero">
        <span className="section-tag">What We Serve</span>
        <h1>Our Menu</h1>
        <div className="section-line"><span></span>&#10022;<span></span></div>
        <p>Authentic Italian dishes crafted with the finest seasonal ingredients.</p>
      </div>

      {/* Section Jump Nav */}
      <div className="menu-jump-nav">
        <a href="#menu" className="menu-jump-btn">Dinner Menu</a>
        <a href="#lunch-menu" className="menu-jump-btn">Lunch Menu</a>
        <a href="#drinks-dessert" className="menu-jump-btn">Drinks &amp; Dessert</a>
      </div>

      {/* Dinner Menu Section */}
      <section className="menu-strip menu-page" id="menu">
        <div className="menu-categories">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`cat-btn${active === cat ? ' active' : ''}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="menu-grid menu-grid-page">
          {filtered.map((item, i) => (
            <div className="menu-item" key={`${item.category}-${item.name}-${i}`}>
              <div
                className="menu-item-img"
                style={{ background: `url('${item.img}') center/cover` }}
              ></div>
              <div className="menu-item-info">
                <div className="menu-item-top">
                  <div className="menu-item-name">{item.name}</div>
                  <div className="menu-item-price">{item.price}</div>
                </div>
                <div className="menu-item-desc">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="consumer-advisory" style={{ marginTop: '40px', textAlign: 'center' }}>
          <div className="menu-item-desc">
            <p>*Gluten-free options available. Please ask for details</p>
            <p>Consumer Advisory: Consuming raw or undercooked meats, poultry, seafood, shellfish, or eggs may increase your risk of foodborne illness.<br/>
  Please inform your server of any allergies or special dietary needs.</p>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '60px' }}>
          <a
            href="https://www.clover.com/online-ordering/mio-gusto-frisco"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-solid"
          >
            Order Online
          </a>
        </div>
      </section>

      {/* Lunch Menu Section */}
      <section className="menu-strip menu-page menu-strip--alt" id="lunch-menu">
        <span className="section-tag">Midday Dining</span>
        <h2 className="section-title">Lunch Menu</h2>
        <div className="section-line"><span></span>&#10022;<span></span></div>
        <p className="menu-section-note">Tuesday to Friday &nbsp;·&nbsp; 11 AM – 3 PM</p>

        <div className="menu-categories">
          {lunchCategories.map((cat) => (
            <button
              key={cat}
              className={`cat-btn${lunchActive === cat ? ' active' : ''}`}
              onClick={() => setLunchActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="menu-grid menu-grid-page">
          {lunchFiltered.map((item, i) => (
            <div className="menu-item" key={`lunch-${item.category}-${item.name}-${i}`}>
              <div
                className="menu-item-img"
                style={{ background: `url('${item.img}') center/cover` }}
              ></div>
              <div className="menu-item-info">
                <div className="menu-item-top">
                  <div className="menu-item-name">{item.name}</div>
                  <div className="menu-item-price">{item.price}</div>
                </div>
                <div className="menu-item-desc">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Drinks & Dessert Section */}
      <section className="menu-strip menu-page" id="drinks-dessert">
        <span className="section-tag">Sweet Endings</span>
        <h2 className="section-title">Drinks &amp; Dessert</h2>
        <div className="section-line"><span></span>&#10022;<span></span></div>

        <div className="menu-categories">
          {drinksDessertCategories.map((cat) => (
            <button
              key={cat}
              className={`cat-btn${drinksActive === cat ? ' active' : ''}`}
              onClick={() => setDrinksActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="menu-grid menu-grid-page">
          {drinksFiltered.map((item, i) => (
            <div className="menu-item" key={`drinks-${item.category}-${item.name}-${i}`}>
              <div
                className="menu-item-img"
                style={{ background: `url('${item.img}') center/cover` }}
              ></div>
              <div className="menu-item-info">
                <div className="menu-item-top">
                  <div className="menu-item-name">{item.name}</div>
                  <div className="menu-item-price">{item.price}</div>
                </div>
                <div className="menu-item-desc">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
