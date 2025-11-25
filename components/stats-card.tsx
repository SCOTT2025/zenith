import type React from "react"
interface StatsCardProps {
  icon: React.ReactNode
  label: string
  value: string
  trend?: string
  trendPositive?: boolean
}

export function StatsCard({ icon, label, value, trend, trendPositive = true }: StatsCardProps) {
  return (
    <div className="glass rounded-xl p-6">
      <div className="flex items-center justify-between mb-4">
        <span className="text-(--color-text-secondary) font-medium text-sm">{label}</span>
        {icon}
      </div>
      <p className="text-3xl font-bold text-(--color-text-primary) mb-2">{value}</p>
      {trend && (
        <p className={`text-xs ${trendPositive ? "text-(--color-success)" : "text-(--color-error)"}`}>{trend}</p>
      )}
    </div>
  )
}
