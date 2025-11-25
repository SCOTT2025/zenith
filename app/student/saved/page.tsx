"use client"

import { ListingCard } from "@/components/listing-card"
import { Heart } from "lucide-react"

const savedListings = [
  {
    id: "1",
    title: "Modern Studio with City View",
    price: 250,
    image: "/modern-studio-apartment.png",
    location: "Orange Groove",
    distance: 2.1,
    amenities: ["WiFi", "Water", "Transport"],
    availability: "available" as const,
    isSaved: true,
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
    isSaved: true,
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
    isSaved: true,
  },
]

export default function SavedPage() {
  return (
    <main className="min-h-screen bg-(--color-bg-secondary) py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 flex items-center gap-3">
          <Heart size={32} className="text-(--color-error)" fill="currentColor" />
          <div>
            <h1 className="text-4xl font-bold text-(--color-text-primary)">Saved Listings</h1>
            <p className="text-lg text-(--color-text-secondary)">Your favorite accommodations in one place</p>
          </div>
        </div>

        {/* Saved Listings Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {savedListings.map((listing) => (
            <ListingCard key={listing.id} {...listing} />
          ))}
        </div>

        {/* Empty State */}
        {savedListings.length === 0 && (
          <div className="glass rounded-xl p-12 text-center">
            <Heart size={48} className="mx-auto mb-4 text-(--color-text-light)" />
            <p className="text-lg text-(--color-text-secondary) mb-4">No saved listings yet</p>
            <button className="px-6 py-3 bg-(--color-primary) text-white rounded-lg hover:bg-(--color-primary-dark) font-semibold">
              Start Browsing
            </button>
          </div>
        )}
      </div>
    </main>
  )
}
