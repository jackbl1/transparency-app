import React from "react";

export default function Quack() {
  return (
    <div className="max-w-3xl mx-auto py-16 px-4">
      {/* Hero section */}
      <div className="flex flex-col items-center mb-10">
        <div className="text-7xl mb-2">🦆</div>
        <h1 className="text-4xl font-extrabold text-yellow-900 mb-2 drop-shadow-sm">
          The Quack Meter
        </h1>
        <p className="text-lg text-yellow-800 text-center max-w-xl">
          Our Quack Meter ranks how genuine and authentic a product is. Is it
          built with high quality materials? Does it have reasonable profit
          margins? Are you, the buyer, getting a good deal? Let’s find out!
        </p>
      </div>

      {/* How it works */}
      <section className="mb-12 bg-yellow-50 rounded-2xl p-8 shadow">
        <h2 className="text-2xl font-bold text-yellow-900 mb-4">
          How is the Quack Meter calculated?
        </h2>
        <ul className="list-disc pl-6 text-yellow-900 space-y-2">
          <li>
            <span className="font-semibold">Product Quality:</span> Are the
            components and materials high quality, durable, and safe?
          </li>
          <li>
            <span className="font-semibold">Profit Margins:</span> Does the
            company charge a fair price, or are the margins excessive?
          </li>
          <li>
            <span className="font-semibold">Value for Buyer:</span> Does the
            product deliver on its promises and provide good value?
          </li>
        </ul>
        <div className="mt-4 text-yellow-800 text-sm">
          The higher the quality and the fairer the price, the lower the Quack
          Meter rating (less quacky, more genuine!).
        </div>
      </section>

      {/* Quack Meter Scale */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-yellow-900 mb-4">
          Understanding the Scale
        </h2>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🦆</span>
            <span className="font-semibold text-yellow-900">
              1 Duck — Super Genuine
            </span>
            <span className="text-yellow-700 text-sm">
              Top-notch quality, fair price, excellent value.
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-2xl">🦆🦆</span>
            <span className="font-semibold text-yellow-900">
              2 Ducks — Very Good
            </span>
            <span className="text-yellow-700 text-sm">
              High quality, good value, reasonable margin.
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-2xl">🦆🦆🦆</span>
            <span className="font-semibold text-yellow-900">
              3 Ducks — Decent
            </span>
            <span className="text-yellow-700 text-sm">
              Average quality or margin; some room for improvement.
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-2xl">🦆🦆🦆🦆</span>
            <span className="font-semibold text-yellow-900">
              4 Ducks — Kinda Quacky
            </span>
            <span className="text-yellow-700 text-sm">
              Lower quality or high margin; buyer beware.
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-2xl">🦆🦆🦆🦆🦆</span>
            <span className="font-semibold text-yellow-900">
              5 Ducks — Maximum Quack
            </span>
            <span className="text-yellow-700 text-sm">
              Low quality and/or very high margin. Proceed with caution!
            </span>
          </div>
        </div>
      </section>

      <div className="text-center text-yellow-800 text-lg mt-10">
        <span className="font-bold">The Quack Meter:</span> Helping you shop
        smarter, one quack at a time!
      </div>
    </div>
  );
}
