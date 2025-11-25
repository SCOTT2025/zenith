"use client"

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import { Home, Users, DollarSign, AlertCircle } from "lucide-react"
import Link from "next/link"

const revenueData = [
  { month: "Jan", revenue: 500 },
  { month: "Feb", revenue: 750 },
  { month: "Mar", revenue: 1200 },
  { month: "Apr", revenue: 1500 },
  { month: "May", revenue: 1800 },
  { month: "Jun", revenue: 2100 },
]

const subscriptionData = [
  { name: "Active", value: 45 },
  { name: "Expired", value: 8 },
  { name: "Pending", value: 3 },
]

const COLORS = ["var(--color-success)", "var(--color-warning)", "var(--color-error)"]

export default function LandlordDashboard() {
  return (
    <main className="min-h-screen bg-(--color-bg-secondary) py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcome Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-(--color-text-primary) mb-2">Dashboard</h1>
          <p className="text-lg text-(--color-text-secondary)">Manage your properties and bookings</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {[
            {
              icon: <Home size={24} className="text-(--color-primary)" />,
              label: "Active Listings",
              value: "8",
              trend: "+2 this month",
            },
            {
              icon: <Users size={24} className="text-(--color-accent)" />,
              label: "New Booking Requests",
              value: "12",
              trend: "+5 pending",
            },
            {
              icon: <DollarSign size={24} className="text-(--color-success)" />,
              label: "Monthly Revenue",
              value: "$2,100",
              trend: "+12% from last month",
            },
            {
              icon: <AlertCircle size={24} className="text-(--color-warning)" />,
              label: "Subscription Status",
              value: "Active",
              trend: "Renews in 15 days",
            },
          ].map((stat, i) => (
            <div key={i} className="glass rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-(--color-text-secondary) font-medium text-sm">{stat.label}</span>
                {stat.icon}
              </div>
              <p className="text-3xl font-bold text-(--color-text-primary) mb-2">{stat.value}</p>
              <p className="text-xs text-(--color-text-light)">{stat.trend}</p>
            </div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Revenue Chart */}
          <div className="glass rounded-xl p-6 md:col-span-2">
            <h2 className="text-xl font-bold text-(--color-text-primary) mb-6">Revenue Trend</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                <XAxis dataKey="month" stroke="var(--color-text-light)" />
                <YAxis stroke="var(--color-text-light)" />
                <Tooltip
                  contentStyle={{ backgroundColor: "var(--color-bg-primary)", border: "1px solid var(--color-border)" }}
                />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="var(--color-primary)"
                  strokeWidth={2}
                  dot={{ fill: "var(--color-primary)" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Subscription Status */}
          <div className="glass rounded-xl p-6">
            <h2 className="text-xl font-bold text-(--color-text-primary) mb-6">Subscriptions</h2>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={subscriptionData}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {subscriptionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Bookings */}
        <div className="glass rounded-xl p-6 mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-(--color-text-primary)">Recent Booking Requests</h2>
            <Link href="/landlord/bookings" className="text-(--color-primary) hover:underline font-semibold text-sm">
              View All
            </Link>
          </div>
          <div className="space-y-3">
            {[
              { student: "Sarah Johnson", property: "Studio - Orange Groove", date: "2 days ago", status: "pending" },
              { student: "James Martinez", property: "2-Bed House - Rujeko", date: "1 hour ago", status: "pending" },
              { student: "Emma Davis", property: "Bedsitter - Coldstream", date: "5 hours ago", status: "approved" },
            ].map((booking, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-4 bg-(--color-bg-secondary) rounded-lg hover:bg-(--color-border) transition-colors"
              >
                <div>
                  <p className="font-semibold text-(--color-text-primary)">{booking.student}</p>
                  <p className="text-sm text-(--color-text-secondary)">{booking.property}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-(--color-text-light)">{booking.date}</span>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      booking.status === "approved"
                        ? "bg-(--color-success)/10 text-(--color-success)"
                        : "bg-(--color-warning)/10 text-(--color-warning)"
                    }`}
                  >
                    {booking.status === "approved" ? "Approved" : "Pending"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6">
          <Link
            href="/landlord/listings/new"
            className="glass rounded-xl p-8 text-center hover:shadow-lg transition-shadow cursor-pointer"
          >
            <div className="text-4xl mb-3">🏠</div>
            <h3 className="font-bold text-(--color-text-primary) mb-2">Add New Property</h3>
            <p className="text-sm text-(--color-text-secondary)">List a new accommodation</p>
          </Link>
          <Link
            href="/landlord/listings"
            className="glass rounded-xl p-8 text-center hover:shadow-lg transition-shadow cursor-pointer"
          >
            <div className="text-4xl mb-3">📋</div>
            <h3 className="font-bold text-(--color-text-primary) mb-2">Manage Listings</h3>
            <p className="text-sm text-(--color-text-secondary)">Edit or remove properties</p>
          </Link>
          <Link
            href="/landlord/subscription"
            className="glass rounded-xl p-8 text-center hover:shadow-lg transition-shadow cursor-pointer"
          >
            <div className="text-4xl mb-3">💳</div>
            <h3 className="font-bold text-(--color-text-primary) mb-2">Subscription Plans</h3>
            <p className="text-sm text-(--color-text-secondary)">Upgrade or renew subscription</p>
          </Link>
        </div>
      </div>
    </main>
  )
}
