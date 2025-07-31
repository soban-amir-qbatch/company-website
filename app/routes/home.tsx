import AdvancedFeaturesSection from "~/components/advancedFeaturesSection";
import CTA from "~/components/CTA";
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

  const advancedFeatures = [
    { title: "Advanced Features", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id enim lacinia, consectetur dolor et, sodales ante." },
    { title: "Advanced Features", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id enim lacinia, consectetur dolor et, sodales ante." },
    { title: "Advanced Features", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id enim lacinia, consectetur dolor et, sodales ante." },
  ];

  return (
    <main>

      <HeroSection />

      <FeaturesSection features={features} />

      <AdvancedFeaturesSection features={advancedFeatures} />

      <CTA />
      
    </main>
  );
}
