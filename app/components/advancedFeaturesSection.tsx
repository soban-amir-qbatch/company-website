import AdvancedFeatureCard from "./advancedFeatureCard"

export default function AdvancedFeaturesSection({features} : {features: {title: string, description: string}[]}) {
  return (
    <section className="relative bg-primary">
        {/* Slanted Background */}
        <div className="absolute inset-0 -skew-y-3 bg-primary origin-top-right h-1/2 z-1"></div>

        <div className="absolute inset-0 bg-white origin-top-right z-0 h-1/2 translate-y-full"></div>

        {/* Content */}

        <div className="relative z-10 px-6 py-20 max-w-4xl mx-auto flex flex-col items-center text-center md:text-left">
          <span className="text-white text-4xl font-serif w-2/3 text-center mb-10">Simpilfy operating and manage with transparency</span>

          <div className="container grid grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <AdvancedFeatureCard key={index} index={index + 1} feature={feature} />
            ))}
          </div>

        </div>

      </section>
  )
}
