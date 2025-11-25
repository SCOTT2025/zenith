"use client"

import { Check } from "lucide-react"

export default function SubscriptionPage() {
  return (
    <main className="min-h-screen bg-(--color-bg-secondary) py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-(--color-text-primary) mb-3">Subscription Plans</h1>
          <p className="text-lg text-(--color-text-secondary) max-w-2xl mx-auto">
            Choose the perfect plan to grow your property rental business
          </p>
        </div>

        {/* Current Subscription */}
        <div className="glass rounded-xl p-6 mb-12 bg-gradient-to-r from-(--color-primary)/10 to-(--color-accent)/10">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-(--color-text-secondary) mb-1">Current Plan</p>
              <h2 className="text-2xl font-bold text-(--color-text-primary)">Premium Plan</h2>
              <p className="text-(--color-text-secondary) mt-2">Renews on January 15, 2025</p>
            </div>
            <button className="px-6 py-3 bg-(--color-primary) text-white rounded-lg hover:bg-(--color-primary-dark) font-semibold transition-colors">
              Manage Plan
            </button>
          </div>
        </div>

        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            {
              name: "Basic",
              price: "$9.99",
              period: "/month",
              description: "Get started listing your properties",
              features: ["Up to 3 active listings", "Basic analytics", "Email support", "Standard visibility"],
            },
            {
              name: "Professional",
              price: "$19.99",
              period: "/month",
              description: "Grow your rental business",
              features: [
                "Up to 10 active listings",
                "Advanced analytics",
                "Priority email support",
                "Enhanced visibility",
                "Featured listings",
              ],
              popular: true,
            },
            {
              name: "Premium",
              price: "$39.99",
              period: "/month",
              description: "Maximize your property revenue",
              features: [
                "Unlimited listings",
                "Full analytics dashboard",
                "24/7 phone support",
                "Top-tier visibility",
                "Featured & promoted listings",
              ],
            },
          ].map((plan, i) => (
            <div
              key={i}
              className={`rounded-xl border-2 p-8 transition-all ${
                plan.popular ? "glass border-(--color-primary) shadow-lg" : "glass border-(--color-border)"
              }`}
            >
              {plan.popular && (
                <div className="inline-block px-3 py-1 bg-(--color-primary) text-white text-xs font-bold rounded-full mb-4">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-(--color-text-primary) mb-2">{plan.name}</h3>
              <p className="text-(--color-text-secondary) text-sm mb-4">{plan.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-(--color-primary)">{plan.price}</span>
                <span className="text-(--color-text-secondary)">{plan.period}</span>
              </div>
              <button
                className={`w-full py-3 rounded-lg font-semibold mb-6 transition-colors ${
                  plan.popular
                    ? "bg-(--color-primary) text-white hover:bg-(--color-primary-dark)"
                    : "bg-(--color-bg-secondary) text-(--color-primary) border border-(--color-border) hover:bg-(--color-border)"
                }`}
              >
                {plan.popular ? "Current Plan" : "Choose Plan"}
              </button>
              <div className="space-y-3">
                {plan.features.map((feature, j) => (
                  <div key={j} className="flex items-center gap-3">
                    <Check size={18} className="text-(--color-success) flex-shrink-0" />
                    <span className="text-(--color-text-secondary) text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Payment Methods */}
        <div className="glass rounded-xl p-8">
          <h2 className="text-2xl font-bold text-(--color-text-primary) mb-6">Payment Methods</h2>
          <div className="space-y-3">
            {[
              { method: "Ecocash", icon: "📱", description: "Mobile money wallet" },
              { method: "Paynow", icon: "💳", description: "Digital payment platform" },
            ].map((payment, i) => (
              <label
                key={i}
                className="flex items-center gap-4 p-4 border-2 border-(--color-border) rounded-lg hover:border-(--color-primary) cursor-pointer transition-colors"
              >
                <input type="radio" name="payment" className="w-4 h-4 accent-(--color-primary)" />
                <span className="text-2xl">{payment.icon}</span>
                <div>
                  <p className="font-semibold text-(--color-text-primary)">{payment.method}</p>
                  <p className="text-sm text-(--color-text-secondary)">{payment.description}</p>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Billing History */}
        <div className="glass rounded-xl p-8 mt-8">
          <h2 className="text-2xl font-bold text-(--color-text-primary) mb-6">Billing History</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-(--color-border)">
                  <th className="px-4 py-3 text-left text-sm font-semibold text-(--color-text-primary)">Date</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-(--color-text-primary)">Plan</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-(--color-text-primary)">Amount</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-(--color-text-primary)">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-(--color-border)">
                {[
                  { date: "Dec 15, 2024", plan: "Premium Plan", amount: "$39.99", status: "Paid" },
                  { date: "Nov 15, 2024", plan: "Premium Plan", amount: "$39.99", status: "Paid" },
                  { date: "Oct 15, 2024", plan: "Professional Plan", amount: "$19.99", status: "Paid" },
                ].map((invoice, i) => (
                  <tr key={i} className="hover:bg-(--color-bg-secondary)">
                    <td className="px-4 py-3 text-(--color-text-primary)">{invoice.date}</td>
                    <td className="px-4 py-3 text-(--color-text-secondary)">{invoice.plan}</td>
                    <td className="px-4 py-3 font-semibold text-(--color-text-primary)">{invoice.amount}</td>
                    <td className="px-4 py-3">
                      <span className="px-3 py-1 bg-(--color-success)/10 text-(--color-success) text-xs font-semibold rounded-full">
                        {invoice.status}
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
