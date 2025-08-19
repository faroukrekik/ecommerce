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
    <div
      className="navbar"
      style={{ position: "sticky", top: 0, zIndex: 1200, background: "#fff" }}
    >
      <div className="nav-logo">
        <p>SHOPPER</p>
      </div>

      <ul
        className="nav-menu"
        style={{ display: "flex", gap: 16, alignItems: "center" }}
      >
        <Link to={"/"}> Home </Link>
        <Link to={"/shop"}>SHOP</Link>
        <Link to={"/category"}>Category</Link>
        <Link to={"/contact"}>Contact</Link>
        <div className="box">
          <input type="text" placeholder="Search..." />
          <BsSearch />
        </div>
      </ul>

      <div
        className="nav-login-cart"
        style={{ display: "flex", alignItems: "center", gap: 12 }}
      >
        {isAuth ? (
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ fontWeight: 500 }}>
              Hello, {user?.name || "User"}
            </span>
            <Deconnexion />
          </div>
        ) : (
          <div>
            <Link to={"/login"}>
              <button>Login</button>
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
                onClick={() => user && dispatch(getCart(user._id))}
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
