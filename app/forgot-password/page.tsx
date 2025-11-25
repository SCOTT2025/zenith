"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Mail, ArrowLeft } from "lucide-react"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main>
      <Navbar role="guest" />

      <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-(--color-bg-secondary)">
        <div className="glass rounded-2xl p-8 md:p-12 w-full max-w-md">
          {!submitted ? (
            <>
              <div className="text-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-(--color-primary) to-(--color-primary-light) rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">H</span>
                </div>
                <h1 className="text-3xl font-bold text-(--color-text-primary) mb-2">Forgot Password?</h1>
                <p className="text-(--color-text-secondary)">No worries, we'll help you reset it</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-(--color-text-primary) mb-2">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 text-(--color-text-light)" size={20} />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="w-full pl-10 pr-4 py-3 border border-(--color-border) rounded-lg focus:outline-none focus:ring-2 focus:ring-(--color-primary)"
                    />
                  </div>
                  <p className="text-xs text-(--color-text-light) mt-2">We'll send you a link to reset your password</p>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-(--color-primary) text-white rounded-lg hover:bg-(--color-primary-dark) font-semibold transition-colors mt-6"
                >
                  Send Reset Link
                </button>
              </form>

              <Link
                href="/login"
                className="flex items-center justify-center gap-2 text-(--color-primary) hover:text-(--color-primary-dark) font-semibold mt-4"
              >
                <ArrowLeft size={18} />
                Back to Login
              </Link>
            </>
          ) : (
            <div className="text-center py-8">
              <div className="w-12 h-12 bg-(--color-success)/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✓</span>
              </div>
              <h2 className="text-2xl font-bold text-(--color-text-primary) mb-2">Check Your Email</h2>
              <p className="text-(--color-text-secondary) mb-6">We've sent a password reset link to {email}</p>
              <p className="text-sm text-(--color-text-light) mb-6">
                If you don't see the email, check your spam folder
              </p>
              <Link
                href="/login"
                className="px-6 py-3 bg-(--color-primary) text-white rounded-lg hover:bg-(--color-primary-dark) font-semibold inline-block transition-colors"
              >
                Return to Login
              </Link>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </main>
  )
}
