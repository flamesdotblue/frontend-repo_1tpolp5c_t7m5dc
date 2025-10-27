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
    <svg width={width} height={height} className="text-neutral-400">
      <path d={d} fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export default function TrendsGrid({ trends }) {
  const sorted = useMemo(() => {
    return [...trends].sort((a, b) => b.strength - a.strength);
  }, [trends]);

  return (
    <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {sorted.map((t) => (
        <div key={t.id} className="group rounded-xl border border-neutral-200 bg-white p-5 shadow-sm transition hover:shadow-md">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-semibold">{t.name}</h3>
              <p className="text-sm text-neutral-500">{t.source}</p>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-neutral-50 px-3 py-1 text-sm text-neutral-600">
              <TrendingUp className="h-4 w-4" />
              <span>{t.category}</span>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-amber-500" />
              <div>
                <p className="text-xs uppercase tracking-wide text-neutral-500">Strength</p>
                <p className="text-lg font-semibold">{(t.strength * 100).toFixed(0)}%</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-emerald-600" />
              <div>
                <p className="text-xs uppercase tracking-wide text-neutral-500">Velocity</p>
                <p className="text-lg font-semibold">{(t.velocity * 100).toFixed(0)}%</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-blue-600" />
              <div>
                <p className="text-xs uppercase tracking-wide text-neutral-500">Affinity</p>
                <p className="text-lg font-semibold">{t.affinity}</p>
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <Sparkline points={t.sparkline} />
            <div className="text-right">
              <p className="text-xs text-neutral-500">Engagement</p>
              <p className="font-medium">{t.engagement.toLocaleString()} / {t.platform}</p>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {t.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-700">#{tag}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
