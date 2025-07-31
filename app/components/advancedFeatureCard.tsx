import React from 'react'

export default function AdvancedFeatureCard({index, feature}: {index: number, feature: {title: string, description: string}}) {
  return (
    <div className="relative flex flex-col items-left">

      <div className="absolute flex justify-center items-center -top-8 left-10 w-16 h-16 bg-blue-600 rounded-full text-white text-2xl font-grace">{index}</div>

      <img src="https://placehold.co/400" alt="" />
      <h3 className="font-serif text-xl mt-4">{feature.title}</h3>
      <p className="text-secondary text-sm mt-2">{feature.description}</p>
    </div>
)}
