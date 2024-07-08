import React from "react";
import { GiShoppingCart } from "react-icons/gi";

import { Badge } from "antd";

import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import { getCart } from "../redux/actions/CartActions";
import { useDispatch, useSelector } from "react-redux";
import Deconnexion from "./Deconnexion";

const Navbar = () => {
  const { user, isAuth } = useSelector((state) => state.userReducer);
  const { cart } = useSelector((state) => state.CartReducer);
  const dispatch = useDispatch();
  return (
    <div className="navbar">
      <div className="nav-logo">
        <p>SHOPPER</p>
      </div>

      <ul className="nav-menu">
        <li>Home</li>

        <Link to={"/shop"}>SHOP</Link>
        <li>Category</li>
        <li>Contact</li>
        <div className="box">
          <input type="text" placeholder="Search..." />
          <BsSearch />
        </div>
      </ul>

      <div className="nav-login-cart">
        {isAuth ? (
          <Deconnexion />
        ) : (
          <div>
            <Link to={"/login"}>
              <button> login</button>
            </Link>
            <Link to={"/register"}>
              <button>Register</button>
            </Link>
          </div>
        )}

        <div style={{ margin: "5px" }}>
          <Badge
            count={
              cart.items.length > 0
                ? cart.items
                    .map((item) => Number(item.quantity))
                    .reduce((a, c) => a + c)
                : "0"
            }
            showZero
          >
            <Link to="/shoppingCart">
              <GiShoppingCart
                onClick={() => dispatch(getCart(user._id))}
                className="panier"
              />
            </Link>
          </Badge>
        </div>

        <p></p>
      </div>
    </div>
  );
};

export default Navbar;
