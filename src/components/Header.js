import React from "react";
import Typed from "react-typed";

const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <h1>Legal Representation, Fairness and Justice</h1>
                <Typed 
                    className="typed-text"
                    strings={["Legal Consultation", "Representation", "Membership cover"]}
                    typeSpeed={50}
                    backSpeed={70}
                    loop
                />
                <a href="#" className="btn-main-offer">Contact Us</a>
            </div>
        </div>
    )
}

export default Header;
