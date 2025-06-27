import {NavLink, Link} from "react-router-dom";
import logo from "../assets/images/logo.png";

const Header = () => {
  function checkActivePage(isActive) {
    return (isActive ? "page-link border-b-2 active-page-link": "page-link")
  }
  return (
    <header className="px-3 py-4">
      <nav className="flex justify-between items-center gap-3 text-[#4D4D4D]">
        <Link to="/">
          <img src={logo} alt="Vanlife logo" className="h-3" />
        </Link>
        <div className="flex gap-3">
          <NavLink to="host" className={({isActive}) => checkActivePage(isActive)}>Host</NavLink>
          <NavLink to="about" className={({isActive}) => checkActivePage(isActive)}>About</NavLink>
          <NavLink to="vans" className={({isActive}) => checkActivePage(isActive)}>Vans</NavLink>
        </div>
      </nav>
    </header>
  )
}
export default Header
