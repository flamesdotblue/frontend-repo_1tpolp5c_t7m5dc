import React from 'react';
import Spline from '@splinetool/react-spline';
import { ShoppingBag, TrendingUp, Zap } from 'lucide-react';

const HeroCover = ({ onExploreTrends, onShopMatches }) => {
  return (
    <section className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden rounded-2xl">
      {/* Clothes-themed banner image behind Spline for brand context */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=2070&auto=format&fit=crop')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'saturate(1.05) contrast(1.05)',
        }}
      />

      {/* 3D Spline scene (subtle, decorative) */}
      <div className="absolute inset-0/ pointer-events-auto">
        <Spline
          scene="https://prod.spline.design/4c-3xepJcxGjXcQz/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft rose gradient overlays - do not block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-rose-50/60 via-rose-50/10 to-rose-100/80" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(244,114,182,0.25),transparent_60%)]" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-6xl px-6 w-full">
          <div className="backdrop-blur-sm bg-white/50 border border-white/60 shadow-xl rounded-2xl p-6 md:p-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 text-rose-700 text-sm font-medium">
                  <Zap className="h-4 w-4" /> Live Fashion Intelligence
                </div>
                <h1 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight text-rose-900">
                  Discover Trends. Curate Looks. Sell with Confidence.
                </h1>
                <p className="mt-3 md:mt-4 text-rose-800/90 md:text-lg max-w-2xl">
                  A feminine-forward dashboard that visualizes clothing trends and recommends
                  high-converting products your audience will love.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <button
                    onClick={onExploreTrends}
                    className="inline-flex items-center gap-2 rounded-full bg-rose-600 hover:bg-rose-700 text-white px-5 py-2.5 transition shadow-sm"
                  >
                    <TrendingUp className="h-5 w-5" /> Explore Trends
                  </button>
                  <button
                    onClick={onShopMatches}
                    className="inline-flex items-center gap-2 rounded-full bg-white/80 hover:bg-white text-rose-700 px-5 py-2.5 border border-rose-200 transition"
                  >
                    <ShoppingBag className="h-5 w-5" /> See Product Matches
                  </button>
                </div>
              </div>
              <ul className="grid grid-cols-2 gap-3 text-sm text-rose-800/90">
                <li className="bg-white/70 rounded-xl p-3 border border-white shadow-sm">
                  <p className="font-semibold text-rose-900">+38% CTR</p>
                  <p className="text-rose-700/80">On trend-backed carousels</p>
                </li>
                <li className="bg-white/70 rounded-xl p-3 border border-white shadow-sm">
                  <p className="font-semibold text-rose-900">2.1x Faster</p>
                  <p className="text-rose-700/80">From insight to assortment</p>
                </li>
                <li className="bg-white/70 rounded-xl p-3 border border-white shadow-sm">
                  <p className="font-semibold text-rose-900">+22% AOV</p>
                  <p className="text-rose-700/80">With curated bundles</p>
                </li>
                <li className="bg-white/70 rounded-xl p-3 border border-white shadow-sm">
                  <p className="font-semibold text-rose-900">Real-time</p>
                  <p className="text-rose-700/80">Social + store signals</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroCover;
