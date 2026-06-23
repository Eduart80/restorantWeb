import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

function ScrollUpButton() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    function onScroll() { setVisible(window.scrollY > 300); }
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  if (!visible) return null;
  return (
    <button
      className="scroll-up-btn"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
    >
      &#8679;
    </button>
  );
}

function ScrollToTop() {
  const { pathname, state } = useLocation();
  useEffect(() => {
    // Skip scroll-to-top when navigating home to a specific section
    if (!state?.scrollTo) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);
  return null;
}
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Specials from './components/Specials';
import ParallaxDivider from './components/ParallaxDivider';
import Events from './components/Events';
import Footer from './components/Footer';
import ReservationPage from './pages/ReservationPage';
import MenuPage from './pages/MenuPage';
import CateringPage from './pages/CateringPage';
import './App.css';

function HomePage() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Specials />
      <ParallaxDivider />
      <Events />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ScrollUpButton />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reservation" element={<ReservationPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/catering" element={<CateringPage />} />
      </Routes>
    </BrowserRouter>
  );
}
