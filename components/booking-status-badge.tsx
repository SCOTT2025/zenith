import { CheckCircle, Clock, XCircle } from "lucide-react"

interface BookingStatusBadgeProps {
  status: "pending" | "approved" | "rejected" | "completed"
}

export function BookingStatusBadge({ status }: BookingStatusBadgeProps) {
  const variants = {
    pending: {
      bg: "bg-(--color-warning)/10",
      text: "text-(--color-warning)",
      icon: Clock,
      label: "Pending",
    },
    approved: {
      bg: "bg-(--color-success)/10",
      text: "text-(--color-success)",
      icon: CheckCircle,
      label: "Approved",
    },
    rejected: {
      bg: "bg-(--color-error)/10",
      text: "text-(--color-error)",
      icon: XCircle,
      label: "Rejected",
    },
    completed: {
      bg: "bg-(--color-success)/10",
      text: "text-(--color-success)",
      icon: CheckCircle,
      label: "Completed",
    },
  }

  const variant = variants[status]
  const Icon = variant.icon

  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-semibold inline-flex items-center gap-1 ${variant.bg} ${variant.text}`}
    >
      <Icon size={14} />
      {variant.label}
    </span>
  )
}
