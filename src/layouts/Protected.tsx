// src/layouts/ProtectedLayout.tsx
import { Navigate, Outlet } from "react-router"

export default function ProtectedLayout() {
  const token = localStorage.getItem("token") // contoh sederhana

  if (!token) {
    return <Navigate to="/login" replace />
  }

  return <Outlet />
}
