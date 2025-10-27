import React from 'react';
import { Filter, Calendar, Users } from 'lucide-react';

export default function FiltersBar({ filters, setFilters }) {
  const categories = ['All', 'Dresses', 'Outerwear', 'Footwear', 'Accessories'];
  const demographics = ['All', 'Gen Z', 'Millennial', 'Gen X'];
  const periods = ['7d', '30d', '90d'];

  return (
    <div className="mt-10 w-full rounded-2xl border border-rose-100 bg-white/80 p-5 shadow-sm backdrop-blur">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2 text-rose-700">
          <Filter className="h-5 w-5" />
          <span className="font-medium">Refine trends</span>
        </div>

        <div className="grid w-full grid-cols-1 gap-3 md:w-auto md:grid-cols-3">
          <div className="flex items-center gap-2">
            <label className="min-w-[92px] text-sm text-rose-600">Category</label>
            <select
              className="w-full rounded-full border border-rose-200 bg-white px-4 py-2 text-sm text-rose-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-200 md:w-48"
              value={filters.category}
              onChange={(e) => setFilters((f) => ({ ...f, category: e.target.value }))}
            >
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-2">
            <label className="min-w-[92px] text-sm text-rose-600 flex items-center gap-1"><Users className="h-4 w-4"/>Demographic</label>
            <select
              className="w-full rounded-full border border-rose-200 bg-white px-4 py-2 text-sm text-rose-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-200 md:w-48"
              value={filters.demographic}
              onChange={(e) => setFilters((f) => ({ ...f, demographic: e.target.value }))}
            >
              {demographics.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-2">
            <label className="min-w-[92px] text-sm text-rose-600 flex items-center gap-1"><Calendar className="h-4 w-4"/>Period</label>
            <select
              className="w-full rounded-full border border-rose-200 bg-white px-4 py-2 text-sm text-rose-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-200 md:w-48"
              value={filters.period}
              onChange={(e) => setFilters((f) => ({ ...f, period: e.target.value }))}
            >
              {periods.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
