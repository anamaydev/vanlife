import {Link} from "react-router-dom";
import logo from "../assets/images/logo.png";

const Header = () => {
  return (
    <header className="px-3 py-4">
      <nav className="flex justify-between items-center gap-3 text-[#4D4D4D]">
        <Link to="/">
          <img src={logo} alt="Vanlife logo" className="h-3" />
        </Link>
        <div className="flex gap-3">
          <Link to="/about" className="page-link" >About</Link>
          <p className="page-link cursor-pointer" >Vans</p>
        </div>
      </nav>
    </header>
  )
}
export default Header
