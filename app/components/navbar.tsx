import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';

import { Link } from 'react-router'
import React from 'react'

export default function Navbar() {
  return (
    <nav className="flex items-center max-w-4xl mx-auto justify-between w-full px-6 py-4 bg-primary">
  
        <div className="flex items-center space-x-8">
          <Link to="\"><img src="/image.png" alt="Logo" className="h-10 w-10" /></Link>
          <a href="#" className="text-secondary hover:text-blue-600">Pricing</a>
          <a href="#" className="text-secondary hover:text-blue-600">About</a>
          <a href="#" className="text-secondary hover:text-blue-600">Blog</a>
          <a href="#" className="text-secondary hover:text-blue-600">Wall of Love</a>
          {/* TODO: Make interactive */}
          <a href="#" className="text-secondary hover:text-blue-600 flex items-end gap-0.5">Resources <ChevronDown size={20} /></a>
        </div>

        <div className="flex items-center space-x-6">
          <a href="/contact" className="text-secondary hover:text-blue-600">Sign In</a>
          <a href="/login" className="text-gray-100 flex items-end gap-0.5 transition-all duration-150 hover:translate-x-1">Request Demo <ArrowRight className='text-blue-600' size={20} /> </a>
        </div>
      
    </nav>
  )
}
