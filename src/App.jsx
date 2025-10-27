import React, { useMemo, useRef, useState } from 'react';
import HeroCover from './components/HeroCover.jsx';
import FiltersBar from './components/FiltersBar.jsx';
import TrendsGrid from './components/TrendsGrid.jsx';
import Recommendations from './components/Recommendations.jsx';

function useDemoData() {
  const trends = [
    {
      id: 't1',
      name: 'Satin Slip Dresses',
      strength: 92,
      velocity: 'fast',
      affinity: 78,
      history: [48, 52, 57, 63, 66, 70, 68, 72, 79, 84, 90, 92],
      cohorts: ['Gen Z Women', 'City Professionals', 'Event-goers'],
      keywords: ['satin', 'slip', 'midi', 'evening', 'occasion'],
      category: 'dresses',
      palette: 'rose',
    },
    {
      id: 't2',
      name: 'Cropped Blazers',
      strength: 86,
      velocity: 'rising',
      affinity: 74,
      history: [30, 33, 35, 40, 44, 50, 55, 61, 66, 73, 80, 86],
      cohorts: ['Early Adopters', 'Workwear Lovers'],
      keywords: ['blazer', 'cropped', 'tailored', 'power look'],
      category: 'outerwear',
      palette: 'neutrals',
    },
    {
      id: 't3',
      name: 'Pleated Maxi Skirts',
      strength: 81,
      velocity: 'steady',
      affinity: 69,
      history: [40, 42, 45, 49, 53, 55, 58, 62, 66, 70, 76, 81],
      cohorts: ['Minimal Aesthetic', 'Pinterest Core'],
      keywords: ['pleated', 'maxi', 'floaty', 'street style'],
      category: 'bottoms',
      palette: 'neutrals',
    },
    {
      id: 't4',
      name: 'Chunky Loafers',
      strength: 74,
      velocity: 'steady',
      affinity: 63,
      history: [20, 28, 31, 36, 42, 50, 57, 61, 64, 68, 72, 74],
      cohorts: ['Campus Chic', 'Casual Friday'],
      keywords: ['loafers', 'chunky', 'platform', 'preppy'],
      category: 'accessories',
      palette: 'black',
    },
    {
      id: 't5',
      name: 'Athleisure Sets',
      strength: 88,
      velocity: 'fast',
      affinity: 72,
      history: [44, 48, 53, 59, 65, 70, 72, 75, 79, 83, 86, 88],
      cohorts: ['Fitness Fashion', 'WFH Comfort'],
      keywords: ['matching set', 'leggings', 'sports bra'],
      category: 'activewear',
      palette: 'pastels',
    },
  ];

  const products = [
    {
      id: 'p1',
      title: 'Blush Satin Slip Dress',
      subtitle: 'Bias-cut midi • adjustable straps',
      price: 129,
      stock: 12,
      rating: 4.7,
      tags: ['satin', 'occasion', 'rose'],
      category: 'dresses',
      palette: 'rose',
      image:
        'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=2070&auto=format&fit=crop',
    },
    {
      id: 'p2',
      title: 'Cream Cropped Blazer',
      subtitle: 'Tailored fit • soft shoulder',
      price: 159,
      stock: 8,
      rating: 4.5,
      tags: ['blazer', 'office', 'neutral'],
      category: 'outerwear',
      palette: 'neutrals',
      image:
        'https://images.unsplash.com/photo-1613985542324-3f7dd1e26caa?q=80&w=1920&auto=format&fit=crop',
    },
    {
      id: 'p3',
      title: 'Pleated Maxi Skirt',
      subtitle: 'Lightweight chiffon • ankle length',
      price: 99,
      stock: 5,
      rating: 4.6,
      tags: ['pleated', 'maxi', 'floaty'],
      category: 'bottoms',
      palette: 'neutrals',
      image:
        'https://images.unsplash.com/photo-1542326237-94b1c5a538d4?q=80&w=1920&auto=format&fit=crop',
    },
    {
      id: 'p4',
      title: 'Black Chunky Loafers',
      subtitle: 'Platform sole • leather',
      price: 139,
      stock: 20,
      rating: 4.4,
      tags: ['loafers', 'platform', 'preppy'],
      category: 'accessories',
      palette: 'black',
      image:
        'https://images.unsplash.com/photo-1543326727-cf6c39e8f84b?q=80&w=1920&auto=format&fit=crop',
    },
    {
      id: 'p5',
      title: 'Powder Blue Athleisure Set',
      subtitle: 'Seamless rib • matching top & bottom',
      price: 89,
      stock: 15,
      rating: 4.8,
      tags: ['set', 'athleisure', 'pastel'],
      category: 'activewear',
      palette: 'pastels',
      image:
        'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1920&auto=format&fit=crop',
    },
    {
      id: 'p6',
      title: 'Rosé Wrap Dress',
      subtitle: 'Flowy georgette • V neckline',
      price: 119,
      stock: 9,
      rating: 4.6,
      tags: ['wrap', 'romantic', 'rose'],
      category: 'dresses',
      palette: 'rose',
      image:
        'https://images.unsplash.com/photo-1520974735194-5f5731b8117a?q=80&w=1920&auto=format&fit=crop',
    },
    {
      id: 'p7',
      title: 'Sculpt Knit Tank',
      subtitle: 'Contour fit • breathable',
      price: 49,
      stock: 30,
      rating: 4.3,
      tags: ['top', 'basics', 'neutral'],
      category: 'tops',
      palette: 'neutrals',
      image:
        'https://images.unsplash.com/photo-1487412912498-0447578fcca8?q=80&w=1920&auto=format&fit=crop',
    },
    {
      id: 'p8',
      title: 'Tailored Wide-Leg Trousers',
      subtitle: 'High rise • crease-resistant',
      price: 129,
      stock: 11,
      rating: 4.7,
      tags: ['tailored', 'wide-leg', 'office'],
      category: 'bottoms',
      palette: 'neutrals',
      image:
        'https://images.unsplash.com/photo-1509635022445-cb970685bde4?q=80&w=1920&auto=format&fit=crop',
    },
    {
      id: 'p9',
      title: 'Cropped Tweed Jacket',
      subtitle: 'Textured weave • gold-tone buttons',
      price: 179,
      stock: 6,
      rating: 4.6,
      tags: ['tweed', 'outerwear', 'parisian'],
      category: 'outerwear',
      palette: 'neutrals',
      image:
        'https://images.unsplash.com/photo-1520974779573-1b1e9a5f975a?q=80&w=1920&auto=format&fit=crop',
    },
    {
      id: 'p10',
      title: 'Petal Pink Cardigan',
      subtitle: 'Soft knit • pearl buttons',
      price: 79,
      stock: 18,
      rating: 4.5,
      tags: ['knit', 'pastel', 'cozy'],
      category: 'tops',
      palette: 'blush',
      image:
        'https://images.unsplash.com/photo-1511162843015-4f8d13f3ec95?q=80&w=1920&auto=format&fit=crop',
    },
    {
      id: 'p11',
      title: 'Butter Satin Shirt',
      subtitle: 'Relaxed fit • luminous finish',
      price: 89,
      stock: 13,
      rating: 4.4,
      tags: ['satin', 'tops', 'butter'],
      category: 'tops',
      palette: 'neutrals',
      image:
        'https://images.unsplash.com/photo-1613553490395-2ff86d6d1f6d?q=80&w=1920&auto=format&fit=crop',
    },
    {
      id: 'p12',
      title: 'Minimal Belt Bag',
      subtitle: 'Vegan leather • adjustable strap',
      price: 59,
      stock: 40,
      rating: 4.2,
      tags: ['accessory', 'belt bag', 'street'],
      category: 'accessories',
      palette: 'black',
      image:
        'https://images.unsplash.com/photo-1593034138715-1f2057b5e124?q=80&w=1920&auto=format&fit=crop',
    },
  ];

  return { trends, products };
}

