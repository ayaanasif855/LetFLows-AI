import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { PageType } from '../types';

interface HeaderProps {
  activePage: PageType;
  onNavigate: (page: PageType) => void;
  onOpenConsultation?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activePage,
  onNavigate,
  onOpenConsultation,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (page: PageType) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  const handleAboutClick = () => {
    setMobileMenuOpen(false);
    if (activePage !== 'home') {
      onNavigate('home');
      setTimeout(() => {
        const el = document.getElementById('about-specialist-section');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById('about-specialist-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactClick = () => {
    setMobileMenuOpen(false);
    window.open('https://cal.com/letflow/30min', '_blank');
  };

  return (
    <div className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <div className="w-full max-w-4xl pointer-events-auto">
        
        {/* Floating Pill Container */}
        <nav
          id="floating-pill-navbar"
          aria-label="Main Navigation"
          className="w-full bg-[#191611]/90 backdrop-blur-md border border-[rgba(232,200,151,0.2)] rounded-full px-5 sm:px-6 py-2.5 sm:py-3 shadow-2xl flex items-center justify-between transition-all"
        >
          {/* Brand Logo / Mark */}
          <a
            href="/"
            id="brand-logo-pill"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('home');
            }}
            className="flex items-center gap-2.5 sm:gap-3 text-left group cursor-pointer"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#F4F1EA] border border-[#DED9CF] flex items-center justify-center p-1 shadow-sm group-hover:border-[#E8C897] group-hover:scale-105 transition-all flex-shrink-0">
              <img
                src="/logo.png"
                alt="LetFlows AI Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex items-center">
              <span className="font-serif text-lg sm:text-xl tracking-tight text-[#EFE9DB] flex items-center leading-none">
                LetFlows AI
                <span className="w-1.5 h-1.5 rounded-full bg-[#E8C897] ml-1.5 inline-block" />
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links: Home, Services, About, Contact ONLY */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8 text-[11px] font-bold uppercase tracking-[0.22em]">
            <button
              type="button"
              id="nav-pill-home"
              onClick={() => handleNavClick('home')}
              className={`transition-colors py-1 cursor-pointer relative ${
                activePage === 'home'
                  ? 'text-[#E8C897]'
                  : 'text-[#EFE9DB]/80 hover:text-[#E8C897]'
              }`}
            >
              Home
              {activePage === 'home' && (
                <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-4 h-[1.5px] bg-[#E8C897]" />
              )}
            </button>

            <button
              type="button"
              id="nav-pill-services"
              onClick={() => handleNavClick('services')}
              className={`transition-colors py-1 cursor-pointer relative ${
                activePage === 'services'
                  ? 'text-[#E8C897]'
                  : 'text-[#EFE9DB]/80 hover:text-[#E8C897]'
              }`}
            >
              Services
              {activePage === 'services' && (
                <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-4 h-[1.5px] bg-[#E8C897]" />
              )}
            </button>

            <button
              type="button"
              id="nav-pill-about"
              onClick={handleAboutClick}
              className="text-[#EFE9DB]/80 hover:text-[#E8C897] transition-colors py-1 cursor-pointer"
            >
              About
            </button>

            <button
              type="button"
              id="nav-pill-contact"
              onClick={handleContactClick}
              className="text-[#EFE9DB]/80 hover:text-[#E8C897] transition-colors py-1 cursor-pointer"
            >
              Contact
            </button>
          </div>

          {/* Action CTA & Mobile Trigger */}
          <div className="flex items-center gap-3">
            <a
              href="https://cal.com/letflow/30min"
              target="_blank"
              rel="noopener noreferrer"
              id="pill-cta-btn"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2 bg-[#E8C897] text-[#191611] rounded-full text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-[#dfbd89] transition-all cursor-pointer active:scale-[0.98]"
            >
              <span>Let's Automate</span>
              <ArrowRight className="w-3 h-3" />
            </a>

            <button
              type="button"
              id="pill-mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="md:hidden p-2 rounded-full bg-[#211C16] border border-[rgba(232,200,151,0.2)] text-[#EFE9DB] hover:text-[#E8C897] cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Island */}
        {mobileMenuOpen && (
          <div
            id="pill-mobile-dropdown"
            className="md:hidden mt-2 bg-[#191611]/95 backdrop-blur-md border border-[rgba(232,200,151,0.25)] rounded-2xl p-5 shadow-2xl flex flex-col gap-3 text-xs font-bold uppercase tracking-[0.2em]"
          >
            <button
              type="button"
              onClick={() => handleNavClick('home')}
              className={`text-left py-2 px-3 rounded-lg transition-colors ${
                activePage === 'home'
                  ? 'bg-[#211C16] text-[#E8C897]'
                  : 'text-[#EFE9DB]/80 hover:text-[#E8C897]'
              }`}
            >
              Home
            </button>

            <button
              type="button"
              onClick={() => handleNavClick('services')}
              className={`text-left py-2 px-3 rounded-lg transition-colors ${
                activePage === 'services'
                  ? 'bg-[#211C16] text-[#E8C897]'
                  : 'text-[#EFE9DB]/80 hover:text-[#E8C897]'
              }`}
            >
              Services
            </button>

            <button
              type="button"
              onClick={handleAboutClick}
              className="text-left py-2 px-3 rounded-lg text-[#EFE9DB]/80 hover:text-[#E8C897] transition-colors"
            >
              About
            </button>

            <button
              type="button"
              onClick={handleContactClick}
              className="text-left py-2 px-3 rounded-lg text-[#EFE9DB]/80 hover:text-[#E8C897] transition-colors"
            >
              Contact
            </button>

            <div className="pt-2 border-t border-[rgba(232,200,151,0.15)]">
              <a
                href="https://cal.com/letflow/30min"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 px-4 bg-[#E8C897] text-[#191611] rounded-full text-center font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Let's Automate</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
