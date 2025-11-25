"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Mail, Lock, User, Eye, EyeOff } from "lucide-react"

export default function RegisterPage() {
  const searchParams = useSearchParams()
  const initialRole = (searchParams.get("role") || "student") as "student" | "landlord"

  const [role, setRole] = useState(initialRole)
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle registration logic here
  }

  return (
    <main>
      <Navbar role="guest" />

      <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-(--color-bg-secondary)">
        <div className="glass rounded-2xl p-8 md:p-12 w-full max-w-md">
          <div className="text-center mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-(--color-primary) to-(--color-primary-light) rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-xl">H</span>
            </div>
            <h1 className="text-3xl font-bold text-(--color-text-primary) mb-2">Join HomeHaven</h1>
            <p className="text-(--color-text-secondary)">Create your account today</p>
          </div>

          {/* Role Selection */}
          <div className="flex gap-3 mb-8">
            {(["student", "landlord"] as const).map((r) => (
              <button
                key={r}
                onClick={() => setRole(r)}
                className={`flex-1 py-3 rounded-lg font-semibold transition-colors ${
                  role === r
                    ? "bg-(--color-primary) text-white"
                    : "bg-(--color-bg-tertiary) text-(--color-text-secondary) hover:bg-(--color-border)"
                }`}
              >
                {r === "student" ? "Student" : "Landlord"}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-semibold text-(--color-text-primary) mb-2">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-3 text-(--color-text-light)" size={20} />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full pl-10 pr-4 py-3 border border-(--color-border) rounded-lg focus:outline-none focus:ring-2 focus:ring-(--color-primary)"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-(--color-text-primary) mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 text-(--color-text-light)" size={20} />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full pl-10 pr-4 py-3 border border-(--color-border) rounded-lg focus:outline-none focus:ring-2 focus:ring-(--color-primary)"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-semibold text-(--color-text-primary) mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 text-(--color-text-light)" size={20} />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-10 py-3 border border-(--color-border) rounded-lg focus:outline-none focus:ring-2 focus:ring-(--color-primary)"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-(--color-text-light)"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Terms */}
            <label className="flex items-start gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 rounded mt-1 accent-(--color-primary)" />
              <span className="text-sm text-(--color-text-secondary)">
                I agree to the Terms of Service and Privacy Policy
              </span>
            </label>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3 bg-(--color-primary) text-white rounded-lg hover:bg-(--color-primary-dark) font-semibold transition-colors mt-6"
            >
              Create Account
            </button>
          </form>

          {/* Login Link */}
          <p className="text-center text-(--color-text-secondary) mt-6">
            Already have an account?{" "}
            <Link href="/login" className="text-(--color-primary) font-semibold hover:text-(--color-primary-dark)">
              Sign In
            </Link>
          </p>
        </div>
      </div>

      <Footer />
    </main>
  )
}
