import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ListingCard } from "@/components/listing-card"
import { ArrowRight, CheckCircle, MapPin, Lock } from "lucide-react"
import Link from "next/link"

export default function Home() {
  const featuredListings = [
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
  ]

  return (
    <main>
      <Navbar role="guest" />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-(--color-primary)/5 to-(--color-accent)/5 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-(--color-text-primary) mb-4 leading-tight">
                Find Your Perfect Off-Campus Home
              </h1>
              <p className="text-lg text-(--color-text-secondary) mb-8">
                Trusted student accommodation with verified landlords, secure payments, and transparent reviews.
              </p>

              {/* Search Bar */}
              <div className="glass rounded-xl p-2 flex flex-col sm:flex-row gap-2 mb-8">
                <input
                  type="text"
                  placeholder="Search location..."
                  className="flex-1 px-4 py-3 bg-transparent text-(--color-text-primary) placeholder-(--color-text-light) outline-none"
                />
                <input
                  type="number"
                  placeholder="Max price"
                  className="w-32 px-4 py-3 bg-transparent text-(--color-text-primary) placeholder-(--color-text-light) outline-none"
                />
                <button className="px-6 py-3 bg-(--color-primary) text-white rounded-lg hover:bg-(--color-primary-dark) font-semibold whitespace-nowrap">
                  Search
                </button>
              </div>

              <div className="flex gap-4">
                <Link
                  href="/student/listings"
                  className="px-6 py-3 bg-(--color-primary) text-white rounded-lg hover:bg-(--color-primary-dark) font-semibold inline-flex items-center gap-2"
                >
                  Browse Accommodation <ArrowRight size={18} />
                </Link>
                <Link
                  href="/register?role=landlord"
                  className="px-6 py-3 border-2 border-(--color-primary) text-(--color-primary) rounded-lg hover:bg-(--color-primary)/5 font-semibold inline-flex items-center gap-2"
                >
                  Register as Landlord
                </Link>
              </div>
            </div>

            <div className="relative h-96 hidden md:block bg-(--color-bg-tertiary) rounded-2xl overflow-hidden">
              <img
                src="/students-in-accommodation-happy.jpg"
                alt="Student accommodation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Listings */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-(--color-text-primary) mb-3">Featured Accommodations</h2>
            <p className="text-lg text-(--color-text-secondary)">
              Popular listings from verified landlords near campus
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {featuredListings.map((listing) => (
              <ListingCard key={listing.id} {...listing} />
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/student/listings"
              className="px-8 py-3 bg-(--color-primary) text-white rounded-lg hover:bg-(--color-primary-dark) font-semibold inline-flex items-center gap-2"
            >
              View All Listings <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="py-16 md:py-24 bg-(--color-bg-secondary)">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-(--color-text-primary) mb-12 text-center">
            Why Choose HomeHaven?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <MapPin size={32} className="text-(--color-primary)" />,
                title: "Distance-Based Recommendations",
                description: "Find accommodations based on proximity to campus with real walking times.",
              },
              {
                icon: <CheckCircle size={32} className="text-(--color-accent)" />,
                title: "Verified Landlords",
                description: "All landlords are vetted and verified to ensure your safety and peace of mind.",
              },
              {
                icon: <Lock size={32} className="text-(--color-primary)" />,
                title: "Secure Payments",
                description: "Protected transactions with Ecocash and Paynow integration for your security.",
              },
            ].map((feature, i) => (
              <div key={i} className="glass rounded-xl p-8 text-center">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-(--color-text-primary) mb-3">{feature.title}</h3>
                <p className="text-(--color-text-secondary)">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-(--color-primary) to-(--color-primary-light)">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Find Your Home?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of students who found their perfect off-campus accommodation on HomeHaven.
          </p>
          <Link
            href="/register"
            className="px-8 py-4 bg-white text-(--color-primary) rounded-lg hover:bg-(--color-bg-secondary) font-semibold inline-flex items-center gap-2 text-lg"
          >
            Get Started Now <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
