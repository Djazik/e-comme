import { Link } from "react-router-dom";
import {
  CartIcon,
  SearchIcon,
  UserIcon,
  WishlistIcon,
} from "../../assets/icons";
import "./Header.css";
import { useSelector } from "react-redux";
const HeaderTop = () => {
  const products = useSelector((state) => state.cart.products);
  return (
    <div className="header-top">
      <div className="container">
        <div className="d-flex justify-content-between">
          <div className="d-flex gap-2">
            <select name="" id="">
              <option value="en">En</option>
              <option value="ru">Ru</option>
            </select>
            <select name="" id="">
              <option value="usd">Usd</option>
              <option value="rubl">Rubl</option>
            </select>
          </div>
          <div className="d-flex align-items-center header-top_right">
            <Link to={"/login"}>
              <UserIcon />
            </Link>
            <Link to={"/wishlist"}>
              <WishlistIcon />
            </Link>
            <Link to={"/cart"} className="header-cart">
              <CartIcon />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {products.length}
              </span>
            </Link>
            <p>Items</p>
            <div className="d-flex gap-2">
              <p>$0.00</p>
              <SearchIcon />
            </div>
          </div>
        </div>
      </div>




    </div>
  );
};

export default HeaderTop;
