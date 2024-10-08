import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>
          we tackle hunger with delicious meals from top local restaurants.
          Enjoy fresh food fast, from snacks to gourmet dishes, delivered right
          to your door. Satisfy your cravings anytime, anywhere.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
