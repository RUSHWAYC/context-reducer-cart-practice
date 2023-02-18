import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Cart from "./components/Cart";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div>
        <Route path="/" />
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </div>
    </BrowserRouter>
  );
}

export default App;
