import React from 'react';
import { Filter, Calendar, Palette, ShoppingBag } from 'lucide-react';

const FiltersBar = ({ filters, setFilters }) => {
  const update = (key) => (e) => setFilters((f) => ({ ...f, [key]: e.target.value }));

  return (
    <div className="sticky top-4 z-20">
      <div className="backdrop-blur bg-white/70 border border-white shadow-lg rounded-2xl px-4 py-3 md:px-6 md:py-4">
        <div className="flex flex-wrap items-center gap-3">
          <div className="inline-flex items-center gap-2 text-rose-700">
            <Filter className="h-4 w-4" />
            <span className="font-medium">Refine</span>
          </div>

          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-rose-400" />
            <select
              value={filters.timeframe}
              onChange={update('timeframe')}
              className="rounded-full border border-rose-200 bg-white/80 px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-rose-300"
            >
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Season to date</option>
              <option>Year to date</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <ShoppingBag className="h-4 w-4 text-rose-400" />
            <select
              value={filters.category}
              onChange={update('category')}
              className="rounded-full border border-rose-200 bg-white/80 px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-rose-300"
            >
              <option value="all">All categories</option>
              <option value="dresses">Dresses</option>
              <option value="tops">Tops</option>
              <option value="bottoms">Bottoms</option>
              <option value="outerwear">Outerwear</option>
              <option value="activewear">Activewear</option>
              <option value="accessories">Accessories</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <Palette className="h-4 w-4 text-rose-400" />
            <select
              value={filters.palette}
              onChange={update('palette')}
              className="rounded-full border border-rose-200 bg-white/80 px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-rose-300"
            >
              <option value="all">All colors</option>
              <option value="rose">Rose</option>
              <option value="blush">Blush</option>
              <option value="neutrals">Neutrals</option>
              <option value="black">Black</option>
              <option value="pastels">Pastels</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiltersBar;
