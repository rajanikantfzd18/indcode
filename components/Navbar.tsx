"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, ChevronRight } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [text, setText] = useState("");
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const fullText = "Indcode";
  const [scrollProgress, setScrollProgress] = useState(0);

  // Enhanced scroll effect with threshold
  useEffect(() => {
    const onScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrolled]);

  // Typewriter animation with smooth reveal
  useEffect(() => {
    let index = 0;
    const typeSpeed = 100;
    const cursorBlink = () => {
      const cursor = document.querySelector('.cursor');
      if (cursor) {
        cursor.classList.toggle('opacity-0');
      }
    };

    const typingInterval = setInterval(() => {
      setText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) {
        clearInterval(typingInterval);
        // Start cursor blink after typing completes
        setInterval(cursorBlink, 500);
      }
    }, typeSpeed);

    return () => clearInterval(typingInterval);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
    { href: "/careers", label: "Careers"},
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled 
            ? "bg-black/95 backdrop-blur-xl py-3 shadow-2xl shadow-blue-900/10 border-b border-gray-800/50" 
            : "bg-gradient-to-b from-black/50 to-transparent py-5"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Animated Logo/Brand */}
          <Link 
            href="/" 
            className="group relative flex items-center gap-2"
            onMouseEnter={() => setHoveredLink('logo')}
            onMouseLeave={() => setHoveredLink(null)}
          >
            {/* Animated border effect */}
            <div className="relative">
              <div className={`absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-0 group-hover:opacity-70 transition-opacity duration-500`}></div>
              <div className="relative bg-gray-900 rounded-lg p-2">
                <div className="flex items-center gap-2">
                  {/* Logo Icon */}
                  <div className="relative">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
                      <span className="font-bold text-white text-sm">IT</span>
                    </div>
                    {/* Pulsing dot */}
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse">
                      <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
                    </div>
                  </div>
                  
                  {/* Text with cursor */}
                  <div className="flex items-baseline">
                    <span className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                      {text}
                    </span>
                    <span className="cursor ml-0.5 text-blue-400">|</span>
                    <span className="ml-2 text-sm text-gray-400 font-light hidden sm:block">
                      Technologies
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative group"
                onMouseEnter={() => setHoveredLink(link.href)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <span className={`text-sm font-medium transition-all duration-300 ${
                  hoveredLink === link.href 
                    ? 'text-white' 
                    : 'text-gray-300 hover:text-white'
                }`}>
                  {link.label}
                </span>
                
                {/* Animated underline */}
                <div className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300 ${
                  hoveredLink === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></div>
                
                {/* Hover effect dot */}
                <div className={`absolute -top-2 -right-2 w-2 h-2 bg-blue-500 rounded-full transition-all duration-300 ${
                  hoveredLink === link.href ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                }`}></div>
              </Link>
            ))}
            
            {/* CTA Button */}
            <Link
              href="/contact"
              className="group relative overflow-hidden px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <span className="relative z-10 text-white font-semibold text-sm flex items-center gap-2">
                Get Started
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              {/* Shine effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden relative z-60 p-2 rounded-lg bg-gray-900/50 backdrop-blur-sm border border-gray-700"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />
        
        {/* Menu Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-80 bg-gradient-to-b from-gray-900 to-black border-l border-gray-800 shadow-2xl transition-transform duration-500 ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-8 h-full flex flex-col">
            {/* Mobile Logo */}
            <div className="mb-12">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
                  <span className="font-bold text-white text-lg">IT</span>
                </div>
                <div>
                  <div className="text-xl font-bold text-white">Indcode</div>
                  <div className="text-sm text-gray-400">Technologies</div>
                </div>
              </div>
            </div>

            {/* Mobile Links */}
            <div className="space-y-4 flex-1">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="group flex items-center justify-between p-4 rounded-xl hover:bg-gray-800/50 transition-all duration-300"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <span className="text-lg font-medium text-gray-200 group-hover:text-white">
                    {link.label}
                  </span>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-400 group-hover:translate-x-2 transition-transform" />
                </Link>
              ))}
            </div>

            {/* Mobile CTA */}
            <div className="pt-8 border-t border-gray-800">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center py-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all"
              >
                Start Your Project
              </Link>
              
              {/* Contact Info */}
              <div className="mt-8 space-y-3 text-sm text-gray-400">
                <div>📧 hello@indcode.com</div>
                <div>📞 +91 98765 43210</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 z-50">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </>
  );
}