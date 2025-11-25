"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Mail, Lock, Eye, EyeOff } from "lucide-react"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({ email: "", password: "" })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic here
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
            <h1 className="text-3xl font-bold text-(--color-text-primary) mb-2">Welcome Back</h1>
            <p className="text-(--color-text-secondary)">Sign in to your HomeHaven account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
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
                  className="w-full pl-10 pr-4 py-3 border border-(--color-border) rounded-lg focus:outline-none focus:ring-2 focus:ring-(--color-primary) focus:border-transparent"
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
                  className="w-full pl-10 pr-10 py-3 border border-(--color-border) rounded-lg focus:outline-none focus:ring-2 focus:ring-(--color-primary) focus:border-transparent"
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

            {/* Remember & Forgot */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded accent-(--color-primary)" />
                <span className="text-sm text-(--color-text-secondary)">Remember me</span>
              </label>
              <Link
                href="/forgot-password"
                className="text-sm text-(--color-primary) hover:text-(--color-primary-dark)"
              >
                Forgot Password?
              </Link>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3 bg-(--color-primary) text-white rounded-lg hover:bg-(--color-primary-dark) font-semibold transition-colors mt-6"
            >
              Sign In
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center gap-3">
            <div className="flex-1 h-px bg-(--color-border)"></div>
            <span className="text-(--color-text-light) text-sm">or</span>
            <div className="flex-1 h-px bg-(--color-border)"></div>
          </div>

          {/* Register Link */}
          <p className="text-center text-(--color-text-secondary)">
            Don't have an account?{" "}
            <Link href="/register" className="text-(--color-primary) font-semibold hover:text-(--color-primary-dark)">
              Sign Up
            </Link>
          </p>
        </div>
      </div>

      <Footer />
    </main>
  )
}
