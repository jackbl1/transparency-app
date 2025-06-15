# Transparency Duck

Transparency Duck is a web application that helps users make more informed shopping decisions by exposing the transparency, quality, and profit margins of products. With a "Quack Meter," the app ranks products based on their authenticity, quality of materials, and profit margins—helping you spot which items are genuine and which are, well, a bit more "quacky."

## Features

- **Product Lookup**: Search for products and instantly see detailed transparency information.
- **Quack Meter**: Each product is rated from 1 to 5 ducks based on its transparency, profit margin, and component quality.
- **Product Details**: View ingredient/component breakdowns and see how each factor affects the Quack Meter score.
- **Modern UI**: Built with React, Next.js, Tailwind CSS, and Radix UI for a smooth, responsive experience.
- **Theme Switching**: Toggle between light, dark, and system themes.
- **Powered by Supabase**: Product data and transparency metrics are managed using Supabase.

## How It Works

1. **Search**: Use the search bar on the homepage to look up any product.
2. **Transparency Analysis**: For each product, the app calculates a transparency score based on profit margin and component quality.
3. **Quack Meter**: The Quack Meter visually displays the transparency score—more ducks mean more transparency and authenticity!
4. **Product Page**: Click on a product to see detailed information, including ingredients/components and a breakdown of the Quack Meter calculation.

## Tech Stack

- **Next.js** (React framework)
- **Tailwind CSS** (utility-first CSS)
- **Radix UI** (accessible UI primitives)
- **Supabase** (backend data and authentication)
- **TypeScript** (type safety)

## Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/transparency-app.git
   cd transparency-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure environment variables**

   - Copy `.env.example` to `.env` and fill in your Supabase project details.

4. **Run the development server**

   ```bash
   npm run dev
   ```

5. **Open in your browser**
   - Visit [http://localhost:3000](http://localhost:3000)

## Folder Structure

- `/app` — Next.js app directory (pages, layouts, API routes)
- `/components` — Reusable UI components (navigation, forms, Quack Meter, etc.)
- `/lib` — Utility libraries and Supabase client
- `/public` — Static assets
- `/styles` — Global styles (Tailwind CSS)

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---
