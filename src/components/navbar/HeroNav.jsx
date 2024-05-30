import { NavLink } from "react-router-dom";
import  "./Navbar.css"

export const HeroNav = () => {
  return (
    <div>
      {/* <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/contact"}>Contact</NavLink>
      <NavLink to={"/wishlist"}>wishlist</NavLink>
      <NavLink to={"/cart"}>Cart</NavLink> */}
      <div className="">
        <div className="nav container ">
          <ul className="nav__item">
            <NavLink to={"#"}>About Us</NavLink>
            <div></div>
            <NavLink to={"/login"}>My Account</NavLink>
            <div></div>
            <NavLink to={"/wishlist"}>Wishlist</NavLink>
            <div></div>
            <NavLink to={"#"} >Tracking</NavLink>
          </ul>
          <ul className="nav__item">
            <li >
              Need help? Call Us : + <span className="nav__items">1800 900</span>
            </li>
            <div></div>
            <li className="nav__option">
                  <select name="" id="">
                    <option value="">English </option>
                  </select>
                </li>
                <li className="nav__option ">
                  <select name="" id="">
                    <option value="">USD </option>
                  </select>
                </li>
              
          </ul>
        </div>
        <div className="hero__line"></div>
      </div>
    </div>
  );
};

export default HeroNav;
