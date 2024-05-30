import { NavLink } from "react-router-dom";
import rasm from "../../assets/images/logo.svg";
import { API_URL } from "../../static";
import axios from "axios";
import { useEffect, useState } from "react";
import { IoLocationSharp, IoSearch, IoPersonOutline } from "react-icons/io5";
import { SlArrowDown } from "react-icons/sl";
import { PiCircleDashedBold } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./style.css";

export const Navbar = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
      .get(`${API_URL}/products/categories`)
      .then((res) => setCategories(res.data))
      .catch((err) => console.log(err));
  }, []);

  let categoryItems = categories?.map((el, inx) => <option key={inx} value={el}>{el}</option>);

  return (
    <div className="navbar">
      <div className="container navbar__hero">
        <NavLink to="/">
          <img src={rasm} alt="Logo" />
        </NavLink>

        <div className="hero__input">
          <select className="hero__select" name="" id="">
            <option value="">All Categories</option>
            {categoryItems}
          </select>
          <div className="hero_line"></div>
          <input type="text" placeholder="Search for items... " />
          <IoSearch />
        </div>

        <div className="hero__location">
          <IoLocationSharp />
          <h4>Your Location</h4>
          <SlArrowDown />
        </div>

        <div className="link__items">
          <div>
            <PiCircleDashedBold />
            <h3>Compare</h3>
          </div>
          <div>
            <FaRegHeart />
            <NavLink to="/wishlist">Wishlist</NavLink>
          </div>
          <div>
            <AiOutlineShoppingCart />
            <NavLink to="/cart">Cart</NavLink>
          </div>
          <div>
            <IoPersonOutline />
            <NavLink to="/login">Login</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
