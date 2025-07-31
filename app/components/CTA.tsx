import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-gray-shade py-20">
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center text-center">
        <span className="text-black text-4xl font-serif w-2/3 text-center mb-5">Say goodbye to long queues, big updates, and <span className="text-green-500">confusion</span>.</span>
        <p className="text-secondary w-3/4 mb-8">Sed lobortis leo at consectetur pharetra. Nam pharetra porta justo, ut pretium orci viverra nec. Mauris aliquam est a lectus vehicula pellentesque. Maecenas cursus imperdiet tristique. Quisque consequat nisi et lectus efficitur, quis ornare mi suscipit.</p>
        <button className="text-white text-sm bg-blue-600 rounded-xs py-2 px-4 flex justify-center items-center"> Request Demo <ArrowRight size={16} /> </button>
      </div>
    </section>
  )
}
