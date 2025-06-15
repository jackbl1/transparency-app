"use client";
import { Hero } from "@/components/hero";
import { SearchBar } from "@/components/search-bar";

export default function Home() {
  return (
    <main className="relative min-h-[calc(100vh-156px)] flex flex-col items-center px-4 py-12 overflow-hidden bg-gradient-to-br from-yellow-50 via-white to-blue-50">
      {/* Decorative background shapes */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex justify-center items-center">
        <div className="w-[600px] h-[600px] bg-yellow-100 rounded-full blur-3xl opacity-50 absolute -top-40 -left-40" />
        <div className="w-[400px] h-[400px] bg-blue-100 rounded-full blur-2xl opacity-40 absolute -bottom-32 -right-32" />
      </div>
      {/* Hero Section */}
      <section className="w-full max-w-3xl text-center mb-10">
        <Hero />
      </section>
      {/* Search Bar Section */}
      <section className="w-full max-w-xl flex">
        <div className="w-full bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-10 flex flex-col items-center border border-yellow-200 animate-fade-in">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6 tracking-tight drop-shadow-md">
            Search for a Product
          </h2>
          <p className="text-lg text-gray-600 mb-6 max-w-md text-center">
            Look up any product. Powered by Transparency Duck.
          </p>
          <SearchBar />
        </div>
      </section>
      <style jsx global>{`
        @keyframes fade-in {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s cubic-bezier(0.4, 0, 0.2, 1) both;
        }
      `}</style>
    </main>
  );
}
