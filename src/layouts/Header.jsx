import React from "react";
import SamsungLogo from "../assets/images/logo/samsunglogo.svg";
import "./Layout.css";

const Header = () => {
  return (
    <div className="navbar_container">
      <div className="navbar_logo_container">
        <img src={SamsungLogo} alt="Samsung" />
      </div>
      <div className="navbar_menu_list">
        <span className="navbar_menu">Shop</span>
        <span className="navbar_menu">Mobile</span>
        <span className="navbar_menu">TV & AV</span>
        <span className="navbar_menu">Computing</span>
        <span className="navbar_menu">Air Conditioners</span>
      </div>
      <div className="navbar_user_container">
        <span className="material-symbols-outlined">shopping_cart</span>
        <span class="material-symbols-outlined">person</span>
      </div>
    </div>
  );
};

export default Header;
