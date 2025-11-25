"use client"

import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import { Users, Home, CreditCard, TrendingUp } from "lucide-react"

const platformStats = [
  { month: "Jan", students: 150, landlords: 45, properties: 120 },
  { month: "Feb", students: 210, landlords: 58, properties: 155 },
  { month: "Mar", students: 320, landlords: 72, properties: 198 },
  { month: "Apr", students: 450, landlords: 89, properties: 245 },
  { month: "May", students: 620, landlords: 105, properties: 310 },
]

const subscriptionStatus = [
  { name: "Active", value: 89 },
  { name: "Expired", value: 12 },
  { name: "Pending", value: 4 },
]

const COLORS = ["var(--color-success)", "var(--color-warning)", "var(--color-error)"]

export default function AdminDashboard() {
  return (
    <main className="min-h-screen bg-(--color-bg-secondary) py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-(--color-text-primary) mb-2">Admin Dashboard</h1>
          <p className="text-lg text-(--color-text-secondary)">Platform overview and management</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-12">
          {[
            {
              icon: <Users size={24} className="text-(--color-primary)" />,
              label: "Total Students",
              value: "620",
              trend: "+15%",
            },
            {
              icon: <Users size={24} className="text-(--color-accent)" />,
              label: "Total Landlords",
              value: "105",
              trend: "+8%",
            },
            {
              icon: <Home size={24} className="text-(--color-primary)" />,
              label: "Total Properties",
              value: "310",
              trend: "+12%",
            },
            {
              icon: <CreditCard size={24} className="text-(--color-success)" />,
              label: "Active Subscriptions",
              value: "89",
              trend: "+5%",
            },
            {
              icon: <TrendingUp size={24} className="text-(--color-warning)" />,
              label: "Total Payments",
              value: "$15.2K",
              trend: "+22%",
            },
          ].map((stat, i) => (
            <div key={i} className="glass rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-(--color-text-secondary) font-medium text-sm">{stat.label}</span>
                {stat.icon}
              </div>
              <p className="text-3xl font-bold text-(--color-text-primary)">{stat.value}</p>
              <p className="text-xs text-(--color-success) mt-2">{stat.trend} this month</p>
            </div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {/* Growth Chart */}
          <div className="glass rounded-xl p-6 lg:col-span-2">
            <h2 className="text-xl font-bold text-(--color-text-primary) mb-6">Platform Growth</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={platformStats}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                <XAxis dataKey="month" stroke="var(--color-text-light)" />
                <YAxis stroke="var(--color-text-light)" />
                <Tooltip
                  contentStyle={{ backgroundColor: "var(--color-bg-primary)", border: "1px solid var(--color-border)" }}
                />
                <Line type="monotone" dataKey="students" stroke="var(--color-primary)" strokeWidth={2} />
                <Line type="monotone" dataKey="landlords" stroke="var(--color-accent)" strokeWidth={2} />
                <Line type="monotone" dataKey="properties" stroke="var(--color-success)" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Subscription Status */}
          <div className="glass rounded-xl p-6">
            <h2 className="text-xl font-bold text-(--color-text-primary) mb-6">Subscription Status</h2>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={subscriptionStatus}
                  cx="50%"
                  cy="50%"
                  innerRadius={30}
                  outerRadius={70}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {subscriptionStatus.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Pending Verifications */}
        <div className="glass rounded-xl p-6 mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-(--color-text-primary)">Pending Verifications</h2>
            <span className="px-3 py-1 bg-(--color-warning)/10 text-(--color-warning) text-xs font-bold rounded-full">
              5 Awaiting Review
            </span>
          </div>
          <div className="space-y-3">
            {[
              { name: "John Smith", type: "Landlord", date: "2024-12-20", status: "pending" },
              { name: "Maria Garcia", type: "Student", date: "2024-12-19", status: "pending" },
              { name: "David Chen", type: "Landlord", date: "2024-12-18", status: "pending" },
            ].map((user, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-(--color-bg-secondary) rounded-lg">
                <div className="flex-1">
                  <p className="font-semibold text-(--color-text-primary)">{user.name}</p>
                  <p className="text-sm text-(--color-text-secondary)">
                    {user.type} • Submitted {user.date}
                  </p>
                </div>
                <div className="flex gap-2">
                  <button className="px-3 py-1 bg-(--color-success) text-white text-xs rounded hover:bg-(--color-success)/80 font-semibold">
                    Approve
                  </button>
                  <button className="px-3 py-1 bg-(--color-error) text-white text-xs rounded hover:bg-(--color-error)/80 font-semibold">
                    Reject
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-4 gap-6">
          <div className="glass rounded-xl p-8 text-center hover:shadow-lg transition-shadow cursor-pointer">
            <div className="text-4xl mb-3">👥</div>
            <h3 className="font-bold text-(--color-text-primary) mb-2">Manage Users</h3>
            <p className="text-sm text-(--color-text-secondary)">View all students and landlords</p>
          </div>
          <div className="glass rounded-xl p-8 text-center hover:shadow-lg transition-shadow cursor-pointer">
            <div className="text-4xl mb-3">🏠</div>
            <h3 className="font-bold text-(--color-text-primary) mb-2">Review Properties</h3>
            <p className="text-sm text-(--color-text-secondary)">Approve or reject listings</p>
          </div>
          <div className="glass rounded-xl p-8 text-center hover:shadow-lg transition-shadow cursor-pointer">
            <div className="text-4xl mb-3">💳</div>
            <h3 className="font-bold text-(--color-text-primary) mb-2">View Payments</h3>
            <p className="text-sm text-(--color-text-secondary)">Track all transactions</p>
          </div>
          <div className="glass rounded-xl p-8 text-center hover:shadow-lg transition-shadow cursor-pointer">
            <div className="text-4xl mb-3">⚙️</div>
            <h3 className="font-bold text-(--color-text-primary) mb-2">Platform Settings</h3>
            <p className="text-sm text-(--color-text-secondary)">Configure system</p>
          </div>
        </div>
      </div>
    </main>
  )
}
