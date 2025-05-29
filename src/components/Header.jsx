import {LOGO_URL} from "../utils/constant.js";
import { useState } from "react";


 const Header = () => {
    const [btnNameReact, setbtnNameReact] = useState("Login");
    
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}></img>
            </div>
    <div className="nav-items">
     <ul className="flex items-center space-x-6">
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
        <li>
            <button className="px-4 py-2 bg-white border border-gray-400 rounded hover:bg-gray-100 hover:shadow-md transition duration-200"
             onClick={() =>
             { 
                btnNameReact === "Login" 
                ? setbtnNameReact("LogOut")
                :setbtnNameReact("Login");
                }}>
                 {btnNameReact}
            </button>
        </li>
     </ul>
    </div>


        </div>
    )
}

export default Header;