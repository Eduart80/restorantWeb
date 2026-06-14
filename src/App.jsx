import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
import ContactPage from './pages/ContactPage';
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
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reservation" element={<ReservationPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/catering" element={<CateringPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}
