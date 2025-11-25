"use client"

import { CheckCircle, XCircle, Clock } from "lucide-react"

export default function BookingsPage() {
  const bookings = [
    {
      id: "1",
      student: "Sarah Johnson",
      property: "Studio - Orange Groove",
      requestDate: "2024-12-20",
      preferredDate: "2025-01-15",
      status: "pending",
      message: "Very interested in viewing the property. Can come any day next week.",
    },
    {
      id: "2",
      student: "James Martinez",
      property: "2-Bed House - Rujeko",
      requestDate: "2024-12-19",
      preferredDate: "2025-01-10",
      status: "approved",
      message: "Please confirm the viewing time at 2 PM on Friday.",
    },
    {
      id: "3",
      student: "Emma Davis",
      property: "Bedsitter - Coldstream",
      requestDate: "2024-12-18",
      preferredDate: "2025-01-08",
      status: "rejected",
      message: "Not available for that time frame. Looking for something closer to campus.",
    },
  ]

  return (
    <main className="min-h-screen bg-(--color-bg-secondary) py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-(--color-text-primary) mb-2">Booking Requests</h1>
          <p className="text-lg text-(--color-text-secondary)">Manage student viewing and booking requests</p>
        </div>

        {/* Booking Cards */}
        <div className="space-y-6">
          {bookings.map((booking) => (
            <div key={booking.id} className="glass rounded-xl p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-(--color-text-primary)">{booking.student}</h3>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold inline-flex items-center gap-1 ${
                        booking.status === "pending"
                          ? "bg-(--color-warning)/10 text-(--color-warning)"
                          : booking.status === "approved"
                            ? "bg-(--color-success)/10 text-(--color-success)"
                            : "bg-(--color-error)/10 text-(--color-error)"
                      }`}
                    >
                      {booking.status === "pending" && <Clock size={14} />}
                      {booking.status === "approved" && <CheckCircle size={14} />}
                      {booking.status === "rejected" && <XCircle size={14} />}
                      {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                    </span>
                  </div>
                  <p className="text-(--color-text-secondary) mb-3">{booking.property}</p>
                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <p className="text-xs text-(--color-text-light) mb-1">Request Date</p>
                      <p className="font-semibold text-(--color-text-primary)">{booking.requestDate}</p>
                    </div>
                    <div>
                      <p className="text-xs text-(--color-text-light) mb-1">Preferred Date</p>
                      <p className="font-semibold text-(--color-text-primary)">{booking.preferredDate}</p>
                    </div>
                    <div>
                      <p className="text-xs text-(--color-text-light) mb-1">Message</p>
                      <p className="text-sm text-(--color-text-secondary)">{booking.message}</p>
                    </div>
                  </div>
                </div>
              </div>

              {booking.status === "pending" && (
                <div className="flex gap-3">
                  <button className="px-4 py-2 bg-(--color-success) text-white rounded-lg hover:bg-(--color-success)/80 font-semibold transition-colors">
                    Approve
                  </button>
                  <button className="px-4 py-2 bg-(--color-error) text-white rounded-lg hover:bg-(--color-error)/80 font-semibold transition-colors">
                    Reject
                  </button>
                  <button className="px-4 py-2 border border-(--color-border) text-(--color-text-primary) rounded-lg hover:bg-(--color-bg-secondary) font-semibold transition-colors">
                    Message Student
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
