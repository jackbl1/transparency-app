import Link from "next/link";
import React from "react";

const features = [
  {
    title: "Uncover Profit Margins",
    description:
      "Transparency Duck reveals the hidden profit margins behind your favorite products, helping you make informed purchasing decisions.",
    icon: "💸",
  },
  {
    title: "Trace Ingredient Origins",
    description:
      "Discover where every ingredient comes from, so you know exactly what's in your products and where they originate.",
    icon: "🌍",
  },
  {
    title: "Empower Ethical Choices",
    description:
      "With clear data, you can support brands that align with your values—whether that's sustainability, fair labor, or transparency.",
    icon: "🦆",
  },
];

function About() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center px-4 py-12">
      {/* Hero Section */}
      <section className="w-full max-w-3xl text-center mb-12">
        <div className="flex flex-col items-center">
          <div className="bg-yellow-200 rounded-full w-24 h-24 flex items-center justify-center mb-4 shadow-lg">
            <span className="text-6xl">🦆</span>
          </div>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
            About Transparency Duck
          </h1>
          <p className="text-lg text-gray-600">
            Shedding light on what’s inside your products—and who profits from
            them.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="w-full max-w-2xl mb-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Our Mission</h2>
        <p className="text-md text-gray-700">
          Transparency Duck exists to empower consumers with transparent,
          accessible information about the products they buy. We believe
          everyone deserves to know both the origins of every ingredient and the
          profit margins of every product, so you can make choices that align
          with your values.
        </p>
      </section>

      {/* Features */}
      <section className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="bg-gray-50 rounded-xl p-6 shadow hover:shadow-md transition flex flex-col items-center text-center"
          >
            <div className="text-4xl mb-3">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </section>

      {/* How It Works */}
      <section className="w-full max-w-2xl mb-12">
        <h2 className="text-xl font-bold text-gray-800 mb-2">
          How Transparency Duck Works
        </h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-1">
          <li>Search for any product using our intuitive search bar.</li>
          <li>
            View a detailed breakdown of each ingredient’s origin and the
            product’s profit margin.
          </li>
          <li>
            Use this knowledge to make more ethical, sustainable, and informed
            buying decisions.
          </li>
        </ol>
      </section>

      {/* Call to Action */}
      <section className="w-full max-w-2xl text-center">
        <div className="bg-yellow-100 rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            Ready to Explore?
          </h2>
          <p className="text-gray-700 mb-4">
            Start searching for your favorite products and discover the truth
            behind the label.
          </p>
          <Link
            href="/"
            className="inline-block bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-6 rounded-full transition"
          >
            Go to Home
          </Link>
        </div>
      </section>
    </main>
  );
}

export default About;
