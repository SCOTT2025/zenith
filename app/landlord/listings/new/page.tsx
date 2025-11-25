"use client"

import type React from "react"

import { useState } from "react"
import { Upload, X } from "lucide-react"

export default function CreateListingPage() {
  const [formData, setFormData] = useState({
    title: "",
    address: "",
    price: "",
    roomType: "studio",
    maxOccupancy: "1",
    gender: "mixed",
    description: "",
  })

  const [amenities, setAmenities] = useState<string[]>([])
  const [images, setImages] = useState<string[]>([])

  const amenityOptions = ["WiFi", "Water Supply", "Transport Access", "Furnished", "Kitchen", "Laundry", "Garden"]
  const roomTypes = ["Studio", "1-Bedroom", "2-Bedroom", "3-Bedroom", "Bedsitter", "Shared Room"]

  const toggleAmenity = (amenity: string) => {
    setAmenities((prev) => (prev.includes(amenity) ? prev.filter((a) => a !== amenity) : [...prev, amenity]))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <main className="min-h-screen bg-(--color-bg-secondary) py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-(--color-text-primary) mb-2">Create New Listing</h1>
          <p className="text-lg text-(--color-text-secondary)">Fill in the details to list your property</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Basic Information */}
          <div className="glass rounded-xl p-8">
            <h2 className="text-2xl font-bold text-(--color-text-primary) mb-6">Basic Information</h2>
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-(--color-text-primary) mb-2">Property Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="e.g., Modern Studio with City View"
                  className="w-full px-4 py-3 border border-(--color-border) rounded-lg focus:outline-none focus:ring-2 focus:ring-(--color-primary)"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-(--color-text-primary) mb-2">Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="123 Main Street, Orange Groove"
                  className="w-full px-4 py-3 border border-(--color-border) rounded-lg focus:outline-none focus:ring-2 focus:ring-(--color-primary)"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-(--color-text-primary) mb-2">
                    Price per Month ($)
                  </label>
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    placeholder="250"
                    className="w-full px-4 py-3 border border-(--color-border) rounded-lg focus:outline-none focus:ring-2 focus:ring-(--color-primary)"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-(--color-text-primary) mb-2">Room Type</label>
                  <select
                    name="roomType"
                    value={formData.roomType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-(--color-border) rounded-lg focus:outline-none focus:ring-2 focus:ring-(--color-primary)"
                  >
                    {roomTypes.map((type) => (
                      <option key={type} value={type.toLowerCase()}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-(--color-text-primary) mb-2">Max Occupancy</label>
                  <select
                    name="maxOccupancy"
                    value={formData.maxOccupancy}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-(--color-border) rounded-lg focus:outline-none focus:ring-2 focus:ring-(--color-primary)"
                  >
                    {[1, 2, 3, 4, 5].map((num) => (
                      <option key={num} value={num}>
                        {num} person(s)
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-(--color-text-primary) mb-2">
                    Gender Preference
                  </label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-(--color-border) rounded-lg focus:outline-none focus:ring-2 focus:ring-(--color-primary)"
                  >
                    <option value="mixed">Mixed</option>
                    <option value="girls">Girls Only</option>
                    <option value="boys">Boys Only</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-(--color-text-primary) mb-2">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Describe your property in detail..."
                  className="w-full px-4 py-3 border border-(--color-border) rounded-lg focus:outline-none focus:ring-2 focus:ring-(--color-primary) resize-none"
                />
              </div>
            </div>
          </div>

          {/* Amenities */}
          <div className="glass rounded-xl p-8">
            <h2 className="text-2xl font-bold text-(--color-text-primary) mb-6">Amenities</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {amenityOptions.map((amenity) => (
                <label
                  key={amenity}
                  className="flex items-center gap-2 p-3 border-2 border-(--color-border) rounded-lg hover:border-(--color-primary) cursor-pointer transition-colors"
                  style={{ borderColor: amenities.includes(amenity) ? "var(--color-primary)" : "var(--color-border)" }}
                >
                  <input
                    type="checkbox"
                    checked={amenities.includes(amenity)}
                    onChange={() => toggleAmenity(amenity)}
                    className="w-4 h-4 rounded accent-(--color-primary)"
                  />
                  <span className="text-sm font-semibold text-(--color-text-primary)">{amenity}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Image Upload */}
          <div className="glass rounded-xl p-8">
            <h2 className="text-2xl font-bold text-(--color-text-primary) mb-6">Property Photos</h2>
            <div className="border-2 border-dashed border-(--color-border) rounded-lg p-8 text-center hover:border-(--color-primary) transition-colors cursor-pointer">
              <Upload size={32} className="mx-auto mb-3 text-(--color-text-light)" />
              <p className="text-(--color-text-primary) font-semibold mb-1">Click to upload or drag and drop</p>
              <p className="text-sm text-(--color-text-secondary)">PNG, JPG, GIF up to 10MB</p>
            </div>
            {images.length > 0 && (
              <div className="grid grid-cols-3 md:grid-cols-4 gap-4 mt-6">
                {images.map((image, i) => (
                  <div key={i} className="relative">
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`Upload ${i}`}
                      className="w-full h-24 object-cover rounded-lg"
                    />
                    <button className="absolute top-2 right-2 p-1 bg-(--color-error) text-white rounded-full hover:bg-(--color-error)/80">
                      <X size={16} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Location */}
          <div className="glass rounded-xl p-8">
            <h2 className="text-2xl font-bold text-(--color-text-primary) mb-6">Location</h2>
            <div className="h-64 bg-(--color-bg-tertiary) rounded-lg flex items-center justify-center mb-4">
              <p className="text-(--color-text-secondary)">Map pin-drop placeholder</p>
            </div>
            <p className="text-sm text-(--color-text-secondary)">Click on the map to set your property location</p>
          </div>

          {/* Submit Buttons */}
          <div className="flex gap-3 justify-end">
            <button
              type="button"
              className="px-6 py-3 border border-(--color-border) text-(--color-text-primary) rounded-lg hover:bg-(--color-bg-secondary) font-semibold transition-colors"
            >
              Save as Draft
            </button>
            <button
              type="submit"
              className="px-6 py-3 bg-(--color-primary) text-white rounded-lg hover:bg-(--color-primary-dark) font-semibold transition-colors"
            >
              Publish Listing
            </button>
          </div>
        </form>
      </div>
    </main>
  )
}
