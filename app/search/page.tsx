"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import { fakeProducts } from "@/lib/constants";
import {
  HeadphonesIcon,
  MonitorIcon,
  BookIcon,
  BatteryIcon,
  HomeIcon,
  TvIcon,
  MicIcon,
} from "lucide-react";
import Link from "next/link";

const iconMap = {
  HeadphonesIcon,
  MonitorIcon,
  BookIcon,
  BatteryIcon,
  HomeIcon,
  TvIcon,
  MicIcon,
};

function SearchContent({
  fakeProducts,
}: {
  fakeProducts: typeof import("@/lib/constants").fakeProducts;
}) {
  const searchParams = useSearchParams();
  const query = searchParams.get("q")?.trim() || "";
  const filtered = query
    ? fakeProducts.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-extrabold mb-6 text-gray-900">
        Search Results
      </h1>
      {query && (
        <p className="mb-8 text-gray-600">
          Showing results for{" "}
          <span className="font-semibold">&quot;{query}&quot;</span>
        </p>
      )}
      {filtered.length === 0 ? (
        <div className="text-gray-500 text-lg">No products found.</div>
      ) : (
        <ul className="divide-y divide-gray-100 bg-white rounded-xl shadow-lg border border-gray-100">
          {filtered.map((product) => (
            <li key={product.id}>
              <Link
                href={`/product/${product.id}`}
                className="flex items-center gap-4 py-5 px-6 cursor-pointer hover:bg-yellow-50 rounded-lg transition-colors"
              >
                {(() => {
                  const Icon = iconMap[product.icon as keyof typeof iconMap];
                  return Icon ? <Icon className="w-16 h-16" /> : null;
                })()}
                <div>
                  <div className="font-semibold text-gray-900 text-lg">
                    {product.title}
                  </div>
                  <div className="text-yellow-700 font-bold mt-1 text-base">
                    {product.price}
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function SearchPage() {
  return (
    <React.Suspense
      fallback={<div className="max-w-2xl mx-auto p-6">Loading search...</div>}
    >
      <SearchContent fakeProducts={fakeProducts} />
    </React.Suspense>
  );
}
