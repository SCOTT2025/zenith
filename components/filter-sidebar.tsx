"use client"

import { useState } from "react"

interface FilterSidebarProps {
  onFilterChange?: (filters: any) => void
}

export function FilterSidebar({ onFilterChange }: FilterSidebarProps) {
  const [priceRange, setPriceRange] = useState([100, 500])
  const [distance, setDistance] = useState(5)
  const [location, setLocation] = useState("all")
  const [amenities, setAmenities] = useState<string[]>([])

  const locations = ["All", "Rujeko", "Orange Groove", "Coldstream", "Toron"]
  const amenitiesList = ["WiFi", "Water", "Transport", "Laundry", "Kitchen"]

  const toggleAmenity = (amenity: string) => {
    setAmenities((prev) => (prev.includes(amenity) ? prev.filter((a) => a !== amenity) : [...prev, amenity]))
  }

  const handleApplyFilters = () => {
    if (onFilterChange) {
      onFilterChange({
        priceRange,
        distance,
        location: location.toLowerCase(), // Convert to lowercase for consistent comparison
        amenities,
      })
    }
  }

  return (
    <div className="glass-sm rounded-xl p-6 h-fit sticky top-20">
      <h2 className="font-bold text-(--color-text-primary) mb-6">Filters</h2>

      {/* Price Range */}
      <div className="mb-8">
        <label className="block text-sm font-semibold text-(--color-text-primary) mb-3">
          Price Range: ${priceRange[0]} - ${priceRange[1]}/mo
        </label>
        <input
          type="range"
          min="0"
          max="1000"
          value={priceRange[1]}
          onChange={(e) => setPriceRange([priceRange[0], Number.parseInt(e.target.value)])}
          className="w-full accent-(--color-primary)"
        />
      </div>

      {/* Distance */}
      <div className="mb-8">
        <label className="block text-sm font-semibold text-(--color-text-primary) mb-3">
          Distance from Campus: {distance}km
        </label>
        <input
          type="range"
          min="0"
          max="20"
          value={distance}
          onChange={(e) => setDistance(Number.parseInt(e.target.value))}
          className="w-full accent-(--color-primary)"
        />
      </div>

      {/* Location */}
      <div className="mb-8">
        <label className="block text-sm font-semibold text-(--color-text-primary) mb-3">Location</label>
        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full px-3 py-2 border border-(--color-border) rounded-lg bg-(--color-bg-primary) text-(--color-text-primary)"
        >
          {locations.map((loc) => (
            <option key={loc} value={loc.toLowerCase()}>
              {loc}
            </option>
          ))}
        </select>
      </div>

      {/* Amenities */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-(--color-text-primary) mb-3">Amenities</label>
        <div className="space-y-2">
          {amenitiesList.map((amenity) => (
            <label key={amenity} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={amenities.includes(amenity)}
                onChange={() => toggleAmenity(amenity)}
                className="w-4 h-4 rounded accent-(--color-primary)"
              />
              <span className="text-sm text-(--color-text-secondary)">{amenity}</span>
            </label>
          ))}
        </div>
      </div>

      <button
        onClick={handleApplyFilters}
        className="w-full py-2 bg-(--color-accent) text-white rounded-lg hover:bg-(--color-accent) font-semibold transition-colors"
      >
        Apply Filters
      </button>
    </div>
  )
}
