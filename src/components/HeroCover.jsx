import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

export default function HeroCover() {
  return (
    <section className="relative w-full overflow-hidden rounded-2xl bg-gradient-to-b from-rose-50 via-pink-50 to-amber-50/40" style={{ height: '70vh' }}>
      <Spline
        scene="https://prod.spline.design/c1w2QYixcPkptHWE/scene.splinecode"
        style={{ width: '100%', height: '100%' }}
      />
      {/* Soft gradients to enhance contrast without blocking interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-rose-100/70 via-transparent to-pink-100/40" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_60%_at_80%_20%,rgba(255,255,255,0.9),transparent)]" />

      <div className="absolute inset-0 flex items-end md:items-center">
        <div className="mx-auto w-full max-w-6xl px-6 pb-10 md:pb-0">
          <div className="max-w-3xl text-rose-950">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-sm text-rose-700 shadow-sm backdrop-blur">
              <Rocket className="h-4 w-4" />
              <span>Beautiful fashion intelligence for modern brands</span>
            </div>
            <h1 className="text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
              Discover what she wants next. Trends scored. Products matched.
            </h1>
            <p className="mt-4 text-rose-700/80 md:text-lg">
              From runway to TikTok in a glance—see strength and velocity, understand your audience, and turn insights into sell‑through.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#trends" className="inline-flex items-center justify-center rounded-full bg-rose-600 px-5 py-2.5 text-white shadow hover:bg-rose-700 transition">
                Explore Trends
              </a>
              <a href="#recs" className="inline-flex items-center justify-center rounded-full bg-white/80 px-5 py-2.5 text-rose-700 shadow hover:bg-white transition">
                Shop Matches
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
