import React from 'react';
import { NavLink } from "react-router-dom";
import './Logo.css';

function Logo() {
    return (
        <NavLink to="/">
            <div className="logo">
        </div>
        </NavLink>
    );
}

export default Logo;