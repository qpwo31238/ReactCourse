import React from "react";
// import { BrowserRouter, Switch, Route} from "react-router-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import HomePage from "./pages/HomePage";
import ProductCollectionPage from "./pages/ProductCollectionPage";
import ProductPage from "./pages/ProductPage";

const App = () => {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<HomePage to="/" replace />} />
          <Route exact path="/mall" element={<HomePage/>}/>
          <Route exact path="/cart" element={<CartPage/>}/>
          <Route exact path="/checkout" element={<CheckoutPage/>}/>
          <Route path="/mall/:category" element={<ProductCollectionPage/>}/>
          <Route path="/:productName" element={<ProductPage/>} /> 
        </Routes>
    </Router>
  );
}

export default App;
 