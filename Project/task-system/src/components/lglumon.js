import React from "react";
import logo from '../images/logo-lumon.jpeg';
import './lglumon.css';

function LogoLumon() {
    return(
        <div className="container-logo">
            <img alt="logo" src={logo} className="img-logo"/> 
        </div>
    )
};

export default LogoLumon;