import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [showSearchBox, setShowSearchBox] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const searchRef = useRef();
  const modalRef = useRef();
  const menuRef = useRef();

  const toggleSearchBox = () => {
    setShowSearchBox(!showSearchBox);
    setShowLoginModal(false); // Closes the login modal if open
  };

  const toggleLoginModal = () => {
    setShowLoginModal(!showLoginModal);
    setShowSearchBox(false); // Closes the search box if open
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Closes the search box, modal, or menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearchBox(false);
      }
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowLoginModal(false);
      }
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-white shadow-md py-4 fixed top-0 left-0 w-full z-10">
      <div className="flex justify-between items-center px-4 md:px-10">
        {/* Logo */}
        <div className="md:w-1/3 flex justify-start items-center">
          <img src="/src/assets/knuswomen-logo.png" alt="KnusWomen Logo" className="h-8" />
        </div>

        {/* Navigation */}
        <nav
          ref={menuRef}
          className="hidden md:flex md:justify-center md:items-center md:w-1/3 space-x-8"
        >
          <a href="#huur" className="nav-link">Ik huur</a>
          <a href="#zoek" className="nav-link">Ik zoek</a>
          <a href="#over" className="nav-link">Over ons</a>
          <a href="#projecten" className="nav-link">Projecten</a>
        </nav>

        {/* Nav Icons */}
        <div className="flex justify-end items-center space-x-4 md:w-1/3">
          <div className="relative" ref={searchRef}>
            <button
              className="text-gray-700 hover:text-blue-600 bg-transparent p-0 focus:outline-none border-none nav-btn"
              onClick={toggleSearchBox}
              style={{ borderColor: 'transparent' }}
            >
              <FontAwesomeIcon icon={faSearch} />
            </button>
            {showSearchBox && (
              <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="absolute inset-0 bg-black opacity-50" onClick={toggleSearchBox}></div>
                <input
                  type="text"
                  className="relative p-2 w-64 border border-gray-300 rounded-md shadow-lg"
                  placeholder="Search..."
                />
              </div>
            )}
          </div>

          <div className="relative" ref={modalRef}>
            <button
              className="text-gray-700 hover:text-blue-600 bg-transparent p-0 focus:outline-none border-none"
              onClick={toggleLoginModal}
              style={{ borderColor: 'transparent' }}
            >
              <FontAwesomeIcon icon={faUser} />
            </button>
            {showLoginModal && (
              <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="absolute inset-0 bg-black opacity-50" onClick={toggleLoginModal}></div>
                <div className="relative p-4 w-64 bg-white border border-gray-300 rounded-md shadow-lg">
                  <h3 className="text-lg font-semibold mb-2">Login</h3>
                  <input
                    type="text"
                    className="w-full p-2 mb-2 border border-gray-300 rounded-md"
                    placeholder="Username"
                  />
                  <input
                    type="password"
                    className="w-full p-2 mb-2 border border-gray-300 rounded-md"
                    placeholder="Password"
                  />
                  <button className="w-full bg-blue-600 text-white p-2 rounded-md">Login</button>
                </div>
              </div>
            )}
          </div>

          {/* Hamburger Menu Icon for Mobile */}
          <div className="md:hidden">
            <button
              className="text-gray-700 hover:text-blue-600 bg-transparent p-0 focus:outline-none border-none"
              onClick={toggleMenu}
            >
              <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <nav
        ref={menuRef}
        className={`md:hidden absolute top-full left-0 w-full bg-white flex-col items-start p-4 ${
          menuOpen ? "flex" : "hidden"
        }`}
      >
        <a href="#huur" className="text-gray-700 hover:text-blue-600 mb-2">Ik huur</a>
        <a href="#zoek" className="text-gray-700 hover:text-blue-600 mb-2">Ik zoek</a>
        <a href="#over" className="text-gray-700 hover:text-blue-600 mb-2">Over ons</a>
        <a href="#projecten" className="text-gray-700 hover:text-blue-600 mb-2">Projecten</a>
      </nav>
    </header>
  );
};

export default Header;
