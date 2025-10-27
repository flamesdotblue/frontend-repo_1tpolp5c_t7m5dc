import React, { useMemo, useState } from 'react';
import { TrendingUp, Flame, BarChart3, X } from 'lucide-react';

const Sparkline = ({ points = [], color = '#fb7185' }) => {
  if (!points.length) return null;
  const width = 120;
  const height = 40;
  const max = Math.max(...points);
  const min = Math.min(...points);
  const norm = (v) => (height - ((v - min) / Math.max(max - min, 1)) * height);
  const path = points
    .map((v, i) => `${(i / (points.length - 1)) * width},${norm(v)}`)
    .join(' ');
  return (
    <svg width={width} height={height} className="overflow-visible">
      <polyline points={path} fill="none" stroke={color} strokeWidth="2" />
    </svg>
  );
};

const TrendModal = ({ trend, onClose }) => {
  if (!trend) return null;
  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative z-10 w-[95vw] max-w-2xl bg-white rounded-2xl shadow-2xl border border-rose-100 p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-rose-100 text-rose-700 text-xs font-medium">
              <BarChart3 className="h-4 w-4" /> Analytics
            </div>
            <h3 className="mt-3 text-2xl font-semibold text-rose-900">{trend.name}</h3>
            <p className="text-rose-700/80 mt-1">Deep dive view with performance over time and audience affinity.</p>
          </div>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-rose-50 text-rose-500">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-xl bg-rose-50 border border-rose-100 p-4">
            <p className="text-xs text-rose-700/70">Strength</p>
            <p className="text-2xl font-semibold text-rose-900">{trend.strength}</p>
          </div>
          <div className="rounded-xl bg-rose-50 border border-rose-100 p-4">
            <p className="text-xs text-rose-700/70">Velocity</p>
            <p className="text-2xl font-semibold text-rose-900">{trend.velocity}</p>
          </div>
          <div className="rounded-xl bg-rose-50 border border-rose-100 p-4">
            <p className="text-xs text-rose-700/70">Affinity</p>
            <p className="text-2xl font-semibold text-rose-900">{trend.affinity}%</p>
          </div>
        </div>

        <div className="mt-6">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-rose-900">Performance (last 12 weeks)</p>
            <span className="text-xs text-rose-700/70">Tap points for values</span>
          </div>
          <InteractiveChart points={trend.history} />
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-xl border border-rose-100 p-4">
            <p className="text-sm font-semibold text-rose-900">Top Cohorts</p>
            <ul className="mt-2 text-sm text-rose-700/90 list-disc list-inside">
              {trend.cohorts?.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-rose-100 p-4">
            <p className="text-sm font-semibold text-rose-900">Related Keywords</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {trend.keywords?.map((k) => (
                <span key={k} className="px-2 py-1 rounded-full bg-rose-50 text-rose-700 border border-rose-100 text-xs">{k}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const InteractiveChart = ({ points }) => {
  const [active, setActive] = useState(null);
  const width = 560;
  const height = 160;
  const max = Math.max(...points);
  const min = Math.min(...points);
  const normY = (v) => height - ((v - min) / Math.max(max - min, 1)) * height;
  const xStep = width / (points.length - 1);
  const poly = points.map((v, i) => `${i * xStep},${normY(v)}`).join(' ');

  return (
    <div className="relative overflow-x-auto">
      <svg width={width} height={height} className="mt-3">
        <polyline points={poly} fill="none" stroke="#fb7185" strokeWidth="3" />
        {points.map((v, i) => (
          <g key={i}>
            <circle
              cx={i * xStep}
              cy={normY(v)}
              r={active === i ? 5 : 4}
              fill={active === i ? '#f43f5e' : '#fb7185'}
              className="cursor-pointer"
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              onClick={() => setActive(i)}
            />
            {active === i && (
              <g>
                <rect x={i * xStep - 24} y={normY(v) - 36} width="48" height="24" rx="6" ry="6" fill="#fff1f2" stroke="#fecdd3" />
                <text x={i * xStep} y={normY(v) - 20} textAnchor="middle" className="fill-rose-700 text-xs">{v}</text>
              </g>
            )}
          </g>
        ))}
      </svg>
    </div>
  );
};

const TrendsGrid = ({ trends }) => {
  const [selected, setSelected] = useState(null);

  const topTrends = useMemo(() => trends.sort((a, b) => b.strength - a.strength), [trends]);

  return (
    <section className="mt-10">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-rose-900">
          <TrendingUp className="h-5 w-5" />
          <h2 className="text-xl md:text-2xl font-semibold">Trending Now</h2>
        </div>
        <span className="text-sm text-rose-700/70">Click a chart to see full analytics</span>
      </div>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {topTrends.map((t) => (
          <div key={t.id} className="group rounded-2xl bg-white/80 border border-white shadow hover:shadow-lg transition p-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="inline-flex items-center gap-1.5 text-rose-600 bg-rose-50 border border-rose-100 px-2 py-0.5 rounded-full text-xs font-medium">
                  <Flame className="h-3.5 w-3.5" /> Rising
                </div>
                <h3 className="mt-2 text-lg font-semibold text-rose-900">{t.name}</h3>
                <p className="text-sm text-rose-700/80">Affinity {t.affinity}% • Velocity {t.velocity}</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-semibold text-rose-900">{t.strength}</p>
                <p className="text-xs text-rose-700/70">Score</p>
              </div>
            </div>
            <button
              onClick={() => setSelected(t)}
              className="mt-3 w-full rounded-xl border border-rose-100 hover:border-rose-200 bg-rose-50/60 hover:bg-rose-50 transition p-2 text-left"
            >
              <Sparkline points={t.history} />
              <p className="mt-1 text-xs text-rose-700/70">Tap to explore analytics</p>
            </button>
          </div>
        ))}
      </div>

      {selected && <TrendModal trend={selected} onClose={() => setSelected(null)} />}
    </section>
  );
};

export default TrendsGrid;
