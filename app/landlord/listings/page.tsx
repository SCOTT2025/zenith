"use client"

import { useState } from "react"
import { Edit, Trash2, Eye, Plus } from "lucide-react"
import Link from "next/link"

const listings = [
  {
    id: "1",
    title: "Modern Studio with City View",
    location: "Orange Groove",
    price: 250,
    status: "active",
    bookings: 8,
    image: "/modern-studio-apartment.png",
  },
  {
    id: "2",
    title: "Cozy 2-Bedroom House",
    location: "Rujeko",
    price: 400,
    status: "active",
    bookings: 12,
    image: "/cozy-bedroom-house.jpg",
  },
  {
    id: "3",
    title: "Luxury Bedsitter - Premium",
    location: "Coldstream",
    price: 350,
    status: "inactive",
    bookings: 0,
    image: "/luxury-bedsitter.jpg",
  },
  {
    id: "4",
    title: "Shared Apartment Near Campus",
    location: "Toron",
    price: 180,
    status: "active",
    bookings: 5,
    image: "/shared-apartment-campus.jpg",
  },
]

export default function ManageListingsPage() {
  const [listingsData] = useState(listings)

  return (
    <main className="min-h-screen bg-(--color-bg-secondary) py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-(--color-text-primary) mb-2">Manage Listings</h1>
            <p className="text-lg text-(--color-text-secondary)">{listingsData.length} properties total</p>
          </div>
          <Link
            href="/landlord/listings/new"
            className="px-6 py-3 bg-(--color-primary) text-white rounded-lg hover:bg-(--color-primary-dark) font-semibold inline-flex items-center gap-2 transition-colors"
          >
            <Plus size={20} />
            Add New Property
          </Link>
        </div>

        {/* Listings Table */}
        <div className="glass rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-(--color-bg-tertiary) border-b border-(--color-border)">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-(--color-text-primary)">Property</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-(--color-text-primary)">Location</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-(--color-text-primary)">Price</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-(--color-text-primary)">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-(--color-text-primary)">Bookings</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-(--color-text-primary)">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-(--color-border)">
                {listingsData.map((listing) => (
                  <tr key={listing.id} className="hover:bg-(--color-bg-secondary) transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={listing.image || "/placeholder.svg"}
                          alt={listing.title}
                          className="w-12 h-12 rounded object-cover"
                        />
                        <div>
                          <p className="font-semibold text-(--color-text-primary)">{listing.title}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-(--color-text-secondary)">{listing.location}</td>
                    <td className="px-6 py-4 font-semibold text-(--color-text-primary)">${listing.price}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          listing.status === "active"
                            ? "bg-(--color-success)/10 text-(--color-success)"
                            : "bg-(--color-error)/10 text-(--color-error)"
                        }`}
                      >
                        {listing.status === "active" ? "Active" : "Inactive"}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-(--color-text-secondary)">{listing.bookings}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <button className="p-2 text-(--color-text-secondary) hover:text-(--color-primary) transition-colors">
                          <Eye size={18} />
                        </button>
                        <button className="p-2 text-(--color-text-secondary) hover:text-(--color-primary) transition-colors">
                          <Edit size={18} />
                        </button>
                        <button className="p-2 text-(--color-text-secondary) hover:text-(--color-error) transition-colors">
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  )
}
