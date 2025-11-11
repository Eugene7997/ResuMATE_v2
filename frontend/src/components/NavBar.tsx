import { Link } from "react-router"
import Logo from "@components/Logo"
import Avatar from "@components/Avatar"
import avatarPlaceholder from "../assets/avatar_placeholder.png"

const NavBar = () => {
  return (
    <div className="flex p-6 w-full justify-between items-center">
      <Logo />
      <div className="flex items-center gap-6">
        <Link to="/" className="text-2xl text-primary-500 font-semibold">Resume Tailor</Link>
        <Link to="/" className="text-2xl text-text-muted font-semibold">
          <div className="flex items-center gap-2">
            <span>Profile</span>
            <Avatar src={avatarPlaceholder} />
          </div>
        </Link>
      </div>
    </div>
  )
}

export default NavBar