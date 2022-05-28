import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../img/magpieshiny.jpg';

const Navbar = () => {
    return (
        <nav className="navbar bg-dark">
            <h1>
                <img src={Logo} alt="" style={{ width: "40px", height: "40px", marginTop: "10px", float: "left" }}></img>
                <Link to="/" style={{ marginTop: "20px" }}> Magpie Industries</Link>
            </h1>
            <ul>
                <li><Link to="/">Staff</Link></li>
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </nav >
    )
};

export default Navbar;
