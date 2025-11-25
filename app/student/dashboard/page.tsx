"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { Heart, MapPin, Clock, Eye } from "lucide-react"

const activityData = [
  { month: "Jan", views: 40, saves: 24 },
  { month: "Feb", views: 45, saves: 30 },
  { month: "Mar", views: 60, saves: 35 },
  { month: "Apr", views: 55, saves: 42 },
]

export default function StudentDashboard() {
  return (
    <main className="min-h-screen bg-(--color-bg-secondary) py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcome Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-(--color-text-primary) mb-2">Welcome Back, Sarah</h1>
          <p className="text-lg text-(--color-text-secondary)">Manage your accommodation search in one place</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {[
            { icon: <Heart size={24} className="text-(--color-error)" />, label: "Saved Listings", value: "12" },
            { icon: <Eye size={24} className="text-(--color-primary)" />, label: "Recently Viewed", value: "8" },
            { icon: <Clock size={24} className="text-(--color-warning)" />, label: "Pending Requests", value: "3" },
            { icon: <MapPin size={24} className="text-(--color-accent)" />, label: "Favorite Areas", value: "5" },
          ].map((stat, i) => (
            <div key={i} className="glass rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-(--color-text-secondary) font-medium">{stat.label}</span>
                {stat.icon}
              </div>
              <p className="text-3xl font-bold text-(--color-text-primary)">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Activity Chart */}
          <div className="glass rounded-xl p-6">
            <h2 className="text-xl font-bold text-(--color-text-primary) mb-6">Search Activity</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={activityData}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                <XAxis dataKey="month" stroke="var(--color-text-light)" />
                <YAxis stroke="var(--color-text-light)" />
                <Tooltip
                  contentStyle={{ backgroundColor: "var(--color-bg-primary)", border: "1px solid var(--color-border)" }}
                />
                <Bar dataKey="views" fill="var(--color-primary)" />
                <Bar dataKey="saves" fill="var(--color-accent)" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Recommended Areas */}
          <div className="glass rounded-xl p-6">
            <h2 className="text-xl font-bold text-(--color-text-primary) mb-6">Recommended For You</h2>
            <div className="space-y-4">
              {[
                "Orange Groove - 2.1km away",
                "Rujeko - 1.5km away",
                "Coldstream - 3.2km away",
                "Toron - 0.8km away",
              ].map((rec, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-3 bg-(--color-bg-tertiary) rounded-lg hover:bg-(--color-border) transition-colors cursor-pointer"
                >
                  <span className="text-(--color-text-secondary)">{rec}</span>
                  <span className="text-(--color-primary) font-semibold">View</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Searches */}
        <div className="glass rounded-xl p-6 mb-12">
          <h2 className="text-xl font-bold text-(--color-text-primary) mb-6">Recent Searches</h2>
          <div className="space-y-3">
            {[
              "Budget studios under $300 in Orange Groove",
              "2-bedroom houses with WiFi",
              "Shared apartments near campus",
              "Studios with water supply",
            ].map((search, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-3 bg-(--color-bg-tertiary) rounded-lg hover:bg-(--color-border) transition-colors"
              >
                <span className="text-(--color-text-secondary)">{search}</span>
                <button className="text-(--color-primary) font-semibold hover:underline">Search Again</button>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6">
          <button className="glass rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-3">🔍</div>
            <h3 className="font-bold text-(--color-text-primary) mb-2">Start New Search</h3>
            <p className="text-sm text-(--color-text-secondary)">Find accommodation with new filters</p>
          </button>
          <button className="glass rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-3">❤️</div>
            <h3 className="font-bold text-(--color-text-primary) mb-2">View Saved Listings</h3>
            <p className="text-sm text-(--color-text-secondary)">Manage your wishlist</p>
          </button>
          <button className="glass rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-3">📋</div>
            <h3 className="font-bold text-(--color-text-primary) mb-2">My Booking Requests</h3>
            <p className="text-sm text-(--color-text-secondary)">Check viewing requests</p>
          </button>
        </div>
      </div>
    </main>
  )
}
