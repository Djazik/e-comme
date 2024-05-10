import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";
import "./ProductCard.css";
import { WishlistIcon } from "../../assets/icons";
import { toggleFavourit } from "../../redux/slices/wishlistSlice";
import { Bounce, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
/* eslint-disable react/prop-types */
const ProductCard = ({ category, description, id, price, image, title }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id,
        image,
        description,
        title,
        price,
        quantity: 1,
      })
    );
    toast.success(`${title} added to cart`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  const handleAddToWishlist = () => {
    dispatch(
      toggleFavourit({
        id,
        image,
        description,
        title,
        price,
      })
    );
    toast.success(`${title} added to wishList`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };
  const goToDetails = (id) => {
    navigate(`/single/${id}`);
  };
  return (
    <div className="container">
     <div className="seller__card">
      <div className="seller__card-imgbox" >
        <img
         
          src={image}
          className="card-img-top cursor-pointer"
          alt={title}
        />

        <div className="seller__card-shape">{category}</div>
        <div className="seller__card-imgbox__overlay">
          <div
            onClick={handleAddToWishlist}
            className="seller__card-imgbox__overlay-item"
          >
            <WishlistIcon />
          </div>
          <div
            onClick={handleAddToCart}
            className="seller__card-imgbox__overlay-item"
          >
            <svg
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.4402 12.878C14.9543 12.8773 15.4522 12.6982 15.849 12.3715C16.2458 12.0447 16.517 11.5904 16.6163 11.086L17.7313 5.513C17.7958 5.19002 17.788 4.85671 17.7084 4.53711C17.6288 4.21751 17.4793 3.91955 17.2707 3.66461C17.0622 3.40968 16.7997 3.20412 16.5022 3.06274C16.2048 2.92137 15.8796 2.84769 15.5503 2.84698H4.45025V1.73199C4.44998 1.43714 4.33296 1.15439 4.12475 0.945618C3.91654 0.736845 3.6341 0.619039 3.33925 0.617981H1.12426C0.834452 0.626663 0.559425 0.747871 0.357503 0.955933C0.155581 1.16399 0.042653 1.44255 0.042653 1.73248C0.042653 2.02242 0.155581 2.30097 0.357503 2.50903C0.559425 2.7171 0.834452 2.8383 1.12426 2.84698H2.23925V13.992C1.79797 13.99 1.36603 14.1191 0.998158 14.3628C0.630288 14.6065 0.343053 14.9539 0.17281 15.361C0.00256826 15.7681 -0.0430143 16.2166 0.0418595 16.6497C0.126733 17.0827 0.338227 17.4808 0.649556 17.7936C0.960885 18.1063 1.35805 18.3196 1.7907 18.4064C2.22335 18.4932 2.67204 18.4497 3.07992 18.2812C3.48779 18.1128 3.83653 17.8272 4.0819 17.4604C4.32727 17.0936 4.45824 16.6623 4.45824 16.221H12.2243C12.226 16.6597 12.3577 17.088 12.6027 17.4519C12.8478 17.8158 13.1951 18.0989 13.6009 18.2656C14.0067 18.4322 14.4528 18.4749 14.8828 18.3882C15.3129 18.3016 15.7076 18.0894 16.0172 17.7786C16.3267 17.4677 16.5373 17.0722 16.6222 16.6418C16.7072 16.2114 16.6627 15.7655 16.4944 15.3604C16.3261 14.9552 16.0416 14.609 15.6767 14.3655C15.3118 14.1219 14.883 13.992 14.4443 13.992H4.45726V12.878H14.4402ZM15.5553 5.078L14.4402 10.651H4.45324V5.078H15.5532H15.5553Z"
                fill="#33A0FF"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="seller__card-info">
        <h3  onClick={() => goToDetails(id)} className="seller__card-title">{title}</h3>
        <div className="seller__card-rating">
          <svg
            width="15"
            height="16"
            viewBox="0 0 15 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.2252 6.26868L9.97369 9.79065L11.2245 15.5146L7.09352 12.0566L2.69649 15.3307L4.39529 9.67065L0.429199 5.9707L5.60966 5.93066L7.55632 0.369751L9.05951 6.00574L14.2252 6.26868Z"
              fill="#FFC600"
            />
          </svg>
          <svg
            width="15"
            height="16"
            viewBox="0 0 15 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.2252 6.26868L9.97369 9.79065L11.2245 15.5146L7.09352 12.0566L2.69649 15.3307L4.39529 9.67065L0.429199 5.9707L5.60966 5.93066L7.55632 0.369751L9.05951 6.00574L14.2252 6.26868Z"
              fill="#FFC600"
            />
          </svg>
          <svg
            width="15"
            height="16"
            viewBox="0 0 15 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.2252 6.26868L9.97369 9.79065L11.2245 15.5146L7.09352 12.0566L2.69649 15.3307L4.39529 9.67065L0.429199 5.9707L5.60966 5.93066L7.55632 0.369751L9.05951 6.00574L14.2252 6.26868Z"
              fill="#FFC600"
            />
          </svg>
          <svg
            width="15"
            height="16"
            viewBox="0 0 15 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.2252 6.26868L9.97369 9.79065L11.2245 15.5146L7.09352 12.0566L2.69649 15.3307L4.39529 9.67065L0.429199 5.9707L5.60966 5.93066L7.55632 0.369751L9.05951 6.00574L14.2252 6.26868Z"
              fill="#FFC600"
            />
          </svg>
          <svg
            width="15"
            height="16"
            viewBox="0 0 15 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.2252 6.26868L9.97369 9.79065L11.2245 15.5146L7.09352 12.0566L2.69649 15.3307L4.39529 9.67065L0.429199 5.9707L5.60966 5.93066L7.55632 0.369751L9.05951 6.00574L14.2252 6.26868Z"
              fill="#FFC600"
            />
          </svg>
        </div>
        <div className="seller__card-prices">
          <span className="seller__card-active__price">{price}</span>
          <span className="seller__card-non__active-price">$534,33</span>
          <span className="seller__card-discount">24% Off</span>
        </div>
      </div>
    </div>
   </div>
  );
};

export default ProductCard;
