"use client"

import { useState } from "react"
import { Shield, Ban } from "lucide-react"

const users = [
  {
    id: "1",
    name: "Sarah Johnson",
    email: "sarah@email.com",
    role: "Student",
    status: "active",
    joinDate: "2024-11-15",
  },
  { id: "2", name: "John Smith", email: "john@email.com", role: "Landlord", status: "active", joinDate: "2024-10-22" },
  {
    id: "3",
    name: "Maria Garcia",
    email: "maria@email.com",
    role: "Student",
    status: "active",
    joinDate: "2024-12-01",
  },
  {
    id: "4",
    name: "David Chen",
    email: "david@email.com",
    role: "Landlord",
    status: "suspended",
    joinDate: "2024-09-10",
  },
  { id: "5", name: "Emma Davis", email: "emma@email.com", role: "Student", status: "active", joinDate: "2024-11-28" },
]

export default function UsersPage() {
  const [usersList] = useState(users)

  return (
    <main className="min-h-screen bg-(--color-bg-secondary) py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-(--color-text-primary) mb-2">User Management</h1>
          <p className="text-lg text-(--color-text-secondary)">Manage students, landlords, and permissions</p>
        </div>

        {/* Users Table */}
        <div className="glass rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-(--color-bg-tertiary) border-b border-(--color-border)">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-(--color-text-primary)">Name</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-(--color-text-primary)">Email</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-(--color-text-primary)">Role</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-(--color-text-primary)">Join Date</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-(--color-text-primary)">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-(--color-text-primary)">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-(--color-border)">
                {usersList.map((user) => (
                  <tr key={user.id} className="hover:bg-(--color-bg-secondary) transition-colors">
                    <td className="px-6 py-4 font-semibold text-(--color-text-primary)">{user.name}</td>
                    <td className="px-6 py-4 text-(--color-text-secondary)">{user.email}</td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 bg-(--color-primary)/10 text-(--color-primary) text-xs font-semibold rounded-full">
                        {user.role}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-(--color-text-secondary)">{user.joinDate}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 text-xs font-semibold rounded-full ${
                          user.status === "active"
                            ? "bg-(--color-success)/10 text-(--color-success)"
                            : "bg-(--color-error)/10 text-(--color-error)"
                        }`}
                      >
                        {user.status === "active" ? "Active" : "Suspended"}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <button
                          className="p-2 text-(--color-text-secondary) hover:text-(--color-primary) transition-colors"
                          title="View details"
                        >
                          <Shield size={18} />
                        </button>
                        <button
                          className="p-2 text-(--color-text-secondary) hover:text-(--color-error) transition-colors"
                          title="Suspend user"
                        >
                          <Ban size={18} />
                        </button>
                      </div>
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
