import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* Desktop & Tablet Navbar */}
      <nav className="fixed top-0 right-0 z-50 p-6 md:p-8">
        <div className="hidden md:flex items-center space-x-1 bg-black/40 backdrop-blur-sm border border-gray-700 rounded-full px-4 py-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-6 py-2 rounded-full text-lg font-medium transition-all duration-300 ${
                location.pathname === item.path
                  ? "bg-[#77913F] text-black"
                  : "text-white hover:bg-white/10"
              }`}
              data-testid={`nav-${item.name.toLowerCase()}`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden bg-black/50 backdrop-blur-sm p-3 rounded-lg border border-gray-800 text-white"
          data-testid="mobile-menu-button"
        >
          {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="md:hidden fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
            />
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden fixed top-20 right-6 bg-black border border-gray-800 rounded-lg p-6 z-50 min-w-[200px]"
            >
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-6 py-3 rounded-lg text-lg font-medium transition-all ${
                      location.pathname === item.path
                        ? "bg-[#77913F] text-black"
                        : "text-white hover:bg-white/10"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
