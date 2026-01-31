import React, { useState, useEffect } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import DarkModeToggle from "../ui/DarkModeToggle";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");

  // Smooth scroll handler that accounts for the fixed navbar height
  const handleNavClick = (e, href, name) => {
    e.preventDefault();
    const target = document.querySelector(href);
    const navEl = document.querySelector('nav');
    const navHeight = navEl ? navEl.offsetHeight : 80;

    if (target) {
      const targetTop = target.getBoundingClientRect().top + window.scrollY - navHeight - 12; // extra padding
      window.scrollTo({ top: Math.max(0, targetTop), behavior: 'smooth' });
    }

    setActive(name);
    setMenuOpen(false);
  };

  // Scroll listener to update active link and keep CSS variable for nav height in sync
  useEffect(() => {
    const setNavHeightVar = () => {
      const navEl = document.querySelector('nav');
      if (navEl) {
        document.documentElement.style.setProperty('--nav-height', `${navEl.offsetHeight}px`);
      }
    };

    const handleScroll = () => {
      const scrollPos = window.scrollY + (document.querySelector('nav')?.offsetHeight || 100);
      navLinks.forEach((link) => {
        const section = document.querySelector(link.href);
        if (section) {
          if (
            section.offsetTop <= scrollPos &&
            section.offsetTop + section.offsetHeight > scrollPos
          ) {
            setActive(link.name);
          }
        }
      });
    };

    setNavHeightVar();
    window.addEventListener("resize", setNavHeightVar);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", setNavHeightVar);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Top Navbar */}
      <Motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="fixed top-0 w-full bg-background bg-opacity-95 backdrop-blur-sm text-textPrimary px-6 py-4 flex justify-between items-center z-50 shadow-[0_2px_12px_0_rgba(16,30,54,0.07)]"
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home", "Home")}
          className="text-xl font-bold text-accent focus:outline-none focus:ring-2 focus:ring-accent rounded"
        >
          Lemi
        </a>

        {/* Desktop Links + Dark Mode */}
        <div className="flex items-center">
          <ul className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                {link.name === "Home" ? (
                  <a
                    href="#home"
                    onClick={(e) => handleNavClick(e, "#home", "Home")}
                    className={`relative transition-colors duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-accent rounded px-2 py-1
                      ${active === link.name
                        ? "text-accent font-semibold after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-accent after:rounded"
                        : "text-textPrimary hover:text-accent hover:bg-accent/10 focus:bg-accent/10"}
                    `}
                  >
                    {link.name}
                  </a>
                ) : (
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href, link.name)}
                    className={`relative transition-colors duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-accent rounded px-2 py-1
                      ${active === link.name
                        ? "text-accent font-semibold after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-accent after:rounded"
                        : "text-textPrimary hover:text-accent hover:bg-accent/10 focus:bg-accent/10"}
                    `}
                  >
                    {link.name}
                  </a>
                )}
              </li>
            ))}
          </ul>
          <DarkModeToggle />
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-accent focus:outline-none focus:ring-2 focus:ring-accent rounded"
          aria-label="Open menu"
          onClick={() => setMenuOpen(true)}
        >
          ☰
        </button>
      </Motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <Motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 bg-background/95 backdrop-blur-sm z-40 flex flex-col items-center"
          >
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 text-accent text-2xl focus:outline-none focus:ring-2 focus:ring-accent rounded"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            >
              ✕
            </button>

            {/* Nav Links and Dark Mode Toggle with top margin */}
            <div className="flex flex-col items-center mt-24 gap-8">
              <ul className="flex flex-col space-y-6 text-xl">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href, link.name)}
                      className={`transition-colors duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-accent rounded ${
                        active === link.name
                          ? "text-accent font-semibold"
                          : "text-textPrimary hover:text-accent"
                      }`}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
              {/* Dark Mode Toggle */}
              <DarkModeToggle />
            </div>
          </Motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;