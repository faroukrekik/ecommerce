import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Home from "./componenrs/Home";
import SignUp from "./componenrs/login/SignUp";
import SignIn from "./componenrs/login/SignIn";
import Navbar from "./componenrs/Navbar";
import Forgetpass from "./componenrs/login/Forgetpass";
import RestPassword from "./componenrs/login/RestPassword";

import ProductList from "./componenrs/ProductList";
import Cart from "./componenrs/Cart";

function App() {
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
          <Route path={"/shoppingCart"} element={<Cart />} />

          <Route
            path={"/reset-password/:id/:token"}
            element={<RestPassword />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
