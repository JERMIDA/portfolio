import React from "react";

const Footer = () => {
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-background text-textPrimary py-12 border-t border-textPrimary/20 shadow-[0_-2px_12px_0_rgba(16,30,54,0.07)] mt-16">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Logo / Name */}
        <a
          href="#home"
          className="text-xl font-bold text-accent focus:outline-none focus:ring-2 focus:ring-accent rounded"
        >
          Lemi
        </a>

        {/* Quick Navigation */}
        <ul className="flex flex-wrap justify-center gap-4 text-sm">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="hover:text-accent hover:bg-accent/10 focus:bg-accent/10 transition-colors duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-accent rounded px-2 py-1"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Social Links */}
        <div className="flex gap-6 text-sm mt-4 md:mt-0">
          <a
            href="https://github.com/JERMIDA"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent hover:bg-accent/10 focus:bg-accent/10 focus:outline-none focus:ring-2 focus:ring-accent rounded px-2 py-1 transition-colors duration-200"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/letmeda"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent hover:bg-accent/10 focus:bg-accent/10 focus:outline-none focus:ring-2 focus:ring-accent rounded px-2 py-1 transition-colors duration-200"
          >
            LinkedIn
          </a>
          <a
            href="mailto:jeremydamena98@gmail.com"
            className="hover:text-accent hover:bg-accent/10 focus:bg-accent/10 focus:outline-none focus:ring-2 focus:ring-accent rounded px-2 py-1 transition-colors duration-200"
          >
            Email
          </a>
        </div>
      </div>

      {/* Copyright */}
      <p className="text-center text-xs mt-8">
        © {new Date().getFullYear()} Lemi Damena. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;