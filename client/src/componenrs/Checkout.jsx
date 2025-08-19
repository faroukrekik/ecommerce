import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkpayment } from "../redux/actions/Payment";

const Checkout = () => {
  const { cart, loading } = useSelector((state) => state.CartReducer);
  const { Product } = useSelector((state) => state.prodReducer);
  const { user } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const handlesubmit = () => {
    dispatch(checkpayment(user._id, Product._id));
  };

  return (
    <div>
      <button onClick={handlesubmit}>Checkout</button>
    </div>
  );
};

export default Checkout;
