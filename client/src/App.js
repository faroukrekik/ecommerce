import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Home from "./componenrs/Home";
import SignUp from "./componenrs/login/SignUp";
import SignIn from "./componenrs/login/SignIn";
import Navbar from "./componenrs/Navbar";
import Forgetpass from "./componenrs/login/Forgetpass";
import RestPassword from "./componenrs/login/RestPassword";
import OAuthSuccess from "./componenrs/login/OAuthSuccess";

import ProductList from "./componenrs/ProductList";
import CategoryProducts from "./componenrs/CategoryProducts";
import CategoryPage from "./componenrs/CategoryPage";
import ContactPage from "./componenrs/ContactPage";
import EditProfile from "./componenrs/EditProfile";
import SettingsPrivacy from "./componenrs/SettingsPrivacy";
import HelpSupport from "./componenrs/HelpSupport";
import Cart from "./componenrs/Cart";
import UserProfile from "./componenrs/UserProfile";
import Profily from "./componenrs/Profily";
import { useEffect } from "react";
import { getProfile } from "./redux/actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { getProd } from "./redux/actions/prodActions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfile());
    dispatch(getProd());
  }, [dispatch]);

  const { user } = useSelector((state) => state.userReducer);
  console.log(user);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/register"} element={<SignUp />} />
          <Route path={"/login"} element={<SignIn />} />
          <Route path={"/forgetPassowrd"} element={<Forgetpass />} />

          <Route path={"/shop"} element={<ProductList />} />
          <Route path={"/category/:category"} element={<CategoryProducts />} />
          <Route path={"/category"} element={<CategoryPage />} />
          <Route path={"/contact"} element={<ContactPage />} />
          <Route path={"/profile/edit"} element={<EditProfile />} />
          <Route path={"/settings"} element={<SettingsPrivacy />} />
          <Route path={"/help"} element={<HelpSupport />} />
          <Route path={"/shoppingCart"} element={<Cart />} />

          <Route
            path={"/reset-password/:id/:token"}
            element={<RestPassword />}
          />
          <Route path={"/success"} element={<OAuthSuccess />} />
          <Route path={"/shop"} element={<ProductList />} />
          <Route path={"/shoppingCart"} element={<Cart />} />

          <Route path={"/profile"} element={<UserProfile />} />
          <Route path={"/prof"} element={<Profily />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
