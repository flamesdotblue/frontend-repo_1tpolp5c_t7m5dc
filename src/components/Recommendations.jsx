import React from 'react';
import { ShoppingBag } from 'lucide-react';

function ProductCard({ product }) {
  return (
    <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm">
      <img
        src={product.image}
        alt={product.name}
        className="h-40 w-full object-cover"
        loading="lazy"
      />
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h4 className="font-semibold">{product.name}</h4>
            <p className="text-sm text-neutral-500">{product.category}</p>
          </div>
          <div className="text-right">
            <p className="font-semibold">${product.price.toFixed(2)}</p>
            <p className={`text-xs ${product.inventory > 8 ? 'text-emerald-600' : product.inventory > 0 ? 'text-amber-600' : 'text-red-600'}`}>{product.inventory > 0 ? `${product.inventory} in stock` : 'Out of stock'}</p>
          </div>
        </div>
        <p className="mt-3 text-sm text-neutral-700">
          {product.aiDescription}
        </p>
      </div>
    </div>
  );
}

export default function Recommendations({ trends, products }) {
  // Map top trends to recommended products by simple style/color/category similarity
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
    <section className="mt-10">
      <div className="flex items-center gap-2">
        <ShoppingBag className="h-5 w-5 text-neutral-700" />
        <h3 className="text-xl font-semibold">Product Recommendations</h3>
      </div>
      <p className="mt-1 text-sm text-neutral-500">AI-matched products for the hottest trends, with compelling copy to drive conversion.</p>

      <div className="mt-6 flex flex-col gap-8">
        {recs.map(({ trend, items }) => (
          <div key={trend.id}>
            <div className="mb-3 flex items-center justify-between">
              <div>
                <h4 className="text-lg font-semibold">{trend.name}</h4>
                <p className="text-sm text-neutral-500">Strength {(trend.strength * 100).toFixed(0)}% • Velocity {(trend.velocity * 100).toFixed(0)}%</p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {items.length > 0 ? (
                items.map((p) => <ProductCard key={p.id} product={p} />)
              ) : (
                <div className="col-span-full rounded-xl border border-dashed border-neutral-200 p-6 text-center text-neutral-500">
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
