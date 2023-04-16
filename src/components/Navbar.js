
import "./Navbar.css";
import {Link} from "react-router-dom"
import React from 'react'
import { MenuItems } from "./MenuItems";
import logo from '../pages/images/logo.png'

const Navbar = () => {
    return (
        <nav className="NavbarItems">
            <img className="original-navbar-image" src={logo} alt="" />
            <h1 className="navbar-logo">Electhon</h1>
           
            <ul className="nav-menu">
                {MenuItems.map((item,index)=>{
                    return(
                        <li key={index}>
                         <a className={item.cName} href={item.url}>
                          <i className={item.icon}></i>{item.title}
                         </a>
                        </li>
                    );
                })}
                
            </ul>
        </nav>
    )
}

export default Navbar

