# 🚀 Scraper Frontend

> A modern, modular Next.js 14 app for real-time product discovery, fetching data from a Laravel API. The UI is clean, responsive, and fully componentized for maintainability.

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

## ✨ Features

- 🔄 **Real-time product updates** (auto-refresh every 30 seconds)
- 📱 **Responsive design** (mobile-first, Tailwind CSS)
- 🎯 **Product grid** and **detail pages**
- 📊 **Status/info bar** with live/refreshing indicator
- ⚡ **Error and loading states**
- 🧩 **All main UI sections are reusable components**

## 📁 Project Structure

```
scraper-frontend/
├── 📂 src/
│   ├── 📂 app/
│   │   ├── 📄 layout.tsx              # Root layout
│   │   ├── 📄 page.tsx                # Home page
│   │   └── 📂 products/
│   │       ├── 📄 page.tsx            # Products list page
│   │       └── 📂 [id]/
│   │           └── 📄 page.tsx        # Product detail page
│   ├── 📂 components/
│   │   ├── 🧭 Header.tsx              # Top navigation
│   │   ├── 📊 StatusBar.tsx           # Info/status bar on products page
│   │   ├── 📋 PageHeader.tsx          # Page title/subtitle section
│   │   ├── 🎴 ProductGrid.tsx         # Grid of product cards
│   │   ├── 🃏 ProductCard.tsx         # Individual product card
│   │   ├── 🍞 Breadcrumbs.tsx         # Breadcrumb navigation for detail page
│   │   ├── 🖼️  ProductImage.tsx        # Product image section
│   │   ├── ℹ️  ProductInfo.tsx         # Title, description, price, details header
│   │   ├── 📈 ProductMeta.tsx         # Category, rating, reviews, availability
│   │   ├── 🔗 ProductFooter.tsx       # Last updated and ID
│   │   ├── ⏳ LoadingSpinner.tsx      # Loading indicator
│   │   └── ❌ ErrorMessage.tsx        # Error display
│   ├── 📂 hooks/
│   │   └── 🔄 useProducts.ts          # Fetches and auto-refreshes products
│   ├── 📂 types/
│   │   └── 📦 product.ts              # Product type definitions
│   └── 📂 lib/
│       └── 🌐 api.ts                  # API client
├── 📄 .env.local                      # Environment variables
├── 📄 package.json
├── 📄 next.config.js
├── 📄 tailwind.config.js
└── 📄 README.md
```

## 🚀 Quick Start

### 1. **Install dependencies**
```bash
npm install
```

### 2. **Configure environment variables**
Create a `.env.local` file in the root directory:
```bash
# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:8000

# Optional: Customize refresh interval (in milliseconds)
NEXT_PUBLIC_REFRESH_INTERVAL=30000
```

### 3. **Start the development server**
```bash
npm run dev
```

### 4. **Open your browser**
- 🏠 **Home**: [http://localhost:3000/](http://localhost:3000/)
- 📦 **Products**: [http://localhost:3000/products](http://localhost:3000/products)
- 🔍 **Product detail**: [http://localhost:3000/products/1](http://localhost:3000/products/1)

## 🔧 How It Works

### 📊 Products Page
- Fetches product data from the Laravel API
- Displays products in a responsive grid layout
- Auto-refreshes every 30 seconds for real-time updates

### 📈 Status Bar
- Shows live product count
- Displays last update timestamp
- Indicates live/refreshing status with animations

### 🔍 Product Detail Page
- **Fully modular architecture** - each section is a separate component:
  - 🍞 **Breadcrumbs**: Navigation path
  - 🖼️ **ProductImage**: Image display with fallbacks
  - ℹ️ **ProductInfo**: Title, description, price
  - 📈 **ProductMeta**: Category, rating, reviews, availability
  - 🔗 **ProductFooter**: Last updated and product ID

### ⚡ Error Handling
- Graceful error states with retry functionality
- Loading spinners during data fetching
- User-friendly error messages

## 🎨 Customization

### 🔗 API Configuration
Update the API URL in your `.env.local` file:
```bash
NEXT_PUBLIC_API_URL=http://your-api-domain.com
```

### ⏱️ Refresh Interval
Customize the refresh interval in your `.env.local` file:
```bash
NEXT_PUBLIC_REFRESH_INTERVAL=30000  # 30 seconds
```

### 🧩 Adding New Components
Create new components in `src/components/` and use them in your pages:
```typescript
// src/components/NewComponent.tsx
export const NewComponent = () => {
  return <div>Your new component</div>;
};
```

## 📋 Requirements

- **Node.js** 18+ 
- **Next.js** 14+
- **Tailwind CSS** 3+

## 🛠️ Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## 📄 License

MIT License - feel free to use this project for your own needs!

---

<div align="center">
  <p>Built with ❤️ using <strong>Next.js</strong>, <strong>TypeScript</strong>, and <strong>Tailwind CSS</strong></p>
</div>
