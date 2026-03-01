import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (sectionId) => {
    setIsOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      // Aguarda a navegação ocorrer antes de rolar
      setTimeout(() => {
        if (sectionId === 'home-top') { // Special case for scrolling to top
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const element = document.getElementById(sectionId);
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      if (sectionId === 'home-top') { // Special case for scrolling to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const menuItems = [
    { label: 'Home', action: () => handleNavClick('home-top') }, // Changed from "Objetivo" to "Home" and scrolls to top
    { label: 'Produtos', action: () => handleNavClick('produtos') },
    { label: 'Mentor', action: () => handleNavClick('mentor') },
    { label: 'Blog', path: '/blog' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-blue-600 p-2 rounded-lg group-hover:bg-blue-700 transition-colors">
              <Rocket className="text-white h-6 w-6" />
            </div>
            <span className="font-bold text-xl text-slate-900 tracking-tight">
              Fórmula <span className="text-blue-600">Tech Lead</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item, index) => (
              item.path ? (
                <Link
                  key={index}
                  to={item.path}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${location.pathname === item.path ? 'text-blue-600 font-bold' : 'text-slate-600'}`}
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={index}
                  onClick={item.action}
                  className="text-sm font-medium text-slate-600 transition-colors hover:text-blue-600 cursor-pointer bg-transparent border-none p-0"
                >
                  {item.label}
                </button>
              )
            ))}

            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full px-6"
              onClick={() => window.location.href = 'https://www.instagram.com/brunocaetanobrito/'}
            >
              Solicitar Diagnóstico
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-slate-600 hover:text-blue-600 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white border-t border-slate-100"
        >
          <div className="container px-4 py-6 space-y-4">
            {menuItems.map((item, index) => (
              item.path ? (
                <Link
                  key={index}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block text-lg font-medium py-2 ${location.pathname === item.path ? 'text-blue-600' : 'text-slate-600'}`}
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={index}
                  onClick={item.action}
                  className="block w-full text-left text-lg font-medium text-slate-600 py-2"
                >
                  {item.label}
                </button>
              )
            ))}
            <div className="pt-4">
              <Button
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-6 text-lg"
                onClick={() => window.location.href = 'https://www.instagram.com/brunocaetanobrito/'}
              >
                Solicitar Diagnóstico
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;