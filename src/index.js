/*Imports*/

//Módulos
import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";

//Estilos
import "./index.css";

//Componentes

/*Context*/
import CartContext from "./context/CartContext";

import Header from "./components/header/Header";
import Main from "./components/main/Main";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer";
import CartListContainer from "./components/cart/CartListContainer";
import Shipping from "./components/main/Shipping";
import Services from "./components/main/Services";
import Contact from "./components/main/Contact";
import Footer from "./components/footer/Footer";
import BuyForm from "./components/form/Form";

//Core
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartContext>
      <HashRouter>
        <Header />
        <Routes>
          <Route
            exact
            path="/"
            element={<Main brand="Staylo" specs="Remeras PerSonalizadas" />}
          />
          <Route exact path="/shipping" element={<Shipping />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/products" element={<ItemListContainer />} />
          <Route
            exact
            path="/product/:productId"
            element={<ItemDetailContainer />}
          />
          <Route exact path="/cart" element={<CartListContainer />} />
          <Route
            exact
            path="/products/:categoryId"
            element={<ItemListContainer />}
          />
          <Route exact path="/send-order" element={<BuyForm />} />
        </Routes>
        <Footer />
      </HashRouter>
    </CartContext>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
