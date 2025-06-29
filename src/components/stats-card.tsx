"use client";

interface StatsCardProps {
  count: string;
  title: string;
}

export function StatsCard({ count, title }: StatsCardProps) {
  return (
    <div className="bg-white/80 shadow rounded-lg text-center p-6">
      <div className="text-4xl font-bold text-blue-gray-900">{count}</div>
      <div className="mt-1 font-medium text-blue-gray-700 text-lg">{title}</div>
    </div>
  );
}

export default StatsCard;
