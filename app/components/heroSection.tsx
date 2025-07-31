import { ArrowRight } from "lucide-react";
import React from 'react'

export default function HeroSection() {
  return (
    <section className="relative bg-primary text-white">
      {/* Slanted Background */}
      <div className="absolute inset-0 -skew-y-3 bg-primary origin-top-right z-0 translate-y-16"></div>

      {/* Content */}
      <div className="relative z-10 px-6 py-20 max-w-4xl mx-auto flex flex-col md:flex-row items-center text-center md:text-left">
        <div className="flex-1">
          <h1 className="text-5xl font-md mb-4 font-serif">Create stunning web experiences</h1>
          <p className="text-md text-secondary mb-6">
            Our landing page template works on all devices , so you have only to set it up once, and it will look great on every device.
          </p>
          <div className="mt-6 w-2/3 flex flex-col md:flex-row gap-4">
            <button className="text-white text-sm bg-blue-600 transition-transform duration-200 hover:scale-110 hover:cursor-pointer active:bg-blue-300 rounded-xs py-2 w-1/2 flex justify-center items-center"> Request Demo <ArrowRight size={16} /> </button>
            <button className="text-white text-sm bg-secondary transiton-transform duration-200 hover:scale-110 hover:cursor-pointer active:bg-gray-50 rounded-xs py-2 w-1/2 flex justify-center items-center"> Explore Product <ArrowRight size={16} /> </button>
          </div>
        </div>
        <div className="flex-1 mt-8 md:mt-0 md:ml-8 flex justify-center">
          <img
            src="/hero-image.jpg"
            alt="Globe"
            className="rounded-md shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}
