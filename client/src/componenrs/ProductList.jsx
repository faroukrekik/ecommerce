import React, { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { getProd } from "../redux/actions/prodActions";
import { getProfile } from "../redux/actions/userActions";

const ProductList = () => {
  const { Product, loading } = useSelector((state) => state.prodReducer);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfile());
    dispatch(getProd());
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "70%",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "40px",
            marginTop: "25px",
          }}
        >
          {Product.map((el) => (
            <ProductCard el={el} key={el._id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
