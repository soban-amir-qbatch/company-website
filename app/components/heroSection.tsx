import { ArrowRight } from "lucide-react";
import React, { useRef, useState } from 'react'

export default function HeroSection() {

  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play()
      setIsPlaying(true)
    }
  }

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause()
      setIsPlaying(false)
    }
  }

  return (
    <section className="relative bg-primary text-white">
      {/* Slanted Background */}
      <div className="absolute inset-0 -skew-y-3 bg-primary origin-top-right z-0 translate-y-16"></div>

      {/* Content */}
      <div className="relative z-10 px-6 py-20 max-w-4xl mx-auto flex flex-col md:flex-row items-center text-center md:text-left">

        <div className="flex-5/12">
          <h1 className="text-5xl font-md mb-4 font-serif">Create stunning web experiences</h1>
          <p className="text-md text-secondary mb-6">
            Our landing page template works on all devices , so you have only to set it up once, and it will look great on every device.
          </p>
          <div className="mt-6 w-3/4 flex flex-col md:flex-row gap-4">
            <button className="text-white text-sm bg-blue-600 transition-transform duration-200 hover:scale-110 hover:cursor-pointer active:bg-blue-300 rounded-xs py-2 w-1/2 flex justify-center items-center"> Request Demo <ArrowRight size={16} /> </button>
            <button className="text-white text-sm bg-secondary transiton-transform duration-200 hover:scale-110 hover:cursor-pointer active:bg-gray-50 rounded-xs py-2 w-1/2 flex justify-center items-center"> Explore Product <ArrowRight size={16} /> </button>
          </div>
        </div>

        <div className="relative flex-6/12 mt-8 md:mt-0 md:ml-8 flex justify-center overflow-hidden w-96 h-80 pr-4 pb-4 ">
          {/* <img
            src="/hero-image.jpg"
            alt="Globe"
            className="rounded-md shadow-lg"
          /> */}
          <video
            onClick={isPlaying ? handlePause : handlePlay}
            ref={videoRef}
            muted
            loop
            playsInline
            className="object-cover rounded-lg z-1"
            src="/hero-video.mp4"
          />

          {!isPlaying && (
            <button
              onClick={handlePlay}
              className="absolute w-16 h-16 inset-0 top-1/2 left-1/2 flex items-center justify-center bg-white/50 hover:bg-white hover:cursor-pointer text-blue-600 rounded-full backdrop-blur-sm transform -translate-x-1/2 -translate-y-1/2 z-10">
              <svg
                className="w-8 h-8"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          )}

          <div className="absolute w-[98%] h-[98%] inset-0 translate-1 border border-secondary rounded-lg z-0"></div>

        </div>

      </div>
    </section>
  )
}
