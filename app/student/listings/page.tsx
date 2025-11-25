"use client"

import { useState } from "react"
import { ListingCard } from "@/components/listing-card"
import { FilterSidebar } from "@/components/filter-sidebar"
import { ArrowUpDown } from "lucide-react"

const allListings = [
  {
    id: "1",
    title: "Modern Studio with City View",
    price: 250,
    image: "/modern-studio-apartment.png",
    location: "Orange Groove",
    distance: 2.1,
    amenities: ["WiFi", "Water", "Transport"],
    availability: "available" as const,
  },
  {
    id: "2",
    title: "Cozy 2-Bedroom House",
    price: 400,
    image: "/cozy-bedroom-house.jpg",
    location: "Rujeko",
    distance: 1.5,
    amenities: ["WiFi", "Water"],
    availability: "few-left" as const,
  },
  {
    id: "3",
    title: "Luxury Bedsitter - Premium",
    price: 350,
    image: "/luxury-bedsitter.jpg",
    location: "Coldstream",
    distance: 3.2,
    amenities: ["WiFi", "Transport"],
    availability: "available" as const,
  },
  {
    id: "4",
    title: "Shared Apartment Near Campus",
    price: 180,
    image: "/shared-apartment-campus.jpg",
    location: "Toron",
    distance: 0.8,
    amenities: ["Water"],
    availability: "booked" as const,
  },
  {
    id: "5",
    title: "Spacious Bedsitter with Balcony",
    price: 320,
    image: "/placeholder.svg?key=w9akl",
    location: "Orange Groove",
    distance: 2.3,
    amenities: ["WiFi", "Transport", "Water"],
    availability: "available" as const,
  },
  {
    id: "6",
    title: "Student Complex - Shared Living",
    price: 220,
    image: "/placeholder.svg?key=9dkls",
    location: "Rujeko",
    distance: 1.8,
    amenities: ["WiFi", "Water"],
    availability: "few-left" as const,
  },
  {
    id: "7",
    title: "Modern Apartment - Fully Furnished",
    price: 450,
    image: "/placeholder.svg?key=kl02m",
    location: "Toron",
    distance: 1.2,
    amenities: ["WiFi", "Water", "Transport"],
    availability: "available" as const,
  },
  {
    id: "8",
    title: "Budget Bedsitter - Girls Only",
    price: 150,
    image: "/placeholder.svg?key=mls92",
    location: "Coldstream",
    distance: 3.5,
    amenities: ["Water"],
    availability: "available" as const,
  },
]

export default function ListingsPage() {
  const [sortBy, setSortBy] = useState("newest")
  const [listings] = useState(allListings)
  const [filters, setFilters] = useState({
    priceRange: [100, 500],
    distance: 5,
    location: "all",
    amenities: [],
  })

  const filteredListings = listings.filter((listing) => {
    const priceMatch = listing.price >= filters.priceRange[0] && listing.price <= filters.priceRange[1]
    const distanceMatch = listing.distance <= filters.distance
    const locationMatch =
      filters.location === "all" || listing.location.toLowerCase() === filters.location.toLowerCase()
    const amenitiesMatch =
      filters.amenities.length === 0 || filters.amenities.every((amenity) => listing.amenities.includes(amenity))

    return priceMatch && distanceMatch && locationMatch && amenitiesMatch
  })

  const sortedListings = [...filteredListings].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price
    if (sortBy === "price-high") return b.price - a.price
    if (sortBy === "distance") return a.distance - b.distance
    return 0
  })

  return (
    <main className="min-h-screen bg-(--color-bg-secondary) py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-(--color-text-primary) mb-2">Available Accommodations</h1>
          <p className="text-lg text-(--color-text-secondary)">Browse {listings.length} verified listings</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <FilterSidebar onFilterChange={setFilters} />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Sort Bar */}
            <div className="flex items-center justify-between mb-8">
              <p className="text-(--color-text-secondary)">Showing {sortedListings.length} results</p>
              <div className="flex items-center gap-2">
                <ArrowUpDown size={18} className="text-(--color-text-light)" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 border border-(--color-border) rounded-lg bg-(--color-bg-primary) text-(--color-text-primary) font-medium"
                >
                  <option value="newest">Newest First</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="distance">Distance: Closest</option>
                </select>
              </div>
            </div>

            {/* Listings Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {sortedListings.map((listing) => (
                <ListingCard key={listing.id} {...listing} />
              ))}
            </div>

            {/* Empty State */}
            {sortedListings.length === 0 && (
              <div className="glass rounded-xl p-12 text-center">
                <p className="text-(--color-text-secondary) mb-4">No listings found matching your criteria</p>
                <button
                  onClick={() => setFilters({ priceRange: [100, 500], distance: 5, location: "all", amenities: [] })}
                  className="px-6 py-2 bg-(--color-primary) text-white rounded-lg hover:bg-(--color-primary-dark)"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
