/*Imports*/

//Módulos
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Estilos
import "./index.css";

//Componentes
import CartProvider from "./context/CartContext";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer";
import Hoodies from "./components/main/Hoodies";
import Shipping from "./components/main/Shipping";
import Services from "./components/main/Services";
import AboutUs from "./components/main/AboutUs";
import Footer from "./components/footer/Footer";
import CartListContainer from "./components/cart/CartListContainer";

//Core
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            exact
            path="/"
            element={<Main brand="Staylo" specs="Remeras Personalizadas" />}
          />
          <Route exact path="/shipping" element={<Shipping />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/about-us" element={<AboutUs />} />
          <Route exact path="/hoodies" element={<Hoodies />} />
          <Route exact path="/products" element={<ItemListContainer />} />
          <Route exact path="/cart" element={<CartListContainer />} />
          <Route
            exact
            path="/product/:productId"
            element={<ItemDetailContainer />}
          />
          <Route
            exact
            path="/products/:categoryId"
            element={<ItemListContainer />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
