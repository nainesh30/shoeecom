import { CiHeart } from "react-icons/ci";
import { IoCartSharp } from "react-icons/io5";
import { GiRunningShoe } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import "./Nav.css"

const Nav = () => {
  return (
    <div className='navbar'>
      <GiRunningShoe className="shoe-logo" />
      <input type="text" className="search-inp" placeholder="Search here" />

      <div className="icon-container">
        <a href="#"><CiHeart  className="btn-icon" /></a>
        <a href="#"><IoCartSharp                className="btn-icon"/></a>
        <a href="#"><CgProfile className="btn-icon" /></a>
      </div>

    </div>
  )
}

export default Nav