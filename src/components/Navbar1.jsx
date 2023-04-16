
import "./Navbar1.css";
import {Link} from "react-router-dom"
import React from 'react'
import { MenuItems1 } from "./MenuItems";
import logo from '../pages/images/logo.png'

const Navbar1 = () => {
    return (
        <nav className="NavbarItems">
            <img className="navbar-logo-image" src={logo} alt="" />
            <h1 className="navbar1-logo">Electhon</h1>
            
            <ul className="nav-menu">
                {MenuItems1.map((item,index)=>{
                    return(
                        <li key={index}>
                         <a className={item.cName} href={item.url}>
                          <i className={item.icon}></i>{item.title}
                         </a>
                        </li>
                    );
                })}
                <Link to='/login'><button className="signup-button">Sign Up</button></Link>
            </ul>
        </nav>
    )
}

export default Navbar1