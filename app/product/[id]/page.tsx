"use client";
import React from "react";
import { useParams } from "next/navigation";
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

const iconMap = {
  HeadphonesIcon,
  MonitorIcon,
  BookIcon,
  BatteryIcon,
  HomeIcon,
  TvIcon,
  MicIcon,
};

// Dummy ingredient/component and profit margin data for demonstration
const productDetails: Record<number, { ingredients: string[]; profitMargin: number; componentQuality: number }> = {
  1: { ingredients: ["Plastic", "Microphone", "Speaker", "WiFi Chip"], profitMargin: 0.45, componentQuality: 0.7 },
  2: { ingredients: ["HDMI Stick", "Remote", "WiFi Module"], profitMargin: 0.55, componentQuality: 0.6 },
  3: { ingredients: ["E-Ink Screen", "Battery", "Plastic"], profitMargin: 0.35, componentQuality: 0.8 },
  4: { ingredients: ["AA Battery Cells", "Alkaline"], profitMargin: 0.7, componentQuality: 0.5 },
  5: { ingredients: ["Steel Pot", "Electronics", "Plastic"], profitMargin: 0.3, componentQuality: 0.85 },
  // ...add more for each product as needed
};

function getQuackMeter(profitMargin: number, componentQuality: number): number {
  // Higher margin and lower quality = higher quackiness (max 5)
  const score = Math.round(1 + 4 * (profitMargin * (1 - componentQuality)));
  return Math.max(1, Math.min(score, 5));
}

export default function ProductPage() {
  const params = useParams();
  const id = Number(params.id);
  const product = fakeProducts.find((p) => p.id === id);
  if (!product) {
    return <div className="max-w-xl mx-auto p-8 text-center text-lg">Product not found.</div>;
  }
  const details = productDetails[id] || { ingredients: ["Component A", "Component B"], profitMargin: 0.5, componentQuality: 0.5 };
  const quack = getQuackMeter(details.profitMargin, details.componentQuality);
  const Icon = iconMap[product.icon as keyof typeof iconMap];

  return (
    <div className="max-w-xl mx-auto p-8">
      <div className="flex items-center gap-6 mb-8">
        {Icon && <Icon className="w-20 h-20" />}
        <div>
          <div className="text-2xl font-extrabold text-gray-900">{product.title}</div>
          <div className="text-yellow-700 font-bold mt-2 text-lg">{product.price}</div>
        </div>
      </div>
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Ingredients / Components</h2>
        <ul className="list-disc pl-6 text-gray-700">
          {details.ingredients.map((ing, i) => (
            <li key={i}>{ing}</li>
          ))}
        </ul>
      </div>
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Quack Meter</h2>
        <div className="flex items-center gap-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className={i < quack ? "text-yellow-400" : "text-gray-200"}>
              🦆
            </span>
          ))}
          <span className="ml-2 text-sm text-gray-500">{quack} / 5</span>
        </div>
        <div className="text-xs text-gray-500 mt-2">
          (Based on profit margin and component quality)
        </div>
      </div>
    </div>
  );
}
