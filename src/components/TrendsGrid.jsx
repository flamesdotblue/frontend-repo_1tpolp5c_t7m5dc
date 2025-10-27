import React, { useMemo } from 'react';
import { TrendingUp, Zap, Users } from 'lucide-react';

function Sparkline({ points }) {
  const max = Math.max(...points);
  const min = Math.min(...points);
  const width = 120;
  const height = 36;
  const step = width / (points.length - 1);
  const d = points
    .map((p, i) => {
      const x = i * step;
      const y = height - ((p - min) / (max - min || 1)) * height;
      return `${i === 0 ? 'M' : 'L'} ${x},${y}`;
    })
    .join(' ');

  return (
    <svg width={width} height={height} className="text-rose-300">
      <path d={d} fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export default function TrendsGrid({ trends }) {
  const sorted = useMemo(() => {
    return [...trends].sort((a, b) => b.strength - a.strength);
  }, [trends]);

  return (
    <div id="trends" className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {sorted.map((t) => (
        <div key={t.id} className="group rounded-2xl border border-rose-100 bg-white p-5 shadow-sm ring-1 ring-transparent transition hover:shadow-md hover:ring-rose-100/80">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-semibold text-rose-900">{t.name}</h3>
              <p className="text-sm text-rose-600/80">{t.source}</p>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-rose-50 px-3 py-1 text-sm text-rose-700">
              <TrendingUp className="h-4 w-4" />
              <span>{t.category}</span>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-rose-500" />
              <div>
                <p className="text-xs uppercase tracking-wide text-rose-500/70">Strength</p>
                <p className="text-lg font-semibold text-rose-900">{(t.strength * 100).toFixed(0)}%</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-pink-600" />
              <div>
                <p className="text-xs uppercase tracking-wide text-rose-500/70">Velocity</p>
                <p className="text-lg font-semibold text-rose-900">{(t.velocity * 100).toFixed(0)}%</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-amber-600" />
              <div>
                <p className="text-xs uppercase tracking-wide text-rose-500/70">Affinity</p>
                <p className="text-lg font-semibold text-rose-900">{t.affinity}</p>
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <Sparkline points={t.sparkline} />
            <div className="text-right">
              <p className="text-xs text-rose-500/70">Engagement</p>
              <p className="font-medium text-rose-900">{t.engagement.toLocaleString()} / {t.platform}</p>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {t.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-rose-50 px-3 py-1 text-xs text-rose-700">#{tag}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
