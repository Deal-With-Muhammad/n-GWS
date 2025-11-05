"use client";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import { ThemeSwitch } from "./theme-switch";
import { PopupModal } from "react-calendly";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const [rootEl, setRootEl] = useState(null);
  const navRef = useRef(null);
  const navContainerRef = useRef(null);
  const logoRef = useRef(null);
  const lastScrollY = useRef(0);

  // Initial animation on mount
  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", delay: 0.1 }
    );
  }, []);

  // Scroll detection with show/hide and smooth animation
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const shouldBeScrolled = currentScrollY > 50;

      // Show/hide logic
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        if (isVisible) {
          setIsVisible(false);
          gsap.to(navRef.current, {
            y: -100,
            duration: 0.4,
            ease: "power3.inOut",
          });
        }
      } else if (currentScrollY < lastScrollY.current) {
        if (!isVisible) {
          setIsVisible(true);
          gsap.to(navRef.current, {
            y: 0,
            duration: 0.4,
            ease: "power3.inOut",
          });
        }
      }

      lastScrollY.current = currentScrollY;

      // Squeezed effect on scroll
      if (shouldBeScrolled && !isScrolled) {
        setIsScrolled(true);

        gsap.to(navRef.current, {
          backgroundColor: "var(--nav-bg-scrolled)",
          backdropFilter: "blur(16px)",
          boxShadow: "0 4px 24px rgba(0, 0, 0, 0.12)",
          borderRadius: "24px",
          marginLeft: "16px",
          marginRight: "16px",
          marginTop: "12px",
          duration: 0.5,
          ease: "power3.out",
        });

        gsap.to(navContainerRef.current, {
          paddingTop: "12px",
          paddingBottom: "12px",
          duration: 0.5,
          ease: "power3.out",
        });
      } else if (!shouldBeScrolled && isScrolled) {
        setIsScrolled(false);

        gsap.to(navRef.current, {
          backgroundColor: "transparent",
          backdropFilter: "blur(0px)",
          boxShadow: "none",
          borderRadius: "0px",
          marginLeft: "0px",
          marginRight: "0px",
          marginTop: "0px",
          duration: 0.5,
          ease: "power3.out",
        });

        gsap.to(navContainerRef.current, {
          paddingTop: "16px",
          paddingBottom: "16px",
          duration: 0.5,
          ease: "power3.out",
        });
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolled, isVisible]);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "#services" },
    { label: "About", href: "/about" },
  ];

  // Set root element for Calendly modal
  useEffect(() => {
    // Use document.body instead of trying to find __next
    setRootEl(document.body);
  }, []);

  return (
    <>
      <style jsx global>{`
        :root {
          --nav-bg-scrolled: rgba(255, 255, 255, 0.85);
        }

        [data-theme="dark"],
        .dark {
          --nav-bg-scrolled: rgba(17, 24, 39, 0.85);
        }
      `}</style>

      <nav
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-50 transition-all"
        style={{ backgroundColor: "transparent" }}
      >
        <div
          ref={navContainerRef}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4"
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 flex-shrink-0">
              <div ref={logoRef} className="relative w-12 h-12 sm:w-14 sm:h-14">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                Sadeed Ahmad
              </span>
            </Link>

            {/* Center Navigation - Desktop */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors duration-200 relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-600 dark:bg-yellow-400 group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-3 sm:gap-4">
              <ThemeSwitch />

              <button
                onClick={() => setIsCalendlyOpen(true)}
                className="hidden sm:flex cursor-pointer items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white text-sm font-semibold rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200"
              >
                Book a Call
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all duration-200"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg">
            <div className="px-4 sm:px-6 py-4 space-y-1">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-yellow-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-all duration-200 font-medium"
                >
                  {item.label}
                </Link>
              ))}
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsCalendlyOpen(true);
                }}
                className="block w-full mt-2 px-4 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white text-center rounded-full font-semibold shadow-md hover:shadow-lg transition-all duration-200"
              >
                Book a Call
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Calendly Popup Modal */}
      {rootEl && (
        <PopupModal
          url="https://calendly.com/ilbigboss21"
          onModalClose={() => setIsCalendlyOpen(false)}
          open={isCalendlyOpen}
          rootElement={rootEl}
        />
      )}

      {/* Spacer to prevent content from going under fixed navbar */}
      <div className="h-20 sm:h-24"></div>
    </>
  );
};
