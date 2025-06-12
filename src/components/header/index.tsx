"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const menuItems = [
  { name: "Home", href: "#" },
  { name: "Serviços", href: "#services" },
  { name: "Contato", href: "#newpack" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [goingUp, setGoingUp] = useState(true);


  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          setGoingUp(currentScrollY < lastScrollY);
          setScrolled(currentScrollY > 20);
          lastScrollY = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (menuOpen && !target.closest(".menu-button") && !target.closest(".menu-container")) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
        ${scrolled && goingUp ? 'py-2 bg-white shadow-md backdrop-blur-sm bg-opacity-90' : 'py-4 bg-opacity-95'}`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/newpack.svg"
            alt="Newpack Logo"
            width={100}
            height={40}
            className={`transition-all duration-300 ${goingUp ? 'block' : 'md:hidden'} ${scrolled ? 'h-9 w-auto' : 'h-10 w-auto'}`}
            priority
          />
        </motion.div>

        <div className="hidden md:flex items-center space-x-8">
          {menuItems.map((item, i) => (
            <motion.a
              key={item.name}
              href={item.href}
              className={`text-base font-medium text-gray-800 hover:text-[var(--primary)] transition-colors relative group ${goingUp ? 'block' : 'hidden'}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--primary)] transition-all duration-300 group-hover:w-full"></span>
            </motion.a>
          ))}
          <motion.a
            href="https://wa.me/5519996991843?text=Olá!%20Gostaria%20de%20saber%20mais%20informações%20sobre%20seus%20serviços."
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-[#00AFEF] text-white px-5 py-2 rounded-md hover:bg-[#0097d1] transition-colors cursor-pointer"
          >
            Contato Rápido
          </motion.a>
          <motion.button
            className={`cursor-pointer menu-button uppercase text-sm font-medium tracking-wider text-black flex flex-col items-center ${goingUp ? 'hidden' : 'block'}`}
            onClick={() => setGoingUp(!goingUp)}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
          >
            <div className="flex flex-col gap-1.5">
              <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${menuOpen ? 'opacity-0 translate-x-3' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </motion.button>
        </div>
        <motion.button
          className="menu-button uppercase text-sm font-medium tracking-wider text-black flex flex-col items-center md:hidden"
          onClick={() => { setMenuOpen(!menuOpen); if (!menuOpen) setGoingUp(true); }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
        >
          <div className="flex flex-col gap-1.5">
            <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${menuOpen ? 'opacity-0 translate-x-3' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
          <span className="text-xs mt-1">{menuOpen ? "Fechar" : "Menu"}</span>
        </motion.button>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="menu-container fixed inset-0 top-[60px] bg-white z-40 md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-6 py-8">
              <nav className="flex flex-col gap-6">
                {menuItems.map((item, i) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="text-2xl font-medium hover:text-[var(--primary)] transition-colors border-b border-gray-100 pb-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * i }}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </nav>

              <motion.div
                className="mt-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <h3 className="text-sm uppercase text-gray-500 mb-4">Contato</h3>
                <div className="flex flex-col gap-3">
                  <a href="mailto:solucoesnewpack@gmail.com" className="flex items-center text-[var(--primary)]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    solucoesnewpack@gmail.com
                  </a>
                  <a href="tel:+5519996511990" className="flex items-center text-[var(--primary)]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    (19) 99651-1990
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="mt-8 flex flex-col gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <a href="https://wa.me/5519996991843?text=Olá%2C%20gostaria%20de%20solicitar%20um%20orçamento." target="_blank"
                  rel="noopener noreferrer" className="bg-[var(--primary)] text-white w-full py-3 rounded-lg font-medium text-center">
                  Solicitar Orçamento
                </a>
                <a href="https://wa.me/5519996991843?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20produtos%20da%20NEWPACK" target="_blank"
                  rel="noopener noreferrer" className="border border-gray-300 text-gray-700 w-full py-3 rounded-lg font-medium hover:bg-gray-50 text-center">
                  Ver Catálogo
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}