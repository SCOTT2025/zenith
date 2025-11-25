"use client"

import type React from "react"

import { useState } from "react"
import { Save } from "lucide-react"

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    subscriptionPrice: "9.99",
    maintenanceMode: false,
    allowNewLandlords: true,
    enableFeaturedListings: true,
  })

  const handleChange = (field: string, value: any) => {
    setSettings({
      ...settings,
      [field]: value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle settings update
  }

  return (
    <main className="min-h-screen bg-(--color-bg-secondary) py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-(--color-text-primary) mb-2">Platform Settings</h1>
          <p className="text-lg text-(--color-text-secondary)">Configure system and platform behavior</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Subscription Settings */}
          <div className="glass rounded-xl p-8">
            <h2 className="text-2xl font-bold text-(--color-text-primary) mb-6">Subscription Settings</h2>
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-(--color-text-primary) mb-2">
                  Base Subscription Price (Monthly, USD)
                </label>
                <input
                  type="number"
                  value={settings.subscriptionPrice}
                  onChange={(e) => handleChange("subscriptionPrice", e.target.value)}
                  step="0.01"
                  className="w-full px-4 py-3 border border-(--color-border) rounded-lg focus:outline-none focus:ring-2 focus:ring-(--color-primary)"
                />
              </div>
            </div>
          </div>

          {/* Feature Toggles */}
          <div className="glass rounded-xl p-8">
            <h2 className="text-2xl font-bold text-(--color-text-primary) mb-6">Feature Management</h2>
            <div className="space-y-4">
              {[
                {
                  id: "maintenanceMode",
                  label: "Maintenance Mode",
                  description: "Put platform in maintenance mode (only admins can access)",
                },
                {
                  id: "allowNewLandlords",
                  label: "Allow New Landlord Registration",
                  description: "Enable or disable new landlord registrations",
                },
                {
                  id: "enableFeaturedListings",
                  label: "Enable Featured Listings",
                  description: "Allow landlords to feature their properties",
                },
              ].map((feature) => (
                <label
                  key={feature.id}
                  className="flex items-start gap-4 p-4 border border-(--color-border) rounded-lg hover:border-(--color-primary) cursor-pointer transition-colors"
                >
                  <input
                    type="checkbox"
                    checked={settings[feature.id as keyof typeof settings] as boolean}
                    onChange={(e) => handleChange(feature.id, e.target.checked)}
                    className="w-5 h-5 rounded mt-1 accent-(--color-primary)"
                  />
                  <div>
                    <p className="font-semibold text-(--color-text-primary)">{feature.label}</p>
                    <p className="text-sm text-(--color-text-secondary)">{feature.description}</p>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* System Info */}
          <div className="glass rounded-xl p-8">
            <h2 className="text-2xl font-bold text-(--color-text-primary) mb-6">System Information</h2>
            <div className="space-y-3">
              {[
                { label: "Platform Version", value: "1.0.0" },
                { label: "Last Updated", value: "2024-12-20" },
                { label: "Database Status", value: "Connected" },
                { label: "Total Data Size", value: "2.4 GB" },
              ].map((info, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-(--color-bg-secondary) rounded-lg">
                  <span className="text-(--color-text-secondary)">{info.label}</span>
                  <span className="font-semibold text-(--color-text-primary)">{info.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end gap-3">
            <button
              type="button"
              className="px-6 py-3 border border-(--color-border) text-(--color-text-primary) rounded-lg hover:bg-(--color-bg-secondary) font-semibold transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-3 bg-(--color-primary) text-white rounded-lg hover:bg-(--color-primary-dark) font-semibold inline-flex items-center gap-2 transition-colors"
            >
              <Save size={18} />
              Save Settings
            </button>
          </div>
        </form>
      </div>
    </main>
  )
}
