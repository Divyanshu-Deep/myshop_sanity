import React, { useState } from "react";
import Link from "next/link";
import {Cart} from "./";
import { AiOutlineShopping } from "react-icons/ai";
import { useStateContext } from "../context/StateContext";
const Navbar = () => {
 const {showCart, setShowCart, totalQunatities} = useStateContext();
  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">Best Headphones</Link>
      </p>
      <button type="button" className="cart-icon" onClick={()=>setShowCart(true)}>
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQunatities}</span>
      </button>
      { showCart && <Cart/>}
    </div>
  );
};

export default Navbar;
