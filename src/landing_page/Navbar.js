import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
  const [show, setShow] = useState(true); // Navbar visibility
  const [lastScrollY, setLastScrollY] = useState(0); // Last scroll position

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      const currentScrollY = window.scrollY;

      if (currentScrollY < window.innerHeight) {
        // Within first viewport → always show
        setShow(true);
      } else {
        // After first viewport → hide on scroll down, show on scroll up
        if (currentScrollY > lastScrollY) {
          setShow(false); // scrolling down
        } else {
          setShow(true); // scrolling up
        }
      }

      setLastScrollY(currentScrollY);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <nav
      className="navbar navbar-expand-lg border-bottom border-4"
      style={{
        backgroundColor: "#fff",
        position: "fixed",
        top: show ? "0" : "-100px", // Slide up when hidden
        width: "100%",
        zIndex: 1000,
        transition: "top 0.3s ease-in", // Smooth animation
      }}
    >
      <div className="container-fluid pe-3 pb-1">
        <Link className="navbar-brand" to="/">
          <img
            src="media/images/logo.svg"
            alt="logo"
            style={{ width: "25%" }}
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/signup">
                Signup
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/product">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/pricing">
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/support">
                Support
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
