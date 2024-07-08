import React from "react";
import "../componenrs/ProductCard.css";
import { useDispatch, useSelector } from "react-redux";
import { addcart } from "../redux/actions/CartActions";
import { getProfile } from "../redux/actions/userActions";

const ProductCard = ({ el }) => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.userReducer);

  console.log(user);
  const handleAddtocart = () => {
    dispatch(getProfile()).then(dispatch(addcart(el._id, 1, user._id)));
    alert("product add to cart");
  };
  return (
    <div>
      <div className="product-container">
        <div className="Product">
          <div className="imgprod">
            <img src={el.image} alt="" />
          </div>
          <div className="Nameprice">
            <h3>{el.nameProd}</h3>
            <span>{el.price}</span>
          </div>
          <p>{el.description}</p>
          <div className="stars"></div>
          <div className="button-buy">
            <button onClick={handleAddtocart}>Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
