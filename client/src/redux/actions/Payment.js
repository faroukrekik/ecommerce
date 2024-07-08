import axios from "axios";
import {
  ADD_PAYMENT,
  ADD_PAYMENT_Fail,
  ADD_PAYMENT_Success,
} from "../actionTypes";
import { loadStripe } from "@stripe/stripe-js";

export const checkpayment = (userId) => async (dispatch) => {
  dispatch({
    type: ADD_PAYMENT,
  });
  const stripe = await loadStripe(
    "pk_test_51P9aRyRxAlUJMtcKRuM2meMaqXSSz5GlyJwoRUidTDYG5eHO7qfC8PMZn1w5J9UYAoEa15aZTLsG183q4XxIdPhq00iwFdqO6o"
  );

  try {
    const { data } = await axios.post(
      `/Payment/create-checkout-session/${userId}`
    );
    // const session = res.;

    const result = stripe.redirectToCheckout({
      sessionId: data.id,
    });

    dispatch({
      type: ADD_PAYMENT_Success,
      payload: result,
    });
  } catch (error) {
    dispatch({
      type: ADD_PAYMENT_Fail,
      payload: error.response.data,
    });
  }
};
