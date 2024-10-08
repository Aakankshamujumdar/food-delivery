import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppDownload from "./Components/AppDownload/AppDownload";
import StoreContextProvider from "./Components/Context/StoreContext";
import Footer from "./Components/Footer/Footer";
import LoginPopup from "./Components/LoginPopup/LoginPopup";
import Navbar from "./Components/Navbar/Navbar";
import Cart from "./Pages/Cart/Cart";
import Home from "./Pages/Home/Home";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder";

const App = () => {
  const [showLogin, setShowLogin] = useState(false)
  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin} />:<></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/order" element={<PlaceOrder />} />
            </Routes>

        {/* <Navbar/> */}
      </div>
      <Footer/>
    
    </>
  );
};

export default App;
