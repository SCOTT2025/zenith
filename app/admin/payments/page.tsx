"use client"

import { useState } from "react"

const payments = [
  {
    id: "1",
    landlord: "John Smith",
    plan: "Premium Plan",
    amount: "$39.99",
    date: "2024-12-20",
    method: "Ecocash",
    status: "completed",
  },
  {
    id: "2",
    landlord: "Maria Garcia Properties",
    plan: "Professional Plan",
    amount: "$19.99",
    date: "2024-12-19",
    method: "Paynow",
    status: "completed",
  },
  {
    id: "3",
    landlord: "David Chen",
    plan: "Basic Plan",
    amount: "$9.99",
    date: "2024-12-18",
    method: "Ecocash",
    status: "completed",
  },
  {
    id: "4",
    landlord: "Jane Doe Properties",
    plan: "Premium Plan",
    amount: "$39.99",
    date: "2024-12-17",
    method: "Paynow",
    status: "pending",
  },
]

export default function PaymentsPage() {
  const [paymentsList] = useState(payments)
  const totalRevenue = paymentsList
    .filter((p) => p.status === "completed")
    .reduce((sum, p) => sum + Number.parseFloat(p.amount.substring(1)), 0)

  return (
    <main className="min-h-screen bg-(--color-bg-secondary) py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-(--color-text-primary) mb-2">Payment Management</h1>
          <p className="text-lg text-(--color-text-secondary)">Track all subscription payments</p>
        </div>

        {/* Revenue Summary */}
        <div className="glass rounded-xl p-6 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-(--color-text-secondary) font-medium mb-2">Total Revenue (This Month)</p>
              <p className="text-4xl font-bold text-(--color-text-primary)">${totalRevenue.toFixed(2)}</p>
            </div>
            <div className="text-right">
              <p className="text-(--color-text-secondary) font-medium mb-2">Completed Payments</p>
              <p className="text-3xl font-bold text-(--color-success)">
                {paymentsList.filter((p) => p.status === "completed").length}
              </p>
            </div>
          </div>
        </div>

        {/* Payments Table */}
        <div className="glass rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-(--color-bg-tertiary) border-b border-(--color-border)">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-(--color-text-primary)">Landlord</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-(--color-text-primary)">Plan</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-(--color-text-primary)">Amount</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-(--color-text-primary)">Date</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-(--color-text-primary)">Method</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-(--color-text-primary)">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-(--color-border)">
                {paymentsList.map((payment) => (
                  <tr key={payment.id} className="hover:bg-(--color-bg-secondary) transition-colors">
                    <td className="px-6 py-4 font-semibold text-(--color-text-primary)">{payment.landlord}</td>
                    <td className="px-6 py-4 text-(--color-text-secondary)">{payment.plan}</td>
                    <td className="px-6 py-4 font-bold text-(--color-text-primary)">{payment.amount}</td>
                    <td className="px-6 py-4 text-(--color-text-secondary)">{payment.date}</td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 bg-(--color-bg-tertiary) text-(--color-text-primary) text-xs font-semibold rounded-full">
                        {payment.method}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 text-xs font-semibold rounded-full ${
                          payment.status === "completed"
                            ? "bg-(--color-success)/10 text-(--color-success)"
                            : "bg-(--color-warning)/10 text-(--color-warning)"
                        }`}
                      >
                        {payment.status.charAt(0).toUpperCase() + payment.status.slice(1)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  )
}
