import React, { useState } from 'react';
import { Link } from 'react-router';
import { ChevronDown, ArrowRight, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between max-w-4xl mx-auto w-full px-6 py-4 bg-primary relative z-50">
      <div className='flex items-center space-x-4'>   
      {/* Logo */}
      <Link to="/">
        <img src="/image.png" alt="Logo" className="h-10 w-10" />
      </Link>
    
      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-8">
        <a href="#" className="text-secondary hover:text-blue-600">Pricing</a>
        <a href="#" className="text-secondary hover:text-blue-600">About</a>
        <a href="#" className="text-secondary hover:text-blue-600">Blog</a>
        <a href="#" className="text-secondary hover:text-blue-600">Wall of Love</a>
        <a href="#" className="text-secondary hover:text-blue-600 flex items-end gap-0.5">Resources <ChevronDown size={20} /></a>
      </div>
      </div>

      {/* Desktop CTA */}
      <div className="hidden md:flex items-center space-x-6">
      <Link to="/login" className="text-secondary hover:text-blue-600">Sign In</Link>
      <a href="#" className="text-gray-100 flex items-end gap-0.5 transition-all duration-150 hover:translate-x-1">
        Request Demo <ArrowRight className='text-blue-600' size={20} />
      </a>
      </div>

      {/* Mobile Hamburger */}
      <button className="md:hidden text-secondary" onClick={() => setIsOpen(true)}>
      <Menu size={28} />
      </button>

      {/* Mobile Overlay Menu */}
      <div
      className={`fixed inset-0 bg-primary text-white px-6 py-4 flex flex-col z-50 transition-all duration-200 ease-in-out ${
       isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
      }`}
      style={{ willChange: 'transform' }}
      >
      {/* Close Button */}
      <div className="flex justify-between items-center mb-6">
        <img src="/image.png" alt="Logo" className="h-10 w-10" />
        <button onClick={() => setIsOpen(false)}>
        <X size={28} className="text-secondary" />
        </button>
      </div>

      {/* Mobile Menu Links */}
      <nav className="flex flex-col gap-5 text-lg">
        <a href="#" className="active:text-blue-500">Pricing</a>
        <a href="#" className="active:text-blue-500">About</a>
        <a href="#" className="active:text-blue-500">Blog</a>
        <a href="#" className="active:text-blue-500">Wall of Love</a>
        <a href="#" className="active:text-blue-500 flex items-end gap-1">Resources <ChevronDown size={20} /></a>
        <Link onClick={() => setIsOpen(false)} to="/login" className="active:text-blue-500 mt-4">Sign In</Link>
        <a href="#" className="flex items-center gap-1 text-white mt-2 active:translate-x-1 transition-all duration-150">
        Request Demo <ArrowRight className='text-blue-400' size={20} />
        </a>
      </nav>
      </div>
    </nav>
  );
}
