import FeatureCard from './featureCard';
import React from 'react'

export default function FeaturesSection({features} : {features: {title: string, description: string}[]}) {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container grid grid-cols-3 gap-6 max-w-4xl mx-auto px-6 pt-32 py-12">
        {features.map((feature, index) => (
          <FeatureCard key={index} feature={feature} />
        ))}
      </div>
    </section>
  )
}