export default function App() {
  const { trends, products } = useDemoData();
  const [filters, setFilters] = useState({ timeframe: 'Last 30 days', category: 'all', palette: 'all' });
  const recRef = useRef(null);
  const trendRef = useRef(null);

  const filteredTrends = useMemo(() => {
    return trends.filter((t) => (filters.category === 'all' ? true : t.category === filters.category) && (filters.palette === 'all' ? true : t.palette === filters.palette));
  }, [trends, filters]);

  const filteredProducts = useMemo(() => {
    return products.filter((p) => (filters.category === 'all' ? true : p.category === filters.category) && (filters.palette === 'all' ? true : p.palette === filters.palette));
  }, [products, filters]);

  const handleAdd = (p) => {
    alert(`Added to cart: ${p.title}`);
  };

  const scrollToTrends = () => trendRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  const scrollToProducts = () => recRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-rose-50/60 to-rose-100 text-rose-900">
      <div className="mx-auto max-w-6xl px-4 md:px-6 py-6 md:py-8">
        <HeroCover onExploreTrends={scrollToTrends} onShopMatches={scrollToProducts} />

        <div className="mt-6" ref={trendRef}>
          <FiltersBar filters={filters} setFilters={setFilters} />
        </div>

        <TrendsGrid trends={filteredTrends} />

        <div ref={recRef}>
          <Recommendations products={filteredProducts} onAdd={handleAdd} />
        </div>

        <footer className="mt-14 text-center text-sm text-rose-700/70">
          <p>Designed for modern clothing brands • Real-time insights and curated assortments</p>
        </footer>
      </div>
    </div>
  );
}
