import React from 'react';
import { ShoppingBag, Star } from 'lucide-react';

const ProductCard = ({ p, onAdd }) => {
  return (
    <div className="group relative rounded-2xl overflow-hidden bg-white/80 border border-white shadow hover:shadow-lg transition">
      <div className="aspect-[4/3] w-full overflow-hidden">
        <img
          src={p.image}
          alt={p.title}
          className="h-full w-full object-cover group-hover:scale-105 transition duration-500"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h4 className="font-semibold text-rose-900 line-clamp-1">{p.title}</h4>
            <p className="text-sm text-rose-700/80 line-clamp-1">{p.subtitle}</p>
          </div>
          <div className="text-right">
            <p className="text-rose-900 font-semibold">${p.price}</p>
            <p className={`text-xs ${p.stock > 5 ? 'text-emerald-600' : 'text-amber-600'}`}>{p.stock > 5 ? 'In stock' : 'Low stock'}</p>
          </div>
        </div>
        <div className="mt-2 flex items-center gap-1 text-amber-500">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className={`h-4 w-4 ${i < Math.round(p.rating) ? 'fill-amber-400' : 'fill-transparent'} stroke-amber-500`} />
          ))}
          <span className="text-xs text-rose-700/70 ml-1">{p.rating.toFixed(1)}</span>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <div className="flex flex-wrap gap-1">
            {p.tags.map((t) => (
              <span key={t} className="px-2 py-0.5 rounded-full bg-rose-50 text-rose-700 border border-rose-100 text-xs">{t}</span>
            ))}
          </div>
          <button
            onClick={() => onAdd(p)}
            className="inline-flex items-center gap-2 rounded-full bg-rose-600 hover:bg-rose-700 text-white px-3 py-1.5 text-sm"
          >
            <ShoppingBag className="h-4 w-4" /> Add
          </button>
        </div>
      </div>
    </div>
  );
};

const Recommendations = ({ products, onAdd }) => {
  return (
    <section className="mt-10">
      <div className="flex items-center justify-between">
        <h2 className="text-xl md:text-2xl font-semibold text-rose-900">Recommended Products</h2>
        <p className="text-sm text-rose-700/70">Curated by top trends</p>
      </div>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {products.map((p) => (
          <ProductCard key={p.id} p={p} onAdd={onAdd} />)
        )}
      </div>
    </section>
  );
};

export default Recommendations;
