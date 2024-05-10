import { Link, useParams } from "react-router-dom";
import {
  useGetProductByIdQuery,
  useGetProductsQuery,
} from "../../redux/services/productServices";
import "./Single.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";
import { Bounce, toast } from "react-toastify";
import { toggleFavourit } from "../../redux/slices/wishlistSlice";
import ProductCard from "../../components/card/ProductCard";
import { WishlistIcon } from "../../assets/icons";

export const Single = () => {
  const { id } = useParams();
  const { data: allProduct } = useGetProductsQuery();
  const { data: product, isLoading, isError } = useGetProductByIdQuery(id);
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  const incrementQty = () => {
    setQty((prevQty) => prevQty + 1);
  };

  const decrementQty = () => {
    if (qty > 1) {
      setQty((prevQty) => prevQty - 1);
    }
  };

  const handleAddToCart = () => {
    if (!product) return;
    dispatch(
      addToCart({
        id: product.id,
        image: product.image,
        description: product.description,
        title: product.title,
        price: product.price,
        quantity: qty,
      })
    );
    toast.success(`${product.title} added to cart`, {
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
        id: product.id,
        image: product.image,
        description: product.description,
        title: product.title,
        price: product.price,
      })
    );
    toast.success(`${product.title} added to wishList`, {
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

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading product</div>;

  const categoryProducts = allProduct.filter(
    (item) => item.category === product.category
  );

  return (
    <div className="single-wrapper">
      <div className="container">
        <div className="d-flex single-list justify-content-center gap-2">
          <Link>Home</Link>
          <p>/</p>
          <Link>Single</Link>
          <p>/</p>
          <p>{product.title}</p>
        </div>
        {/* <div className="">
          <div className="d-flex">
            <img
              src={product?.image}
              alt={product?.title}
              className="img-fluid single-img"
            />
            <div className="">
              <h1 className="mb-3">{product?.title}</h1>
              <p>{(product.price * qty).toFixed(2)}$</p>
              <div className="d-flex bg-info align-items-center mb-4">
                <button onClick={decrementQty} className="btn">
                  -
                </button>
                <p>{qty}</p>
                <button onClick={incrementQty} className="btn">
                  +
                </button>
              </div>
              <button onClick={handleAddToCart} className="btn bg-warning">
                Add to Cart
              </button>
              <button
                onClick={handleAddToWishlist}
                className="btn bg-danger ml-2"
              >
                Add to Wishlist
              </button>
            </div>
          </div>

          <div className="my-5 row">

           
          </div>
        </div> */}
      </div>

      <section className="sneaker">
        <div className="container">
          <div className="sneakers_mainBlock">
            <div className="sneakers_left_mainBlock">
              <div className="sneakers_leftInnerBlock">
                <img
                  src={product?.image}
                  alt=""
                  className="sneakers__leftImage"
                />
              </div>
              <div className="sneakers_leftInnerBlock">
                <img
                  src={product?.image}
                  alt=""
                  className="sneakers__leftListImages"
                />
                <img
                  src={product?.image}
                  alt=""
                  className="sneakers__leftListImages"
                />
                <img
                  src={product?.image}
                  alt=""
                  className="sneakers__leftListImages"
                />
                <img
                  src={product?.image}
                  alt=""
                  className="sneakers__leftListImages"
                />
              </div>
            </div>
            <div className="sneakers_middle_mainBlock">
              <div className="sneakers_middle_upperBlock">
                <h1 className="sneakers__name">{product?.title}</h1>
                <span className="sneakers_middle_smallBlock">
                  <span className="sneakers_stars">
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                  </span>
                  <p>0 reviews</p>
                  <p>Submit to review</p>
                </span>
              </div>
              <hr className="sneakers__line" />
              <div className="sneakers_middle_middleBlock">
                <span className="sneakers_priceBlock">
                  <p className="sneakers__priceText">{product.price}</p>
                  <p className="sneakers__priceText">
                    <del>${(product.price * qty).toFixed(2)}</del>
                  </p>
                  <p className="sneakers__priceText">24% off</p>
                </span>
                <span className="sneakers_info">
                  <p>Availability:</p>
                  <p>In stock</p>
                  <p>Category</p>
                  <p>{product.category}</p>
                  <p>Free shipping</p>
                </span>
              </div>
              <hr className="sneakers__line" />
              <div className="sneakers_below_block">
                <span className="sneakers_colorFunction">
                  <p className="sneakers__text">select color:</p>
                  <span className="sneakers_colors">
                    <span className="sneakers__colorsBorder" data-id="0">
                      <span></span>
                    </span>
                    <span className="sneakers__colorsBorder" data-id="1">
                      <span></span>
                    </span>
                    <span className="sneakers__colorsBorder" data-id="2">
                      <span></span>
                    </span>
                    <span className="sneakers__colorsBorder" data-id="3">
                      <span></span>
                    </span>
                  </span>
                </span>
                <span className="sneakers_sizeFunction">
                  <p className="sneakers__text">size</p>
                  <div className="sneakers_sizeBlock">
                    <span className="sneakers_size">
                      <p className="sneakers__sizeName">xs</p>
                      <i></i>
                    </span>
                  </div>
                </span>
              </div>
              <hr className="sneakers__line" />
              <div className="sneakers_middle_footerBlock">
                <span className="sneakers_footerInnerBlock sneakers__borderHover">
                  <i onClick={decrementQty} className="sneakers_minus">
                    -
                  </i>
                  <p className="sneakers__quantity">{qty}</p>
                  <i onClick={incrementQty} className="sneakers_add">
                    +
                  </i>
                </span>
                <span className="sneakers_footerInnerBlock">
                  <span className="sneakers__borderHover">
                    <i className="sneakers__cart"></i>
                    <i onClick={handleAddToCart}>add to cart</i>
                  </span>
                  <span className="sneakers__borderHover">
                    <i
                      onClick={handleAddToWishlist}
                      className="sneakers__heart"
                    >
                      <WishlistIcon />
                    </i>
                  </span>
                </span>
              </div>
              <hr className="sneakers__line" />
              <div className="sneakers_middle_socialBlock">
                <span className="sneakers_middle_socialInnerBlock">
                  <i className="sneakers__icon"></i>
                  <p>Share on Facebook</p>
                </span>
                <span className="sneakers_middle_socialInnerBlock">
                  <i className="sneakers__icon"></i>
                  <p>Share on Twitter</p>
                </span>
              </div>
            </div>
            <div className="sneakers_right_mainBlock">
              <div className="sneakers_rightInnerBlock">
                <p>best seller</p>
                <div className="sneakers_rightImgBlock">
                  <div className="sneakers__rightImage"></div>
                  <div className="sneakers_rightValueBlock">
                    <div className="sneakers_rightStarsBlock">
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                    </div>
                    <span>
                      <p>$499</p>
                      <del>$599</del>
                    </span>
                  </div>
                </div>
                <div className="sneakers_rightBelowBlock">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <div className="">
  {categoryProducts.map((product) => (
              <div  key={product.id} className="col-3">

                <ProductCard {...product} />
              </div>
            ))}
  </div> */}
    </div>
  );
};

export default Single;
