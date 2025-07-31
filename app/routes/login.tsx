import LoginModal from '~/components/loginModal';
import React from 'react'

export default function Login() {
  return (
    <main>
      <div className="relative min-h-[calc(100vh-72px)] bg-primary">
              {/* Slanted Background */}
              <div className="absolute inset-0 -skew-y-6 bg-primary origin-top-right h-1/2 z-1"></div>
      
              <div className="absolute inset-0 bg-white origin-top-right z-0 h-1/2 translate-y-full"></div>
      
              {/* Content */}
      
              <div className="relative z-10 px-6 py-20 max-w-4xl mx-auto flex flex-col items-center text-center">
                <span className="text-white text-4xl font-serif w-2/3 text-center mb-20">Login</span>

                <LoginModal />
                
              </div>
      
            </div>
    </main>
  )
}
