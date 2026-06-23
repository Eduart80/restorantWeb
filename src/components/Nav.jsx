import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export default function Nav() {
  const [open, setOpen] = useState(false);
  const navRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  function close() { setOpen(false); }

  // Close when clicking outside the nav
  useEffect(() => {
    if (!open) return;
    function handleClickOutside(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [open]);

  // Close mobile menu when viewport crosses the desktop breakpoint
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 769px)');
    const handler = (e) => { if (e.matches) setOpen(false); };
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  // After navigating to home with a scrollTo state, scroll to that section
  useEffect(() => {
    if (location.state?.scrollTo && location.pathname === '/') {
      const id = location.state.scrollTo;
      // Small delay to let the page render before scrolling
      const timer = setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [location]);

  const isMenuPage = location.pathname === '/menu';

  function scrollTo(id) {
    close();
    if (location.pathname === '/') {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/', { state: { scrollTo: id } });
    }
  }

  return (
    <nav ref={navRef}>
      <Link to="/" className="nav-logo" onClick={close}>Mio Gusto</Link>

      {/* Desktop links */}
      <ul className="nav-links">
        <li><button className="nav-anchor" onClick={() => scrollTo('about')}>About</button></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><button className="nav-anchor" onClick={() => scrollTo('events')}>Events</button></li>
        <li><Link to="/catering" onClick={close}>Catering</Link></li>
      </ul>
      

      {isMenuPage && (
        <a
          href="https://www.clover.com/online-ordering/mio-gusto-frisco"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-order"
        >
          Order Online
        </a>
      )}
      <Link to="/reservation" className="nav-reserve">Reserve a Table</Link>

      {/* Hamburger button — mobile only */}
      <button
        className={`nav-hamburger${open ? ' open' : ''}`}
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Mobile drawer */}
      {open && (
        <div className="nav-mobile-menu">
          <button className="nav-anchor" onClick={() => scrollTo('about')}>About</button>
          <Link to="/menu" onClick={close}>Menu</Link>
          <button className="nav-anchor" onClick={() => scrollTo('events')}>Events</button>
          <Link to="/catering" onClick={close}>Catering</Link>
          {isMenuPage && (
            <a
              href="https://www.clover.com/online-ordering/mio-gusto-frisco"
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
            >
              Order Online
            </a>
          )}
          <Link to="/reservation" className="nav-reserve" onClick={close}>Reserve a Table</Link>
        </div>
      )}
    </nav>
  );
}
