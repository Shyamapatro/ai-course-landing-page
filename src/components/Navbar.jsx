import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    const menuVariants = {
        hidden: { opacity: 0, height: 0 },
        visible: { opacity: 1, height: 'auto', transition: { duration: 0.3 } },
        exit: { opacity: 0, height: 0, transition: { duration: 0.2 } }
    };

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-dark/80 backdrop-blur-xl border-b border-white/10 shadow-lg' : 'bg-transparent border-transparent'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex items-center">
                        <Link to="/" className="flex-shrink-0 group">
                            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent group-hover:opacity-80 transition-opacity">
                                AI Masterclass
                            </span>
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <a href="#features" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors relative group">
                                Features
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
                            </a>
                            <a href="#curriculum" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors relative group">
                                Curriculum
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
                            </a>
                            <a href="#pricing" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors relative group">
                                Pricing
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
                            </a>
                            <Link to="/login">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-full text-sm font-medium transition-all border border-white/10 backdrop-blur-sm"
                                >
                                    Sign In
                                </motion.button>
                            </Link>
                            <Link to="/signup">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-full text-sm font-medium transition-all shadow-lg shadow-primary/25"
                                >
                                    Get Started
                                </motion.button>
                            </Link>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none transition-colors"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="md:hidden bg-dark/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={menuVariants}
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <a href="#features" className="block text-gray-300 hover:text-white hover:bg-white/10 px-3 py-2 rounded-md text-base font-medium transition-colors">Features</a>
                            <a href="#curriculum" className="block text-gray-300 hover:text-white hover:bg-white/10 px-3 py-2 rounded-md text-base font-medium transition-colors">Curriculum</a>
                            <a href="#pricing" className="block text-gray-300 hover:text-white hover:bg-white/10 px-3 py-2 rounded-md text-base font-medium transition-colors">Pricing</a>
                            <div className="pt-4 flex flex-col space-y-3 px-3">
                                <Link to="/login">
                                    <button className="w-full text-center bg-white/10 hover:bg-white/20 text-white px-3 py-2 rounded-md text-base font-medium transition-colors border border-white/10">
                                        Sign In
                                    </button>
                                </Link>
                                <Link to="/signup">
                                    <button className="w-full text-center bg-primary hover:bg-primary/90 text-white px-3 py-2 rounded-md text-base font-medium transition-colors shadow-lg shadow-primary/25">
                                        Get Started
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
