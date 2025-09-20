import React from 'react';
import { motion } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Parse from './pages/Parse';

// Main App component that renders the entire application.
// This is a functional component, which is a modern way to write React components.
export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  // Close mobile menu on route change
  React.useEffect(() => {
    const closeMenu = () => setMobileMenuOpen(false);
    window.addEventListener('resize', closeMenu);
    return () => window.removeEventListener('resize', closeMenu);
  }, []);

  const handleMenuToggle = () => setMobileMenuOpen((open) => !open);

  return (
    <Router>
      <div className="main-bg" style={{ fontFamily: 'Kumbh Sans, Arial, sans-serif' }}>
        {/* Animated Header */}
        <motion.header className="header pro-header" initial={{ y: -80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, type: 'spring' }}>
          <span className="logo">
            <i className="fa-solid fa-seedling" style={{ marginRight: 10, color: '#1976d2' }}></i>
            NaijaCal
          </span>
          <nav style={{ display: 'flex', alignItems: 'center' }}>
            <ul className={`nav-list${mobileMenuOpen ? ' open' : ''}`} aria-label="Main navigation">
              <NavLinkItem to="/" icon="fa-house" label="Home" />
              <NavLinkItem to="/parse" icon="fa-utensils" label="Parse" />
            </ul>
            <span className="mobile-menu-icon" onClick={handleMenuToggle} aria-label="Open menu" tabIndex={0} role="button" style={{marginLeft:16}}>
              <i className="fa-solid fa-bars"></i>
            </span>
          </nav>
        </motion.header>

        {/* Main Content with animation */}
        <motion.main className="main-content" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/parse" element={<Parse />} />
          </Routes>
        </motion.main>

        {/* Footer with animation */}
        <motion.footer className="footer pro-footer" initial={{ y: 80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, delay: 0.5 }}>
          <span style={{display:'flex',alignItems:'center',gap:8}}>
            <i className="fa-regular fa-copyright" style={{color:'#1976d2',marginRight:6}}></i>
            2025 NaijaCal. For demo only.
          </span>
          <span style={{ fontSize: '1.3rem', display:'flex', alignItems:'center', gap:8 }}>
            <a href="https://github.com/sethnwoks/Health_App" target="_blank" rel="noopener noreferrer" style={{color:'#1976d2', display:'flex',alignItems:'center'}}>
              <i className="fa-brands fa-github"></i>
            </a>
          </span>
        </motion.footer>
      </div>
    </Router>
  );


function NavLinkItem({ to, icon, label }) {
  const location = useLocation();
  const isActive = location.pathname === to;
  return (
    <li>
      <Link to={to} className={`nav-link${isActive ? ' nav-link-active' : ''}`}>
        <i className={`fa-solid ${icon}`} style={{color:'#1976d2'}}></i> {label}
      </Link>
    </li>
  );
}
}
