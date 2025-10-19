"use client";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Link from "next/link";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef(null);
  const navContainerRef = useRef(null);
  const logoRef = useRef(null);
  const textRef = useRef(null);
  const centerNavRef = useRef(null);
  const rightSideRef = useRef(null);

  // Initial animation on mount
  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.3, ease: "power2.out", delay: 0.2 }
    );
  }, []);

  // Scroll detection and smooth animation
  useEffect(() => {
    const handleScroll = () => {
      const shouldBeScrolled = window.scrollY > 100;

      if (shouldBeScrolled && !isScrolled) {
        setIsScrolled(true);
        gsap.to(navRef.current, {
          backgroundColor: "rgba(255, 255, 255, 1)",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
          duration: 0.2,
          ease: "power2.inOut",
        });
        gsap.to(logoRef.current, {
          scale: 0.85,
          duration: 0.2,
          ease: "power2.inOut",
        });
        gsap.to(navContainerRef.current, {
          paddingTop: "12px",
          paddingBottom: "12px",
          duration: 0.2,
          ease: "power2.inOut",
        });
      } else if (!shouldBeScrolled && isScrolled) {
        setIsScrolled(false);
        gsap.to(navRef.current, {
          backgroundColor: "rgba(255, 255, 255, 0)",
          boxShadow: "none",
          duration: 0.2,
          ease: "power2.inOut",
        });
        gsap.to(logoRef.current, {
          scale: 1,
          duration: 0.2,
          ease: "power2.inOut",
        });
        gsap.to(navContainerRef.current, {
          paddingTop: "24px",
          paddingBottom: "24px",
          duration: 0.2,
          ease: "power2.inOut",
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolled]);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Works", href: "/works" },
  ];

  const handleNavClick = (href) => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-700"
      >
        <div
          ref={navContainerRef}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6"
        >
          <div className="flex items-center justify-between gap-8">
            <div className="flex items-center gap-3 flex-shrink-0">
              <div className="origin-center transition-transform duration-700">
                <div className="relative w-18 h-18 sm:w-24 sm:h-24">
                  <Image
                    src="/logo.png"
                    alt="GWS Logo"
                    fill
                    className="object-contain cursor-pointer "
                    onClick={() => handleNavClick("/")}
                  />
                </div>
              </div>
              <span
                ref={textRef}
                className="text-xl relative right-6 sm:text-2xl text-gray-900 tracking-tight cursor-pointer hover:text-gray-700 transition-colors duration-300"
              ></span>
            </div>

            {/* Center Navigation */}
            <div
              ref={centerNavRef}
              className="hidden md:flex items-center gap-8 lg:gap-12"
            >
              {navItems.map((item) => (
                <Link
                  href={item.href}
                  className="text-gray-700 hover:text-gray-900 transition-all duration-300 font-medium text-sm sm:text-base relative group"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </div>

            {/* Right Side - Get to know us */}
            <div
              ref={rightSideRef}
              className="flex items-center gap-3 sm:gap-6"
            >
              <button
                onClick={() => handleNavClick("/contact")}
                className="hidden sm:flex items-center gap-2 px-5 sm:px-6 py-2.5 bg-gray-900 text-white rounded-full font-medium text-sm hover:bg-gray-800 transition-all duration-300 group"
              >
                <span>Get to know us</span>
                <ArrowUpRight
                  size={16}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                />
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-gray-900 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-all duration-300"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200/50 bg-white/98">
            <div className="px-4 sm:px-6 py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className="block w-full text-left px-4 py-3 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all duration-300 font-medium"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => handleNavClick("/contact")}
                className="w-full mt-2 px-4 py-3 bg-gray-900 text-white rounded-full font-medium flex items-center justify-center gap-2 hover:bg-gray-800 transition-all duration-300"
              >
                <span>Get to know us</span>
                <ArrowUpRight size={16} />
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};
