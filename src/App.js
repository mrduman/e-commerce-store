import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";
import {
  Home,
  ProductsPage,
  AboutPage,
  CartPage,
  ErrorPage,
  PrivateRoute,
  SingleProductPage,
  CheckoutPage,
} from "./pages";

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<ProductsPage />} />
        <Route exact path="/about" element={<AboutPage />} />
        <Route exact path="/cart" element={<CartPage />} />
        <Route exact path="/product/:id" element={<SingleProductPage />} />
        <Route
          path="checkout"
          element={
            <PrivateRoute>
              <CheckoutPage />
            </PrivateRoute>
          }
        />
        <Route exact path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
