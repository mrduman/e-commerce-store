import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { ProductsProvider } from "./context/products_context";
import { FilterProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { UserProvider } from "./context/user_context";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));

//dev-vfno8b1qsw32mobq.us.auth0.com
//LZbvQZDeXQYvkKE89DdEIV8wRISThi9P

root.render(
  <Auth0Provider
    domain="dev-vfno8b1qsw32mobq.us.auth0.com"
    clientId="LZbvQZDeXQYvkKE89DdEIV8wRISThi9P"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
    cacheLocation="localstorage"
  >
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>
);
