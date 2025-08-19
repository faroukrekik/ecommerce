import React from "react";
import { editqunt, removeitem } from "../redux/actions/CartActions";
import { useDispatch, useSelector } from "react-redux";

const CartItems = ({ item, userId }) => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.CartReducer);

  const handleIncreaseQuantity = async (productId, quantity) => {
    try {
      await dispatch(editqunt(userId, productId, quantity + 1));
      // dispatch(getCart(user._id));
    } catch (error) {
      alert("Error increasing quantity");
    }
  };

  const handleDecreaseQuantity = async (productId, quantity) => {
    if (quantity === 1) {
      return;
    }
    try {
      await dispatch(editqunt(userId, productId, quantity - 1));
      // dispatch(getCart(user._id));
    } catch (error) {
      alert("Error decreasing quantity");
    }
  };

  return (
    <div>
      <div className="cart-item" key={item._id}>
        <div className="cart-product">
          <img src={item.image} alt="imge" />
          <h3>{item.name}</h3>
          <button onClick={() => dispatch(removeitem(userId, item.productId))}>
            Remove
          </button>
        </div>
        <div className="cart-product-price">{item.price}</div>
        <div className="cart-product-quantity">
          <button
            onClick={() =>
              handleDecreaseQuantity(item.productId, item.quantity)
            }
          >
            -
          </button>

          <div className="count">{item.quantity}</div>
          <button
            onClick={() =>
              handleIncreaseQuantity(item.productId, item.quantity)
            }
          >
            +
          </button>
        </div>
        <div className="cart-product-total-price">{cart.bill}</div>
      </div>
    </div>
  );
};

export default CartItems;
