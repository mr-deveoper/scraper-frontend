# Scraper Frontend

A modern, modular Next.js 14 app for real-time product discovery, fetching data from a Laravel API. The UI is clean, responsive, and fully componentized for maintainability.

## Features
- **Real-time product updates** (auto-refresh every 30 seconds)
- **Responsive design** (mobile-first, Tailwind CSS)
- **Product grid** and **detail pages**
- **Status/info bar** with live/refreshing indicator
- **Error and loading states**
- **All main UI sections are reusable components**

## Project Structure
```
src/
  app/
    layout.tsx         # Root layout
    page.tsx           # Home page
    products/
      page.tsx         # Products list page
      [id]/
        page.tsx       # Product detail page
  components/
    Header.tsx         # Top navigation
    StatusBar.tsx      # Info/status bar on products page
    PageHeader.tsx     # Page title/subtitle section
    ProductGrid.tsx    # Grid of product cards
    ProductCard.tsx    # Individual product card
    Breadcrumbs.tsx    # Breadcrumb navigation for detail page
    ProductImage.tsx   # Product image section
    ProductInfo.tsx    # Title, description, price, details header
    ProductMeta.tsx    # Category, rating, reviews, availability
    ProductFooter.tsx  # Last updated and ID
    LoadingSpinner.tsx # Loading indicator
    ErrorMessage.tsx   # Error display
  hooks/
    useProducts.ts     # Fetches and auto-refreshes products
  types/
    product.ts         # Product type definitions
  lib/
    api.ts             # API client
```

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Start the development server:**
   ```bash
   npm run dev
   ```
3. **Open your browser:**
   - Home: [http://localhost:3000/](http://localhost:3000/)
   - Products: [http://localhost:3000/products](http://localhost:3000/products)
   - Product detail: [http://localhost:3000/products/1](http://localhost:3000/products/1)

## How It Works
- The **products page** fetches product data from the Laravel API and displays it in a responsive grid.
- The **status bar** shows product count, last update, and live/refreshing status.
- The **product detail page** is fully modular, with each section (breadcrumbs, image, info, meta, footer) as a separate component.
- All error and loading states are handled gracefully.

## Customization
- To change the API endpoint, edit `src/lib/api.ts`.
- To adjust the refresh interval, update the interval in `useProducts.ts`.
- To add new UI features, create new components in `src/components/` and use them in your pages.

## Requirements
- Node.js 18+
- Next.js 14+
- Tailwind CSS

## License
MIT
