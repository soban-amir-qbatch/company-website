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

  const footerItems = [
    { title: "How it works", links: ["Overview", "Pricing", "Services Areas"] },
    { title: "Resources", links: ["Customer Stories", "Knowledge Base", "Contact Us"] },
    { title: "Products", links: ["Corporate Partners", "Secure Identity", "Legal Help", "First Capital"] },
    { title: "Company", links: ["About Us", "Careers", "Terms of Use"] },
  ];

  return (
    <main>

      <HeroSection />

      <FeaturesSection features={features} />

      <AdvancedFeaturesSection features={advancedFeatures} />

      <CTA />
      
      <footer className="bg-white">
        <div className="max-w-4xl mx-auto grid grid-cols-6 gap-6 py-10">
          
          <div className="col-span-2 flex flex-col justify-center items-start">
            <img src="/logo-footer.png" alt="Logo" className="h-10 w-10" />
            <span className="text-black font-bold mt-2">The smarter way to start your next idea.</span>
          </div>

          {footerItems.map((item, index) => (
            <div key={index} className="flex flex-col justify-start items-start text-sm gap-3">
              <h3 className="font-semibold">{item.title}</h3>
              {item.links.map((link, linkIndex) => (
                <a key={linkIndex} href="#" className="text-secondary hover:text-blue-600">{link}</a>
              ))}
            </div>
          ))}

        </div>
      </footer>
    </main>
  );
}
