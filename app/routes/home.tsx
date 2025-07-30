import FeaturesSection from "~/components/featuresSection";
import HeroSection from "~/components/heroSection";
import type { Route } from "./+types/home";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {

  const features = [
    { title: "Feature 1", description: "Description for feature 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id enim lacinia, consectetur dolor et, sodales ante." },
    { title: "Feature 2", description: "Description for feature 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id enim lacinia, consectetur dolor et, sodales ante." },
    { title: "Feature 3", description: "Description for feature 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id enim lacinia, consectetur dolor et, sodales ante." },
    { title: "Feature 4", description: "Description for feature 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id enim lacinia, consectetur dolor et, sodales ante." },
    { title: "Feature 5", description: "Description for feature 5. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id enim lacinia, consectetur dolor et, sodales ante." },
    { title: "Feature 6", description: "Description for feature 6. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id enim lacinia, consectetur dolor et, sodales ante." },
  ];

  return (
    <main>

      <HeroSection />

      {/* Next Section - Pull it upwards */}
      <FeaturesSection features={features} />

      <section className="relative bg-primary">
        {/* Slanted Background */}
        <div className="absolute inset-0 -skew-y-3 bg-primary origin-top-right h-1/2 z-1"></div>

        <div className="absolute inset-0 bg-white origin-top-right z-0 translate-y-28"></div>

        {/* Content */}

        <div className="relative z-10 px-6 py-20 max-w-4xl mx-auto flex flex-col items-center text-center md:text-left">
          <span className="text-white text-4xl font-serif w-2/3 text-center mb-10">Simpilfy operating and manage with transparency</span>

          <div className="container grid grid-cols-3 gap-6">
            <div className="flex flex-col items-left">
              <img src="https://placehold.co/400" alt="" />
              <h3 className="text-2xl font-semibold mt-4">Feature 1</h3>
              <p className="text-secondary mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id enim lacinia, consectetur dolor et, sodales ante.</p>
            </div>
            <div className="flex flex-col items-left">
              <img src="https://placehold.co/400" alt="" />
              <h3 className="text-2xl font-semibold mt-4">Feature 1</h3>
              <p className="text-secondary mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id enim lacinia, consectetur dolor et, sodales ante.</p>
            </div>
            <div className="flex flex-col items-left">
              <img src="https://placehold.co/400" alt="" />
              <h3 className="text-2xl font-semibold mt-4">Feature 1</h3>
              <p className="text-secondary mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id enim lacinia, consectetur dolor et, sodales ante.</p>
            </div>
          </div>

        </div>

      </section>


    </main>
  );
}
