import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Logo from './Logo';
import { Button } from '@/components/ui/button';
import { Menu, X, LogOut, ChevronDown, User, Home, Layout, Activity, FileText, HelpCircle, Mail } from 'lucide-react';
import { useAuth } from '@/lib/auth-context';
import { toast } from 'sonner';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleLogout = () => {
    logout();
    toast.success('Successfully logged out');
    navigate('/');
    closeMenu();
  };

  const navLinks = [
    { path: '/', label: 'Home', icon: <Home size={14} /> },
    { path: '/plans', label: 'Plans', icon: <Layout size={14} /> },
    { path: '/fitness-profile', label: 'Fitness Profile', icon: <User size={14} /> },
    { path: '/your-plan', label: 'Your Plan', icon: <Activity size={14} /> },
    { path: '/about', label: 'About Us', icon: <FileText size={14} /> },
    { path: '/faq', label: 'FAQ', icon: <HelpCircle size={14} /> },
    { path: '/contact', label: 'Contact', icon: <Mail size={14} /> }
  ];

  return (
    <motion.nav 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled 
          ? 'navbar-glass' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-[85%] max-w-[85%] mx-auto px-4 py-2 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center"
        >
          <Logo />
        </motion.div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center">
          <div className="flex items-center bg-white/80 backdrop-blur-sm px-1 py-1 rounded-full shadow-sm border border-gray-100">
            {navLinks.map((link, index) => (
              <NavLink 
                key={link.path}
                to={link.path} 
                className={({isActive}) => `
                  mx-1 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 flex items-center gap-1.5
                  ${isActive 
                    ? 'text-white font-medium bg-gradient-to-r from-fit-green-500 to-fit-green-600 shadow-sm' 
                    : 'text-gray-700 hover:text-fit-green-600 hover:bg-gray-50'
                  }
                `}
              >
                {link.icon}
                {link.label}
              </NavLink>
            ))}
          </div>
          
          <div className="flex items-center ml-3">
            {isAuthenticated ? (
              <div className="flex items-center gap-2">
                <div className="bg-gray-50 px-3 py-1.5 rounded-full flex items-center text-xs font-medium text-gray-700 border border-gray-100">
                  <User size={14} className="mr-1.5 text-fit-green-500" />
                  {user?.email}
                </div>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="rounded-full text-xs font-medium bg-white shadow-sm border border-gray-100 hover:border-fit-green-200 hover:bg-fit-green-50"
                  onClick={handleLogout}
                >
                  <LogOut size={14} className="mr-1.5 text-fit-green-500" />
                  Logout
                </Button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <NavLink to="/login">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="rounded-full text-xs font-medium border-gray-200 hover:border-fit-green-200 hover:bg-fit-green-50 text-gray-700"
                  >
                    Log in
                  </Button>
                </NavLink>
                <NavLink to="/signup">
                  <Button 
                    size="sm"
                    className="rounded-full text-xs font-medium bg-gradient-to-r from-fit-green-500 to-fit-green-600 hover:from-fit-green-600 hover:to-fit-green-700 text-white shadow-sm hover:shadow"
                  >
                    Sign Up
                  </Button>
                </NavLink>
              </div>
            )}
          </div>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button 
            variant={scrolled ? "outline" : "ghost"} 
            size="icon" 
            onClick={toggleMenu} 
            aria-label="Menu" 
            className="rounded-full"
          >
            {isOpen ? 
              <X size={18} className="text-fit-green-600" /> : 
              <Menu size={18} className="text-fit-green-600" />
            }
          </Button>
        </div>
        
        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              className="md:hidden fixed inset-0 z-40 bg-black/5 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
            >
              <motion.div 
                className="absolute right-0 top-0 h-full w-[75%] max-w-sm bg-white shadow-xl p-4 flex flex-col"
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
                onClick={e => e.stopPropagation()}
              >
                <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-100">
                  <Logo />
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={closeMenu} 
                    className="rounded-full"
                  >
                    <X size={18} className="text-fit-green-600" />
                  </Button>
                </div>

                <div className="flex flex-col gap-1.5">
                  {navLinks.map((link) => (
                    <NavLink 
                      key={link.path}
                      to={link.path} 
                      onClick={closeMenu} 
                      className={({isActive}) => `
                        px-3 py-2.5 rounded-lg text-sm font-medium flex items-center gap-3
                        ${isActive 
                          ? 'text-fit-green-600 bg-fit-green-50 border-l-2 border-fit-green-500' 
                          : 'text-gray-700 hover:text-fit-green-600 hover:bg-gray-50'
                        }
                      `}
                    >
                      <span className="bg-white p-1.5 rounded-md shadow-sm">
                        {React.cloneElement(link.icon, { size: 16 })}
                      </span>
                      {link.label}
                    </NavLink>
                  ))}
                </div>
                
                <div className="mt-auto pt-4 border-t border-gray-100">
                  {isAuthenticated ? (
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 bg-gray-50 px-3 py-2.5 rounded-lg">
                        <User size={16} className="text-fit-green-500" />
                        <span className="text-sm text-gray-700 font-medium">{user?.email}</span>
                      </div>
                      <Button 
                        variant="outline" 
                        className="w-full rounded-lg flex items-center justify-center gap-2"
                        onClick={handleLogout}
                      >
                        <LogOut size={16} className="text-fit-green-500" />
                        <span>Sign Out</span>
                      </Button>
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 gap-3">
                      <NavLink to="/login" onClick={closeMenu} className="col-span-1">
                        <Button variant="outline" className="w-full rounded-lg">
                          Log in
                        </Button>
                      </NavLink>
                      <NavLink to="/signup" onClick={closeMenu} className="col-span-1">
                        <Button className="w-full rounded-lg bg-gradient-to-r from-fit-green-500 to-fit-green-600 hover:from-fit-green-600 hover:to-fit-green-700 text-white">
                          Sign Up
                        </Button>
                      </NavLink>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
