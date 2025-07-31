import { DownloadCloud } from 'lucide-react';
import React from 'react'

type Feature = {
  title: string;
  description: string;
};

export default function FeatureCard({feature} : {feature: Feature}) {
  return (
    <div>
      <div className=' text-white bg-blue-600 p-3.5 w-fit rounded-4xl'><DownloadCloud size={22} /></div>
      <h2 className="mt-2 text-2xl font-semibold mb-4">{feature.title}</h2>
      <p className="text-secondary text-sm">{feature.description}</p>
    </div>
  )
}
