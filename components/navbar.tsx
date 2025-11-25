"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Navbar({ role = "guest" }: { role?: "guest" | "student" | "landlord" | "admin" }) {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = {
    guest: [
      { label: "Browse", href: "/student/listings" }, // Changed from #browse anchor to actual listings page
      { label: "Why Us", href: "#why-us" },
      { label: "Contact", href: "#contact" },
    ],
    student: [
      { label: "Dashboard", href: "/student/dashboard" },
      { label: "Browse", href: "/student/listings" },
      { label: "Saved", href: "/student/saved" },
    ],
    landlord: [
      { label: "Dashboard", href: "/landlord/dashboard" },
      { label: "My Listings", href: "/landlord/listings" },
      { label: "Bookings", href: "/landlord/bookings" },
    ],
    admin: [
      { label: "Dashboard", href: "/admin/dashboard" },
      { label: "Users", href: "/admin/users" },
      { label: "Properties", href: "/admin/properties" },
    ],
  }

  return (
    <nav className="glass sticky top-0 z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-(--color-primary) to-(--color-primary-light) rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">H</span>
            </div>
            <span className="font-bold text-lg text-(--color-text-primary) hidden sm:inline">HomeHaven</span>
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems[role].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-(--color-text-secondary) hover:text-(--color-text-primary) transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Auth buttons */}
          <div className="hidden md:flex items-center gap-3">
            {role === "guest" && (
              <>
                <Link
                  href="/login"
                  className="px-4 py-2 text-(--color-primary) hover:bg-(--color-primary)/5 rounded-lg transition-colors"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="px-4 py-2 bg-(--color-primary) text-white rounded-lg hover:bg-(--color-primary-dark) transition-colors"
                >
                  Register
                </Link>
              </>
            )}
            {role !== "guest" && (
              <button className="w-10 h-10 rounded-full bg-(--color-primary) text-white flex items-center justify-center font-semibold">
                U
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t">
            {navItems[role].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-2 text-(--color-text-secondary) hover:text-(--color-text-primary)"
              >
                {item.label}
              </Link>
            ))}
            {role === "guest" && (
              <div className="flex gap-2 px-4 py-2">
                <Link
                  href="/login"
                  className="flex-1 px-3 py-2 text-center text-(--color-primary) border border-(--color-primary) rounded-lg"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="flex-1 px-3 py-2 text-center bg-(--color-primary) text-white rounded-lg"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  )
}
