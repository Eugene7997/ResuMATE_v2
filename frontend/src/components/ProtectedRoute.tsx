import type React from "react"
import { Navigate, useLocation } from "react-router-dom"
import { useAuthStore } from "../lib/stores/authStore"
import type { ProtectedRouteProps } from "@lib/types/types"

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, redirectTo = "/sign-in" }) => {
  const { isAuthenticated, isLoading } = useAuthStore()
  const location = useLocation()

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="route-spinner"></div>
        <p>Loading...</p>
      </div>
    )
  }

  if (!isAuthenticated) {
    return <Navigate to={redirectTo} state={{ from: location }} replace />
  }

  return <>{children}</>
}

export default ProtectedRoute
