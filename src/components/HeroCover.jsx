import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

export default function HeroCover() {
  return (
    <section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden rounded-xl">
      <Spline
        scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode"
        style={{ width: '100%', height: '100%' }}
      />
      {/* Gradient overlay to improve text contrast; pointer-events-none so it doesn't block the 3D scene */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

      <div className="absolute inset-0 flex items-end md:items-center">
        <div className="mx-auto w-full max-w-6xl px-6 pb-8 md:pb-0">
          <div className="max-w-2xl text-white">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur">
              <Rocket className="h-4 w-4" />
              <span>AI-Powered Fashion Intelligence</span>
            </div>
            <h1 className="text-3xl font-semibold leading-tight md:text-5xl">
              Track runway and social trends. Match to your catalog. Convert with confidence.
            </h1>
            <p className="mt-4 text-white/80 md:text-lg">
              A modern dashboard that scores trends by strength and velocity, maps audiences, and recommends products with rich visuals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
