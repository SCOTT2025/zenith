import type React from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function StudentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <Navbar role="student" />
      {children}
      <Footer />
    </div>
  )
}
