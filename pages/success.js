import React , {useState, useEffect} from "react";
import Link from "next/link";
import {BsBagCheckFill} from "react-icons/bs";
import { useStateContext } from "../context/StateContext";
import { fireWorks } from "../lib/util";

const success =()=>{
    const {setCartItems, setTotalPrice,setTotalQunatities } = useStateContext();
    
    useEffect(()=>{
        localStorage.clear();
        setCartItems([]);
        setTotalPrice(0);
        setTotalQunatities(0);
        fireWorks();
    },[]);

    return (
        <div className="success-wrapper">
            <div className="success">
                <p className="icon">
                    <BsBagCheckFill/>
                </p>
                <h2>Thank you for your Order</h2>
                <Link href="/">
                <button type="button" width="250" className="btn">
                    Continue Shopping
                </button>
            </Link>
            </div>
        </div>
    )
}

export default success