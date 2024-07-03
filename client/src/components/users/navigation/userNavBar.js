import React from "react";
import { useNavigate } from "react-router-dom";
import './userNavBar.css';


function UserNavBar() {
    const navigate = useNavigate()
    return (
        <div class="navbar">
            <div class="logo-holder"><img onClick={() => navigate("/")} src="evotik logo.png" /> </div>
            <div>  <p onClick={() => navigate("/")}>Home</p> </div>
            <div> <p onClick={() => navigate("/aboutus")}>About Us</p> </div>
            <div>  <p onClick={() => navigate("/services")}>Services</p></div>
            <div> <p onClick={() => navigate("/contactus")}>Contact Us</p></div>

            {<div class="buttons">
                <div> <p onClick={() => navigate("/admin-login")}>Login</p></div>
            </div>}
        </div>
    )
}
export default UserNavBar