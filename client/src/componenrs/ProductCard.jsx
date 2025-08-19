import React from "react";
import "../componenrs/ProductCard.css";
import { useDispatch, useSelector } from "react-redux";
import { addcart } from "../redux/actions/CartActions";

const ProductCard = ({ el }) => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.userReducer);

  const handleAddtocart = async () => {
    if (!user || !user._id) {
      alert("Please log in to add items to cart");
      return;
    }
    try {
      await dispatch(addcart(el._id, 1, user._id));
      alert("Product added to cart");
    } catch (e) {
      alert("Failed to add to cart");
    }
  };

  if (!el) {
    return <div>No product data</div>;
  }

  return (
    <div>
      <div className="product-container">
        <div className="Product">
          <div className="imgprod">
            <img src={el.image} alt={el.nameProd || "Product"} />
          </div>
          <div className="Nameprice">
            <h3>{el.nameProd}</h3>
            <span>${el.price}</span>
          </div>
          <p>{el.description}</p>
          <div className="stars">
            {el.rating && <span>Rating: {el.rating}</span>}
          </div>
          <div className="button-buy">
            <button onClick={handleAddtocart}>Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
