import type React from "react"
import { MapPin, Wifi, Droplet, Bus, Heart } from "lucide-react"
import Link from "next/link"

interface ListingCardProps {
  id: string
  title: string
  price: number
  image: string
  location: string
  distance: number
  amenities: string[]
  availability: "available" | "booked" | "few-left"
  isSaved?: boolean
}

export function ListingCard({
  id,
  title,
  price,
  image,
  location,
  distance,
  amenities,
  availability,
  isSaved = false,
}: ListingCardProps) {
  const amenityIcons: Record<string, React.ReactNode> = {
    WiFi: <Wifi size={16} />,
    Water: <Droplet size={16} />,
    Transport: <Bus size={16} />,
  }

  const availabilityColors = {
    available: "bg-(--color-success)/10 text-(--color-success)",
    booked: "bg-(--color-error)/10 text-(--color-error)",
    "few-left": "bg-(--color-warning)/10 text-(--color-warning)",
  }

  return (
    <div className="glass-sm rounded-xl overflow-hidden hover:shadow-lg cursor-pointer group">
      <div className="relative h-48 overflow-hidden bg-(--color-bg-tertiary)">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <button
          className={`absolute top-3 right-3 p-2 rounded-full ${isSaved ? "bg-(--color-error) text-white" : "bg-white/80 text-(--color-text-primary)"}`}
        >
          <Heart size={18} fill={isSaved ? "currentColor" : "none"} />
        </button>
        <div
          className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold ${availabilityColors[availability]}`}
        >
          {availability === "available" && "Available"}
          {availability === "booked" && "Fully Booked"}
          {availability === "few-left" && "Few Left"}
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-(--color-text-primary) line-clamp-2">{title}</h3>
          <span className="text-lg font-bold text-(--color-primary) whitespace-nowrap ml-2">
            ${price}
            <span className="text-sm text-(--color-text-secondary) font-normal">/mo</span>
          </span>
        </div>

        <div className="flex items-center gap-1 text-(--color-text-secondary) text-sm mb-3">
          <MapPin size={16} />
          <span>{location}</span>
          <span className="ml-auto">{distance}km from campus</span>
        </div>

        <div className="flex gap-2 flex-wrap mb-4">
          {amenities.map((amenity) => (
            <div
              key={amenity}
              className="flex items-center gap-1 bg-(--color-bg-tertiary) px-2 py-1 rounded-md text-xs text-(--color-text-secondary)"
            >
              {amenityIcons[amenity] || <span>{amenity}</span>}
              <span>{amenity}</span>
            </div>
          ))}
        </div>

        <Link href={`/student/listings/${id}`}>
          <button className="w-full py-2 bg-(--color-primary) text-white rounded-lg hover:bg-(--color-primary-dark) font-semibold text-sm transition-colors">
            View Details
          </button>
        </Link>
      </div>
    </div>
  )
}
