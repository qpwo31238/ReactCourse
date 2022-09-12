import React from "react";
// import { BrowserRouter, Switch, Route} from "react-router-dom";
import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import HomePage from "./pages/HomePage";
import ProductCollectionPage from "./pages/ProductCollectionPage";
import ProductPage from "./pages/ProductPage";
import ScrollToTop from "./components/common/ScrollToTop";
import AuthContext from "./components/auth/AuthContext";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route exact path="/" element={<HomePage to="/" replace />} />
          <Route exact path="/mall" element={<HomePage/>} />
          <Route exact path="/cart" element={<CartPage/>} />
          <Route exact path="/" element={<CheckoutPage/>} />
          <Route exact path="/mall/:category" element={<ProductCollectionPage/>} />
          <Route exact path="/:productName" element={<ProductPage/>}/>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;