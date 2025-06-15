"use client";
import React from "react";
import { Input } from "./ui/input";
import { useRouter } from "next/navigation";
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

export const SearchBar = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [suggestions, setSuggestions] = React.useState<typeof fakeProducts>([]);
  const [showSuggestions, setShowSuggestions] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const router = useRouter();

  React.useEffect(() => {
    const query = searchQuery.trim().toLowerCase();
    if (query) {
      setSuggestions(
        fakeProducts.filter((product) =>
          product.title.toLowerCase().includes(query)
        )
      );
    } else {
      setSuggestions([]);
    }
  }, [searchQuery]);

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    const query = searchQuery.trim();
    if (!query) return;
    router.push(`/search?q=${encodeURIComponent(query)}`);
    setShowSuggestions(false);
  };

  return (
    <div className="w-full max-w-xl relative z-10">
      <form onSubmit={handleSearch} className="w-full">
        <Input
          ref={inputRef}
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search..."
          autoComplete="off"
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 120)}
        />
        {/* Suggestions Dropdown */}
        {showSuggestions && suggestions.length > 0 && (
          <ul className="absolute left-0 right-0 z-50 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg max-h-64 overflow-y-auto">
            {suggestions.map((product) => (
              <li
                key={product.id}
                className="flex items-center gap-3 px-4 py-2 cursor-pointer hover:bg-yellow-50"
                onMouseDown={() => {
                  setShowSuggestions(false);
                  router.push(`/product/${product.id}`);
                  inputRef.current?.blur();
                }}
              >
                {(() => {
                  const Icon = iconMap[product.icon as keyof typeof iconMap];
                  return Icon ? <Icon className="w-8 h-8" /> : null;
                })()}
                <span className="text-gray-900 text-sm">{product.title}</span>
              </li>
            ))}
          </ul>
        )}
      </form>
    </div>
  );
};
