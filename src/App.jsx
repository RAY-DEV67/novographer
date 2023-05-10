import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import { AddProduct } from "./components/addProduct";
import { Navbar } from "./components/navbar";
import { ScrollToTop } from "./components/scrolltotop";
import { LandingPage } from "./pages/landingpage";
import { Shop } from "./pages/shop";
import { useState } from "react";
import React from "react";
import { SearchResult } from "./pages/searchResults";
import { BuyProduct } from "./pages/buyproduct";
import { Menu } from "./pages/menu";
import { Cart } from "./pages/cart";
import { Profile } from "./pages/profile";
import { CheckOut } from "./pages/checkout";

export const ShowCart = React.createContext();
export const SetShowCart = React.createContext();
export const SetLoadCart = React.createContext();
export const LoadCart = React.createContext();
export const SetSaved = React.createContext();
export const Saved = React.createContext();
export const AddCart = React.createContext();
export const SetAddCart = React.createContext();
export const Productname = React.createContext();
export const SetProductname = React.createContext();

function App() {
  const [product, setproduct] = useState([]);
  const [cart, setcart] = useState(false);
  const [saved, setsaved] = useState([]);
  return (
    <div className="App bg-[#FF6400]">
       <Saved.Provider value={saved}>
        <SetSaved.Provider value={setsaved}>
          <SetAddCart.Provider value={setcart}>
            <AddCart.Provider value={cart}>
            <SetProductname.Provider value={setproduct}>
            <Productname.Provider value={product}>
     <Router>
      <ScrollToTop>
      <Navbar/>

      <Routes>
      <Route path="/Shop/:product" element={<Shop />} />
      <Route path="/" element={<LandingPage />} />
      <Route path="/Product" element={<AddProduct />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/Menu" element={<Menu />} />
      <Route
                    path="/Search/:search"
                    element={<SearchResult />}
                  />
                   <Route
                      path="/Buy/:collections/:product/:id"
                      element={<BuyProduct />}
                    />
                    <Route path="/Cart/:id" element={<Cart />} />
                    <Route path="/Checkout/:id" element={<CheckOut />} />
      </Routes>
      </ScrollToTop>
    </Router>
    </Productname.Provider>
    </SetProductname.Provider>
    </AddCart.Provider>
    </SetAddCart.Provider>
    </SetSaved.Provider>
    </Saved.Provider>
    </div>
  );
}

export default App;
