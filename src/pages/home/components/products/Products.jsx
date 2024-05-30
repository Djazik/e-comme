import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import rating from "../../../../assets/images/rating.svg";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleLike } from "../../../../context/slice/wishlistSlice";
import { addToCart } from "../../../../context/slice/cartSlice";
import "./products.css";

export const Products = ({ data, title }) => {
  let wishlist = useSelector((state) => state.wishlist.value);

  const dispatch = useDispatch();

  let productItem = data?.map((el) => (
    <div key={el.id} className="product-card">
      <div className="card-img">
        <Link to={`/single/${el.id}`}>
          <div className="pod_img">
            <img src={el.image} alt="" />
          </div>
        </Link>
      </div>
      <div className="card-info">
        <p>{el.category}</p>
        <h1>{el.title}</h1>
        <div className="card-rating">
          <img src={rating} alt="" />
          <p>({el.rating.rate})</p>
        </div>
        <p>
          By <span>NestFood</span>
        </p>
        <div className="card-bottom">
          <div className="card-price">
            <h2>{el.price}</h2>
            <h3>$32.8</h3>
          </div>
          <button onClick={()=> dispatch(addToCart(el))}>
            <IoCartOutline /> Add
          </button>
          <button className="product__like" onClick={() => dispatch(toggleLike(el))}>
            {wishlist?.some((item) => item.id === el.id) ? (
              <FaHeart />
            ) : (
              <FaRegHeart />
            )}
          </button>
        </div>
      </div>
    </div>
  ));

  return (
    <div>
      <section className="product">
        <div className="container">
          <div className="product-bottom">
            <div className="product-wrapper">{productItem}</div>
           
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
