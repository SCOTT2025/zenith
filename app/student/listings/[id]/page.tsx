"use client"

import { useState } from "react"
import { Heart, MapPin, Users, Home, Wifi, Droplet, Navigation, MessageCircle, Check } from "lucide-react"
import Link from "next/link"

export default function ListingDetailsPage({ params }: { params: { id: string } }) {
  const [isSaved, setIsSaved] = useState(false)
  const [showRequestForm, setShowRequestForm] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const images = ["/modern-studio-apartment.png", "/cozy-bedroom-house.jpg", "/luxury-bedsitter.jpg"]

  const listing = {
    id: params.id,
    title: "Modern Studio with City View",
    price: 250,
    location: "Orange Groove",
    distance: 2.1,
    bedrooms: 1,
    bathrooms: 1,
    occupancy: 2,
    gender: "Mixed",
    description:
      "Beautiful modern studio apartment with stunning city views. Fully furnished with modern amenities, high-speed WiFi, 24/7 water supply, and close access to public transport.",
    amenities: [
      { name: "WiFi", icon: <Wifi size={20} /> },
      { name: "Water Supply", icon: <Droplet size={20} /> },
      { name: "Transport Access", icon: <Navigation size={20} /> },
      { name: "Furnished", icon: <Home size={20} /> },
    ],
    landlord: {
      id: "1",
      name: "Mr. Johnson",
      rating: 4.8,
      reviews: 24,
      verified: true,
    },
    reviews: [
      { author: "Sarah M.", rating: 5, text: "Excellent accommodation, landlord was very responsive!" },
      { author: "James K.", rating: 4, text: "Great location and amenities. A bit noisy on weekends." },
    ],
  }

  return (
    <main>
      {/* Navbar */}

      <div className="min-h-screen bg-(--color-bg-secondary) py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Image Carousel */}
          <div className="glass rounded-2xl overflow-hidden mb-8">
            <div className="relative h-96 bg-(--color-bg-tertiary)">
              <img
                src={images[currentImageIndex] || "/placeholder.svg"}
                alt={listing.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full transition-colors"
              >
                ←
              </button>
              <button
                onClick={() => setCurrentImageIndex((prev) => (prev + 1) % images.length)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full transition-colors"
              >
                →
              </button>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentImageIndex(i)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      i === currentImageIndex ? "bg-white" : "bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Title & Basic Info */}
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h1 className="text-4xl font-bold text-(--color-text-primary) mb-2">{listing.title}</h1>
                    <div className="flex items-center gap-2 text-(--color-text-secondary)">
                      <MapPin size={18} />
                      <span>{listing.location}</span>
                      <span>•</span>
                      <span>{listing.distance}km from campus</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsSaved(!isSaved)}
                    className={`p-3 rounded-full transition-colors ${
                      isSaved ? "bg-(--color-error) text-white" : "bg-(--color-bg-tertiary) text-(--color-text-primary)"
                    }`}
                  >
                    <Heart size={24} fill={isSaved ? "currentColor" : "none"} />
                  </button>
                </div>

                <p className="text-3xl font-bold text-(--color-primary) mb-2">
                  ${listing.price}
                  <span className="text-lg text-(--color-text-secondary) font-normal">/month</span>
                </p>
              </div>

              {/* Room Details */}
              <div className="glass rounded-xl p-6">
                <h2 className="text-xl font-bold text-(--color-text-primary) mb-4">Room Details</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { icon: <Home size={20} />, label: "Bedrooms", value: listing.bedrooms },
                    { icon: <Users size={20} />, label: "Occupancy", value: listing.occupancy },
                    { icon: <Users size={20} />, label: "Gender", value: listing.gender },
                    { icon: <Home size={20} />, label: "Bathrooms", value: listing.bathrooms },
                  ].map((detail, i) => (
                    <div key={i} className="text-center p-4 bg-(--color-bg-secondary) rounded-lg">
                      <div className="flex justify-center mb-2 text-(--color-primary)">{detail.icon}</div>
                      <p className="text-sm text-(--color-text-secondary) mb-1">{detail.label}</p>
                      <p className="font-bold text-(--color-text-primary)">{detail.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div className="glass rounded-xl p-6">
                <h2 className="text-xl font-bold text-(--color-text-primary) mb-4">Description</h2>
                <p className="text-(--color-text-secondary) leading-relaxed">{listing.description}</p>
              </div>

              {/* Amenities */}
              <div className="glass rounded-xl p-6">
                <h2 className="text-xl font-bold text-(--color-text-primary) mb-4">Amenities</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {listing.amenities.map((amenity) => (
                    <div
                      key={amenity.name}
                      className="flex items-center gap-3 p-4 bg-(--color-bg-secondary) rounded-lg"
                    >
                      <div className="text-(--color-primary)">{amenity.icon}</div>
                      <span className="font-semibold text-(--color-text-primary)">{amenity.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Reviews */}
              <div className="glass rounded-xl p-6">
                <h2 className="text-xl font-bold text-(--color-text-primary) mb-4">Tenant Reviews</h2>
                <div className="space-y-4">
                  {listing.reviews.map((review, i) => (
                    <div key={i} className="pb-4 border-b border-(--color-border) last:border-0">
                      <div className="flex items-center justify-between mb-2">
                        <p className="font-semibold text-(--color-text-primary)">{review.author}</p>
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, j) => (
                            <span
                              key={j}
                              className={j < review.rating ? "text-(--color-warning)" : "text-(--color-border)"}
                            >
                              ★
                            </span>
                          ))}
                        </div>
                      </div>
                      <p className="text-(--color-text-secondary)">{review.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Landlord Card */}
              <div className="glass rounded-xl p-6">
                <h3 className="text-lg font-bold text-(--color-text-primary) mb-4">Landlord</h3>
                <div className="mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-(--color-primary) to-(--color-primary-light) flex items-center justify-center text-white font-bold text-2xl mb-3">
                    J
                  </div>
                  <p className="font-bold text-(--color-text-primary)">{listing.landlord.name}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-(--color-warning)">★ {listing.landlord.rating}</span>
                    <span className="text-(--color-text-secondary)">({listing.landlord.reviews} reviews)</span>
                  </div>
                  {listing.landlord.verified && (
                    <div className="flex items-center gap-1 mt-3 text-(--color-success)">
                      <Check size={16} />
                      <span className="text-sm font-semibold">Verified Landlord</span>
                    </div>
                  )}
                </div>
                <Link href={`/landlord-profile/${listing.landlord.id || "1"}`}>
                  <button className="w-full py-2 bg-(--color-bg-secondary) text-(--color-text-primary) rounded-lg hover:bg-(--color-border) font-semibold transition-colors mb-2">
                    View Profile
                  </button>
                </Link>
              </div>

              {/* Availability */}
              <div className="glass rounded-xl p-6">
                <h3 className="text-lg font-bold text-(--color-text-primary) mb-4">Availability</h3>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-(--color-success)"></div>
                  <span className="text-(--color-success) font-semibold">Available</span>
                </div>
                <p className="text-sm text-(--color-text-secondary)">Can move in from January 2025</p>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-3">
                <button
                  onClick={() => setShowRequestForm(true)}
                  className="w-full py-3 bg-(--color-primary) text-white rounded-lg hover:bg-(--color-primary-dark) font-semibold transition-colors"
                >
                  Request Viewing/Booking
                </button>
                <button className="w-full py-3 border-2 border-(--color-primary) text-(--color-primary) rounded-lg hover:bg-(--color-primary)/5 font-semibold inline-flex items-center justify-center gap-2 transition-colors">
                  <MessageCircle size={18} />
                  Contact Landlord
                </button>
              </div>

              {/* Map Placeholder */}
              <div className="glass rounded-xl overflow-hidden">
                <div className="h-64 bg-(--color-bg-tertiary) flex items-center justify-center">
                  <div className="text-center">
                    <MapPin size={32} className="mx-auto mb-2 text-(--color-primary)" />
                    <p className="text-(--color-text-secondary) text-sm">Location map preview</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Request Modal */}
          {showRequestForm && (
            <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
              <div className="glass rounded-2xl p-8 max-w-md w-full">
                <h2 className="text-2xl font-bold text-(--color-text-primary) mb-6">Request Viewing</h2>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-(--color-text-primary) mb-2">
                      Preferred Date
                    </label>
                    <input type="date" className="w-full px-4 py-2 border border-(--color-border) rounded-lg" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-(--color-text-primary) mb-2">Message</label>
                    <textarea
                      rows={4}
                      placeholder="Tell the landlord about yourself..."
                      className="w-full px-4 py-2 border border-(--color-border) rounded-lg resize-none"
                    />
                  </div>
                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={() => setShowRequestForm(false)}
                      className="flex-1 py-2 border border-(--color-border) text-(--color-text-primary) rounded-lg hover:bg-(--color-bg-secondary)"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex-1 py-2 bg-(--color-primary) text-white rounded-lg hover:bg-(--color-primary-dark) font-semibold"
                    >
                      Send Request
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
    </main>
  )
}
