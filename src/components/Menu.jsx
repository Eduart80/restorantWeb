import { useState } from 'react';
import { Link } from 'react-router-dom';
import { menuItems, categories } from '../data/menuData';

export default function Menu() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? menuItems : menuItems.filter((i) => i.category === active);

  return (
    <section className="menu-strip" id="menu">
      <span className="section-tag">What We Serve</span>
      <h2 className="section-title">Our Menu</h2>
      <div className="section-line">
        <span></span>&#10022;<span></span>
      </div>
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
      <div className="menu-grid">
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
      <div style={{ textAlign: 'center', marginTop: '50px', display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
        <Link to="/menu" className="btn-primary">Full Menu</Link>
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
  );
}
