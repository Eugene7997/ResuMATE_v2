import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "@pages/HomePage"
import SignInPage from "@pages/SignInPage"
import ProfilePage from "@pages/ProfilePage"
import SettingsPage from "@pages/SettingsPage"
import ProtectedRoute from "@components/ProtectedRoute"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/profile" element={
          // <ProtectedRoute>
            <ProfilePage />
          // </ProtectedRoute>
        } />
        <Route path="/settings" element={
          // <ProtectedRoute>
            <SettingsPage />
          // </ProtectedRoute>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
