import type React from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function LandlordLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <Navbar role="landlord" />
      {children}
      <Footer />
    </div>
  )
}
