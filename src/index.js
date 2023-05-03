import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { BirdsProvider } from "./context/birdsContext";
import { FilterProvider } from "./context/filterContext";
import { CartProvider } from "./context/cartContext";
import { Auth0Provider } from "@auth0/auth0-react";
import { UserProvider } from "./context/userContext";

ReactDOM.render(
  <Auth0Provider
    domain="dev-vszx0n5nxk1k205m.us.auth0.com"
    clientId="t7xxQrvl1rSbE5rvulduOSd7iLF6VqK9"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <UserProvider>
      <BirdsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </BirdsProvider>
    </UserProvider>
  </Auth0Provider>,

  document.getElementById("root")
);
