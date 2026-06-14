import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <>
      <footer id="contact">
        <div className="footer-brand">
          <Link to="/" className="nav-logo">Mio Gusto</Link>
          <p>
            Authentic Italian cuisine crafted<br />
            with passion and fresh ingredients.<br />
            Frisco, TX
          </p>
        </div>

        <div className="footer-col">
          <h4>Navigate</h4>
          <ul>
            <li><Link to="/#about">About Us</Link></li>
            <li><Link to="/menu">Our Menu</Link></li>
            <li><Link to="/#events">Events</Link></li>
            <li><Link to="/reservation">Reservations</Link></li>
            <li><Link to="/catering">Catering</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Hours</h4>
          <p>
            Tue – Thu &nbsp; 11am – 9:30pm<br />
            Fri – Sat &nbsp;&nbsp;&nbsp; 11am – 10pm<br />
            Sunday &nbsp;&nbsp;&nbsp;&nbsp; 11am – 9:30pm<br />
            Monday &nbsp;&nbsp;&nbsp;&nbsp; Closed
          </p>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <p>
            7777 Warren Pkwy<br />
            Frisco, TX<br /><br />
            +1 (214) 308-9510<br />
            info@miogustofrisco.com
          </p>
          <a
            href="https://www.instagram.com/miogusto.italiancuisine"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="Instagram"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
      </footer>

      <div className="footer-bottom">
        &copy; 2026 Mio Gusto Restaurant &nbsp;·&nbsp; Website by Zedy3d.com
      </div>
    </>
  );
}
