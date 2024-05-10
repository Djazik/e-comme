import { useDispatch, useSelector } from "react-redux";
import "./Cart.css";
import {
  decrementQuantity,
  incrementQuantity,
} from "../../redux/slices/cartSlice";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();
  const [totalPrice, setTotalPrice] = useState(null);
  const [subTotal, setSubTotal] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    let total = 0;
    products.forEach((product) => {
      total += product.price * product.quantity;
    });
    setTotalPrice(total);
  }, [products]);
  useEffect(() => {
    if (products.length > 0) {
      let subtotal = 0;
      products.forEach((product) => {
        subtotal += product.price * product.quantity;
      });
      setSubTotal(subtotal);
    } else {
      setSubTotal(0);
    }
  }, [products]);
  const goToDetails = (id) => {
    navigate(`/single/${id}`);
  };
  return (
    <div className="container">
      <h1>Cart</h1>
      {products.length > 0 ? (
        <div className="py-5">
          {products.map((product) => (
            <div key={product.id} className="">
              <div className="d-flex align-items-center justify-content-between gap-2 mb-5">
                <div className="d-flex align-items-center">
                  <div className="cart-img">
                    <img src={product.image} alt="" className="img-fluid" />
                  </div>
                  <p className="clas bervor jala" onClick={() => goToDetails(product.id)}>{product.title}</p>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <p>{product.price * product.quantity}$</p>
                  <div className="d-flex gap-2 align-items-center">
                    <button
                      onClick={() => dispatch(decrementQuantity(product.id))}
                      className="btn bg-info py-1 px-2"
                    >
                      -
                    </button>
                    <p>{product.quantity}</p>
                    <button
                      onClick={() => dispatch(incrementQuantity(product.id))}
                      className="btn bg-info py-1 px-2"
                    >
                      +
                    </button>
                  </div>
                  <p>{product.price}$</p>
                </div>
              </div>
            </div>
          ))}
          <div className="">
            <p>SubTotal:{subTotal}$</p>
            <p>Shiping Fe:20$</p>
            <p>Total price: {totalPrice + 20}$</p>
          </div>
        </div>
      ) : (
        <p>No products in the cart</p>
      )}
    </div>
  );
};

export default Cart;
