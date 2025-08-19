import { useDispatch, useSelector } from "react-redux";
import "../componenrs/cart.css";

import CartItems from "./CartItems";
import { useEffect } from "react";
import { getProfile } from "../redux/actions/userActions";
import { getCart } from "../redux/actions/CartActions";
import { getProd } from "../redux/actions/prodActions";
import { checkpayment } from "../redux/actions/Payment";

const Cart = () => {
  const { cart, loading } = useSelector((state) => state.CartReducer);
  const { user } = useSelector((state) => state.userReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfile());
    dispatch(getProd());
  }, [dispatch]);

  useEffect(() => {
    if (user && user._id) {
      dispatch(getCart(user._id));
    }
  }, [user, dispatch]);

  const handlesubmit = () => {
    dispatch(checkpayment(user._id));
  };

  return (
    <div className="cart-container">
      <h2>Shopping cart</h2>
      {loading ? (
        <h1>loading ...</h1>
      ) : (
        <div>
          {cart.items.length === 0 ? (
            <div className="cart-empty">
              <h2>Your cart is empty</h2>
            </div>
          ) : (
            <div>
              <div className="titles">
                <h3 className="product-title">Product</h3>
                <h3 className="price">Price</h3>
                <h3 className="Quantity">Quantity</h3>
                <h3 className="total">Total</h3>
              </div>
              <div className="cart-items">
                {cart.items.map((item) => (
                  <CartItems item={item} key={item._id} userId={user._id} />
                ))}
              </div>
              <div className="cart-summary">
                <button className="clear-cart">Clear Cart</button>
                <div className="cart-checkout">
                  <div className="subtotal">
                    <span>Subtotal</span>
                    <span className="amount">{cart.bill}</span>
                  </div>
                  <p>Taxes and shipping calculated at checkout</p>
                  <button onClick={handlesubmit}>Checkout</button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;
