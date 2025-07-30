import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
  <main>
    <section className="relative bg-primary text-white">
      <div className="absolute inset-0 -skew-y-6 bg-primary origin-top-right z-0"></div>

      <div className="relative z-10 px-6 py-20 max-w-4xl mx-auto flex flex-col md:flex-row items-center text-center md:text-left">
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-4">Welcome to CountryExplorer</h1>
          <p className="text-lg">
            Discover insightful details about countries around the world using a beautiful globe interface.
          </p>
        </div>
        <div className="flex-1 mt-8 md:mt-0 md:ml-8 flex justify-center">
          <img
            src="https://placehold.co/800"
            alt="Globe"
            className="w-60 h-60 object-contain rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>

    <section className="bg-gray-100">
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-6">Explore Countries</h2>
        <p className="mb-4">
          Click on the globe to explore countries and learn more about their cultures, geography, and history.
        </p>
        <a href="/countries" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
          Start Exploring
        </a>
      </div>

    </section>

  </main>
  );
}
