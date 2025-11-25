"use client"

import { useState } from "react"
import { CheckCircle, XCircle, Eye } from "lucide-react"

const properties = [
  {
    id: "1",
    title: "Modern Studio with City View",
    landlord: "John Smith",
    location: "Orange Groove",
    price: 250,
    status: "approved",
    submittedDate: "2024-12-18",
  },
  {
    id: "2",
    title: "Luxury Bedsitter - Premium",
    landlord: "Maria's Properties",
    location: "Coldstream",
    price: 350,
    status: "pending",
    submittedDate: "2024-12-20",
  },
  {
    id: "3",
    title: "Cozy 2-Bedroom House",
    landlord: "David Chen",
    location: "Rujeko",
    price: 400,
    status: "rejected",
    submittedDate: "2024-12-15",
  },
  {
    id: "4",
    title: "Shared Apartment Near Campus",
    landlord: "Jane Doe Properties",
    location: "Toron",
    price: 180,
    status: "approved",
    submittedDate: "2024-12-10",
  },
]

export default function PropertiesPage() {
  const [propertiesList] = useState(properties)

  return (
    <main className="min-h-screen bg-(--color-bg-secondary) py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-(--color-text-primary) mb-2">Property Management</h1>
          <p className="text-lg text-(--color-text-secondary)">Review and manage accommodation listings</p>
        </div>

        {/* Properties Table */}
        <div className="glass rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-(--color-bg-tertiary) border-b border-(--color-border)">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-(--color-text-primary)">Property</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-(--color-text-primary)">Landlord</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-(--color-text-primary)">Location</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-(--color-text-primary)">Price</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-(--color-text-primary)">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-(--color-text-primary)">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-(--color-border)">
                {propertiesList.map((property) => (
                  <tr key={property.id} className="hover:bg-(--color-bg-secondary) transition-colors">
                    <td className="px-6 py-4">
                      <p className="font-semibold text-(--color-text-primary)">{property.title}</p>
                      <p className="text-xs text-(--color-text-light)">Submitted {property.submittedDate}</p>
                    </td>
                    <td className="px-6 py-4 text-(--color-text-secondary)">{property.landlord}</td>
                    <td className="px-6 py-4 text-(--color-text-secondary)">{property.location}</td>
                    <td className="px-6 py-4 font-semibold text-(--color-text-primary)">${property.price}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 text-xs font-semibold rounded-full ${
                          property.status === "approved"
                            ? "bg-(--color-success)/10 text-(--color-success)"
                            : property.status === "pending"
                              ? "bg-(--color-warning)/10 text-(--color-warning)"
                              : "bg-(--color-error)/10 text-(--color-error)"
                        }`}
                      >
                        {property.status.charAt(0).toUpperCase() + property.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <button className="p-2 text-(--color-text-secondary) hover:text-(--color-primary) transition-colors">
                          <Eye size={18} />
                        </button>
                        {property.status === "pending" && (
                          <>
                            <button className="p-2 text-(--color-text-secondary) hover:text-(--color-success) transition-colors">
                              <CheckCircle size={18} />
                            </button>
                            <button className="p-2 text-(--color-text-secondary) hover:text-(--color-error) transition-colors">
                              <XCircle size={18} />
                            </button>
                          </>
                        )}
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
