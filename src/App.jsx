import React, { useMemo, useState } from 'react';
import HeroCover from './components/HeroCover';
import FiltersBar from './components/FiltersBar';
import TrendsGrid from './components/TrendsGrid';
import Recommendations from './components/Recommendations';

function useDemoData() {
  // Demo trends: runway + TikTok + influencer aggregates
  const trends = [
    {
      id: 't1',
      name: 'Cherry Red Maxi Dress',
      source: 'Fashion Week AW',
      category: 'Dresses',
      colors: ['red', 'crimson'],
      tags: ['maxi', 'evening', 'satin'],
      strength: 0.86,
      velocity: 0.73,
      affinity: 'Gen Z • NA/EU',
      engagement: 1280000,
      platform: 'TikTok views',
      sparkline: [12, 14, 13, 16, 18, 22, 24, 28, 31, 35],
    },
    {
      id: 't2',
      name: 'Oversized Blazer + Mini Skirt',
      source: 'Influencer Lookbook',
      category: 'Outerwear',
      colors: ['black', 'charcoal'],
      tags: ['tailored', '90s', 'layering'],
      strength: 0.78,
      velocity: 0.81,
      affinity: 'Millennial • EU',
      engagement: 940000,
      platform: 'IG engagements',
      sparkline: [8, 10, 9, 12, 14, 15, 19, 23, 25, 30],
    },
    {
      id: 't3',
      name: 'Chunky Dad Sneakers',
      source: 'TikTok Hashtags',
      category: 'Footwear',
      colors: ['white', 'grey'],
      tags: ['athleisure', 'retro', 'comfort'],
      strength: 0.91,
      velocity: 0.88,
      affinity: 'Gen Z • Global',
      engagement: 2860000,
      platform: 'Hashtag views',
      sparkline: [15, 18, 20, 23, 27, 31, 34, 37, 41, 48],
    },
    {
      id: 't4',
      name: 'Crochet Texture Tops',
      source: 'Runway SS',
      category: 'Accessories',
      colors: ['beige', 'cream'],
      tags: ['boho', 'summer', 'handmade'],
      strength: 0.64,
      velocity: 0.52,
      affinity: 'Gen X • NA',
      engagement: 320000,
      platform: 'IG engagements',
      sparkline: [6, 7, 7, 9, 10, 11, 12, 13, 13, 14],
    },
    {
      id: 't5',
      name: 'Metallic Silver Skirts',
      source: 'TikTok Sounds',
      category: 'Dresses',
      colors: ['silver', 'grey'],
      tags: ['party', 'y2k', 'shine'],
      strength: 0.74,
      velocity: 0.69,
      affinity: 'Gen Z • APAC',
      engagement: 780000,
      platform: 'TikTok views',
      sparkline: [5, 7, 8, 9, 11, 14, 16, 18, 19, 21],
    },
  ];

  const products = [
    {
      id: 'p1',
      name: 'Satin Maxi Dress – Crimson',
      category: 'Dresses',
      price: 129.0,
      inventory: 12,
      colors: ['crimson', 'red'],
      styleTags: ['maxi', 'evening'],
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop',
      aiDescription:
        'All eyes on you. Fluid satin drape, floor-sweeping silhouette, and saturated cherry red designed to catch cameras and hearts.',
    },
    {
      id: 'p2',
      name: 'Oversized Tailored Blazer – Black',
      category: 'Outerwear',
      price: 159.0,
      inventory: 6,
      colors: ['black'],
      styleTags: ['tailored', '90s'],
      image: 'https://images.unsplash.com/photo-1717853098335-0a53927d6541?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTdW4tY2hhc2luZyUyMHRleHR1cmUlMjB3aXRoJTIwYXJ0aXNhbmFsfGVufDB8MHx8fDE3NjE1Nzk3OTN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
      aiDescription:
        'Boxy shoulders, sharp lapels. Dress it up or down—the new power layer for desk-to-dusk uniform dressing.',
    },
    {
      id: 'p3',
      name: 'Retro Chunky Sneakers – Cloud',
      category: 'Footwear',
      price: 98.0,
      inventory: 18,
      colors: ['white', 'grey'],
      styleTags: ['retro', 'athleisure', 'comfort'],
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1600&auto=format&fit=crop',
      aiDescription:
        'Elevated cushioning and throwback lines. Built for endless city miles with cloud-soft steps.',
    },
    {
      id: 'p4',
      name: 'Metallic Pleated Skirt – Silver',
      category: 'Dresses',
      price: 89.0,
      inventory: 3,
      colors: ['silver'],
      styleTags: ['party', 'y2k'],
      image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1600&auto=format&fit=crop',
      aiDescription:
        'Shine on: liquid-metal pleats sway with every step. A statement piece tailor-made for night energy.',
    },
    {
      id: 'p5',
      name: 'Crochet Open-Knit Tank – Oat',
      category: 'Accessories',
      price: 54.0,
      inventory: 10,
      colors: ['cream', 'beige'],
      styleTags: ['boho', 'summer', 'handmade'],
      image: 'https://images.unsplash.com/photo-1717853098335-0a53927d6541?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTdW4tY2hhc2luZyUyMHRleHR1cmUlMjB3aXRoJTIwYXJ0aXNhbmFsfGVufDB8MHx8fDE3NjE1Nzk3OTN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
      aiDescription:
        'Sun-chasing texture with artisanal charm. Layer it over swim or pair with denim for effortless summer styling.',
    },
  ];

  return { trends, products };
}

export default function App() {
  const { trends, products } = useDemoData();
  const [filters, setFilters] = useState({ category: 'All', demographic: 'All', period: '30d' });

  const filteredTrends = useMemo(() => {
    return trends.filter((t) => {
      const byCategory = filters.category === 'All' || t.category === filters.category;
      const byDemo = filters.demographic === 'All' || t.affinity.toLowerCase().includes(filters.demographic.toLowerCase());
      // period is demo-only in this static build; you could tie it to sparkline length later
      return byCategory && byDemo;
    });
  }, [trends, filters]);

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-6">
        <HeroCover />

        <FiltersBar filters={filters} setFilters={setFilters} />

        <section className="mt-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-semibold">Trending Now</h2>
              <p className="text-sm text-neutral-500">Runway drops, TikTok surges, and influencer looks scored by popularity and momentum.</p>
            </div>
          </div>
          <TrendsGrid trends={filteredTrends} />
        </section>

        <Recommendations trends={filteredTrends} products={products} />

        <footer className="mt-16 border-t border-neutral-200 py-8 text-center text-sm text-neutral-500">
          Built with an immersive 3D cover and a clean dashboard aesthetic.
        </footer>
      </div>
    </div>
  );
}
