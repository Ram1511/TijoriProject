import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import TijoreeLogo from '../assets/img/tijoree.svg';
import useAnalyticsEventTracker from './useAnalyticsEventTracker';

const Header = () => {
  const location = useLocation();

  // Sticky Menu Area
  useEffect(() => {
    const isSticky = () => {
      const header = document.querySelector('.header-wrap');
      const scrollTop = window.scrollY;
      scrollTop >= 100 ? header.classList.add('is-sticky') : header.classList.remove('is-sticky');
    };

    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  }, []);

  const handleCollapse = () => {
    const nav = document.getElementById('navbarSupportedContent');
    const btn = document.getElementById('navbarBtn');
    nav.classList.remove('show');
    btn.classList.add('collapsed');
  };

  const gaEventTracker = useAnalyticsEventTracker('Contact us');

  return (
    <header className="white">
      <div className="container-md">
        <nav id="navbar" className="navbar navbar-expand-lg">
          <Link to="/" className="logo navbar-brand" onClick={handleCollapse}>
            <img src={TijoreeLogo} alt="tijoree" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            id="navbarBtn"
          >
            {/* Your SVG icon code */}
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}
                  to="/"
                  onClick={handleCollapse}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  to="#"
                  className={
                    location.pathname === '/products/current-account'
                      ? 'nav-link active'
                      : 'nav-link'
                  }
                >
                  <span>Products</span>
                </Link>
                <ul className="dropdown-menu">
                  <li className="nav-item">
                    <Link
                      to="/products/current-account"
                      className="nav-link"
                      onClick={handleCollapse}
                    >
                      Current A/C
                    </Link>
                  </li>
                  {/* <li className="nav-item">
                    <Link to="#" className="nav-link disabled" onClick={handleCollapse}>
                      Saving A/C
                    </Link>
                  </li> */}
                  <li className="nav-item">
                    <Link to="#" className="nav-link disabled" onClick={handleCollapse}>
                      Corporate Credit Card
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link
                  className={location.pathname === '/features' ? 'nav-link active' : 'nav-link'}
                  to="/features"
                  onClick={handleCollapse}
                >
                  Features
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={location.pathname === '/about' ? 'nav-link active' : 'nav-link'}
                  to="/about"
                  onClick={handleCollapse}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={location.pathname === '/blog' ? 'nav-link active' : 'nav-link'}
                  to="/blog"
                  onClick={handleCollapse}
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <Link
            onClick={() => gaEventTracker('Demo')}
            className="btn-rounded yellow request-demo"
            to="/form"
          >
            Free trial
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
