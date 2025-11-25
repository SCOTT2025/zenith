"use client"

import { useState } from "react"
import { Star, MapPin, Phone, Mail, Check } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function LandlordProfilePage({ params }: { params: { id: string } }) {
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" })

  const landlord = {
    id: params.id,
    name: "Mr. Johnson",
    rating: 4.8,
    reviewCount: 24,
    verified: true,
    joinDate: "March 2022",
    responseTime: "< 2 hours",
    responseRate: "98%",
    properties: 12,
    bio: "Professional property manager with over 10 years of experience in residential rentals. I pride myself on maintaining excellent properties and providing responsive tenant support.",
    avatar: "J",
    contact: {
      phone: "+263 784 123 456",
      email: "johnson@property.co.zw",
    },
    reviews: [
      {
        author: "Sarah M.",
        date: "2 weeks ago",
        rating: 5,
        text: "Excellent landlord! Very responsive and the property is well-maintained. Would definitely rent again.",
      },
      {
        author: "James K.",
        date: "1 month ago",
        rating: 5,
        text: "Great communication throughout the rental process. Highly recommended!",
      },
      {
        author: "Emily T.",
        date: "2 months ago",
        rating: 4,
        text: "Good property and landlord. Minor maintenance issues were resolved quickly.",
      },
    ],
    propertyListings: [
      { id: 1, title: "Modern Studio with City View", price: 250, location: "Orange Groove" },
      { id: 2, title: "Cozy Bedsitter", price: 180, location: "Southerton" },
      { id: 3, title: "Luxury 2-Bedroom", price: 350, location: "Avondale" },
    ],
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-(--color-bg-secondary) py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="glass rounded-2xl p-8 mb-8">
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-(--color-primary) to-(--color-primary-light) flex items-center justify-center text-white font-bold text-4xl flex-shrink-0">
                {landlord.avatar}
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h1 className="text-3xl font-bold text-(--color-text-primary)">{landlord.name}</h1>
                    {landlord.verified && (
                      <div className="flex items-center gap-1 text-(--color-success) mt-2">
                        <Check size={18} />
                        <span className="font-semibold">Verified Landlord</span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex flex-wrap gap-4 text-(--color-text-secondary) mb-4">
                  <div className="flex items-center gap-1">
                    <Star size={18} className="text-(--color-warning)" fill="currentColor" />
                    <span className="font-semibold">{landlord.rating}</span>
                    <span>({landlord.reviewCount} reviews)</span>
                  </div>
                  <span>•</span>
                  <span>Joined {landlord.joinDate}</span>
                  <span>•</span>
                  <span>{landlord.properties} properties</span>
                </div>
                <p className="text-(--color-text-secondary) mb-4">{landlord.bio}</p>
                <div className="flex flex-wrap gap-6 text-sm">
                  <div>
                    <p className="text-(--color-text-secondary) mb-1">Response Time</p>
                    <p className="font-bold text-(--color-text-primary)">{landlord.responseTime}</p>
                  </div>
                  <div>
                    <p className="text-(--color-text-secondary) mb-1">Response Rate</p>
                    <p className="font-bold text-(--color-text-primary)">{landlord.responseRate}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Reviews */}
              <div className="glass rounded-2xl p-6">
                <h2 className="text-2xl font-bold text-(--color-text-primary) mb-6">Tenant Reviews</h2>
                <div className="space-y-6">
                  {landlord.reviews.map((review, i) => (
                    <div key={i} className="pb-6 border-b border-(--color-border) last:border-0">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <p className="font-bold text-(--color-text-primary)">{review.author}</p>
                          <p className="text-sm text-(--color-text-secondary)">{review.date}</p>
                        </div>
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

              {/* Properties */}
              <div className="glass rounded-2xl p-6">
                <h2 className="text-2xl font-bold text-(--color-text-primary) mb-6">Other Properties</h2>
                <div className="space-y-4">
                  {landlord.propertyListings.map((prop) => (
                    <div
                      key={prop.id}
                      className="p-4 bg-(--color-bg-secondary) rounded-lg hover:bg-(--color-border) transition-colors cursor-pointer"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <p className="font-bold text-(--color-text-primary)">{prop.title}</p>
                          <div className="flex items-center gap-2 text-(--color-text-secondary) text-sm mt-1">
                            <MapPin size={16} />
                            <span>{prop.location}</span>
                          </div>
                        </div>
                        <p className="font-bold text-(--color-primary) text-lg">${prop.price}/mo</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Contact Card */}
              <div className="glass rounded-2xl p-6">
                <h3 className="text-lg font-bold text-(--color-text-primary) mb-4">Contact Information</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3">
                    <Phone size={20} className="text-(--color-primary)" />
                    <div>
                      <p className="text-sm text-(--color-text-secondary)">Phone</p>
                      <p className="font-semibold text-(--color-text-primary)">{landlord.contact.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail size={20} className="text-(--color-primary)" />
                    <div>
                      <p className="text-sm text-(--color-text-secondary)">Email</p>
                      <p className="font-semibold text-(--color-text-primary)">{landlord.contact.email}</p>
                    </div>
                  </div>
                </div>
                <button className="w-full py-2 bg-(--color-primary) text-white rounded-lg hover:bg-(--color-primary-dark) font-semibold transition-colors mb-2">
                  Send Message
                </button>
              </div>

              {/* Stats */}
              <div className="glass rounded-2xl p-6">
                <h3 className="text-lg font-bold text-(--color-text-primary) mb-4">Stats</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-(--color-text-secondary)">Active Properties</span>
                    <span className="font-bold text-(--color-primary)">{landlord.properties}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-(--color-text-secondary)">Total Reviews</span>
                    <span className="font-bold text-(--color-primary)">{landlord.reviewCount}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-(--color-text-secondary)">Rating</span>
                    <span className="font-bold text-(--color-warning)">{landlord.rating}/5</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
