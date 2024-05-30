import { useSelector, useDispatch } from "react-redux";
import {
  incrementCart,
  decrementCart,
  removeFromCart,
  deleteAllCart,
} from "../../context/slice/cartSlice";
import Empty from "../../components/empty/Empty";
import "./Cart.css";
import { CiCircleRemove } from "react-icons/ci";

export const Cart = () => {
  const dispatch = useDispatch();
  const carts = useSelector((s) => s.cart.value);
  console.log(carts);

  let totalPrice = carts?.reduce((sum, el) => sum + el.price * el.quantity, 0);

  let cartItems = carts?.map((el) => (
    <div className="cart_item" key={el.id}>
      <div className="cart__element">
        <div className="cart__img">
          <button
            className="dalate__btn"
            onClick={() => dispatch(removeFromCart(el.id))}
          >
            <CiCircleRemove />
          </button>

          <img src={el.image} width={150} alt="" />
          <h2>{el.title}</h2>
        </div>
        <p>{el.price} USD</p>
        <div className="cart__btn ">
          <button
            disabled={el.quantity <= 1}
            onClick={() => dispatch(decrementCart(el))}
          >
            -
          </button>
          <span>{el.quantity}</span>
          <button onClick={() => dispatch(incrementCart(el))}>+</button>
        </div>
        <b>{el.price * el.quantity} USD</b>
      </div>
    </div>
  ));

  return (
    <div className=" container cart__wrapper">
      <div className=" ">
        <p>
          Home / <span>Cart</span>
        </p>
        {carts.length > 0 && (
          <div className="clear__all">
            <button onClick={() => dispatch(deleteAllCart())}>
              Delete All
            </button>
          </div>
        )}
        <div className="cart__title">
          <h3>Product</h3>
          <h3>Price</h3>
          <h3>Quantity</h3>
          <h3>Subtotal</h3>
        </div>

        <div className="cart_items">
          {carts.length ? <div>{cartItems}</div> : <Empty />}
        </div>
      </div>
      <div className="">
        <div className="cart__promo">
          <input type="text" placeholder="Voucher code" />
          <button>Redeem</button>
        </div>
        <div className="cart__total">
          <ul>
            <li>
              <h2>Subtotal</h2> <p>$998</p>
            </li>
            <li>
              <h2>Shipping fee</h2> <p>$20</p>
            </li>
            <li>
              <h2>Coupon</h2> <p>No</p>
            </li>
          </ul>
          <div>
            <h2>TOTAL</h2>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
