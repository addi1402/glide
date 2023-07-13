import React from "react";
import Logo from "../../logo.svg";
import "./Header.css";

export default function Header(){
    return(
        <header>
            <div className="left">
                <img src={Logo} alt="Brand Logo"/>
                <p>glide</p>
            </div>

            <div className="right">
                
            </div>
        </header>
    );
}