import React from 'react';
import { ShoppingBag } from 'lucide-react';

function ProductCard({ product }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-rose-100 bg-white shadow-sm transition hover:shadow-md">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="h-44 w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-rose-900/20 to-transparent" />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h4 className="font-semibold text-rose-900">{product.name}</h4>
            <p className="text-sm text-rose-600/80">{product.category}</p>
          </div>
          <div className="text-right">
            <p className="font-semibold text-rose-900">${product.price.toFixed(2)}</p>
            <p className={`text-xs ${product.inventory > 8 ? 'text-emerald-600' : product.inventory > 0 ? 'text-amber-600' : 'text-red-600'}`}>{product.inventory > 0 ? `${product.inventory} in stock` : 'Out of stock'}</p>
          </div>
        </div>
        <p className="mt-3 text-sm text-rose-800/90">
          {product.aiDescription}
        </p>
      </div>
    </div>
  );
}

export default function Recommendations({ trends, products }) {
  const topTrends = trends.slice(0, 3);
  const recs = topTrends.map((t) => ({
    trend: t,
    items: products
      .filter((p) =>
        (p.category === t.category || p.colors.some((c) => t.colors.includes(c)) || p.styleTags.some((s) => t.tags.includes(s)))
      )
      .slice(0, 4),
  }));

  return (
    <section id="recs" className="mt-12">
      <div className="flex items-center gap-2">
        <ShoppingBag className="h-5 w-5 text-rose-700" />
        <h3 className="text-xl font-semibold text-rose-900">Curated Matches</h3>
      </div>
      <p className="mt-1 text-sm text-rose-600/80">Perfectly paired pieces for the trends she loves—complete with compelling copy to convert.</p>

      <div className="mt-6 flex flex-col gap-8">
        {recs.map(({ trend, items }) => (
          <div key={trend.id}>
            <div className="mb-3 flex items-center justify-between">
              <div>
                <h4 className="text-lg font-semibold text-rose-900">{trend.name}</h4>
                <p className="text-sm text-rose-600/80">Strength {(trend.strength * 100).toFixed(0)}% • Velocity {(trend.velocity * 100).toFixed(0)}%</p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {items.length > 0 ? (
                items.map((p) => <ProductCard key={p.id} product={p} />)
              ) : (
                <div className="col-span-full rounded-2xl border border-dashed border-rose-200 p-6 text-center text-rose-500">
                  No direct matches found. Try adjusting filters.
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
