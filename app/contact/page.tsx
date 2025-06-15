import React from "react";

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4 flex flex-col md:flex-row gap-12">
      {/* Sidebar */}
      <aside className="md:w-1/3 flex flex-col items-center md:items-start bg-yellow-50 rounded-3xl shadow-lg p-8 mb-10 md:mb-0">
        <div className="text-6xl mb-4">🦆</div>
        <h2 className="text-2xl font-bold mb-2 text-yellow-900">
          Contact Transparency Duck
        </h2>
        <p className="text-yellow-800 mb-6 text-sm">
          We’d love to hear from you! Reach out with questions, feedback, or
          just to say quack.
        </p>
        <div className="text-sm text-yellow-900 mb-1 font-semibold">
          Team Contacts
        </div>
        <div className="text-yellow-800 text-sm mb-3">
          <div>Jack: jack@example.com</div>
          <div>Matthew: matthew@example.com</div>
        </div>
        <div className="text-xs text-yellow-700">
          We usually respond within 1-2 business days.
        </div>
      </aside>

      {/* Contact Form */}
      <section className="flex-1 bg-white rounded-3xl shadow-lg p-8">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
          Contact Us
        </h1>
        <p className="text-gray-600 mb-8">
          Fill out the form below and we’ll get back to you soon.
        </p>
        <form className="flex flex-col gap-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Your name"
              autoComplete="name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="you@email.com"
              autoComplete="email"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="How can we help you?"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-6 rounded-lg shadow transition-colors"
            disabled
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}
