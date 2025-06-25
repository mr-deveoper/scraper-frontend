# Scraper Frontend

A React/Next.js frontend application that displays scraped product data with real-time updates.

## Prerequisites

- Node.js (version 18 or higher)
- npm
- Backend API running on `http://localhost:8000`

## Installation

1. Install dependencies:
   ```bash
   npm install
   ```

## Running the Application

Start the development server:
```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

products will be available at [http://localhost:3000/products](http://localhost:3000/products).


## API Requirements

The frontend expects a backend API at `http://localhost:8000/api/products` that returns an array of products with this structure:

```typescript
interface Product {
  id: number;
  title: string;
  price: string;
  image_url: string;
}
```

## Features

- Real-time product updates (refreshes every 30 seconds)
- Responsive grid layout
- TypeScript support
- Tailwind CSS styling

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run linting

## Technologies

- Next.js 15.3.4
- React 19
- TypeScript 5
- Tailwind CSS 4.1.10
