import React from "react";
import logo from "../logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";



const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <div className="container">
                    <a className="navbar-brand" href="#home"><img className="logo" src={logo} alt="logo..." /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <FontAwesomeIcon icon={faBars} style={{color: "#fff"}}/>
                    </button>
                    

                    
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto ">
                        <li className="nav-item active">
                        <a className="nav-link" aria-current="page" href="#home">Home</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#about">About us</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#services">Services</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#members">Membership</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#contacts">Contacts</a>
                        </li>
                        
                        
                        
                        
        
                     </ul>
      
                </div>
                </div>
        </nav>
    );
}

export default Navbar;
