import { useState } from 'react';
import { Link } from 'react-router-dom';
import { menuItems, categories } from '../data/menuData';
import Footer from '../components/Footer';

export default function MenuPage() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? menuItems : menuItems.filter((i) => i.category === active);

  return (
    <>
      {/* Nav */}
      <nav>
        <Link to="/" className="nav-logo">Mio Gusto</Link>
        <ul className="nav-links">
          <li><Link to="/#about">About</Link></li>
          <li><Link to="/menu" className="nav-link-active">Menu</Link></li>
          <li><Link to="/#events">Events</Link></li>
          <li><Link to="/#catering">Catering</Link></li>
          <li><Link to="/#contact">Contact</Link></li>
        </ul>
        <a
          href="https://www.clover.com/online-ordering/mio-gusto-frisco"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-order"
        >
          Order Online
        </a>
        <Link to="/reservation" className="nav-reserve">Reserve a Table</Link>
      </nav>

      {/* Hero Banner */}
      <div className="res-page-hero">
        <span className="section-tag">What We Serve</span>
        <h1>Our Menu</h1>
        <div className="section-line"><span></span>&#10022;<span></span></div>
        <p>Authentic Italian dishes crafted with the finest seasonal ingredients.</p>
      </div>

      {/* Menu Section */}
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

      <Footer />
    </>
  );
}
