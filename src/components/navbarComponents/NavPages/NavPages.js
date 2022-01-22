import React, {useContext} from 'react';
import { NavLink } from "react-router-dom";
import {handleMenuTogglerClickContext} from '../../Navbar/Navbar';
import ExamplesList from '../ExamplesList/ExamplesList';
import PropTypes from 'prop-types';


function NavPages() {
    const handleMenuTogglerClick = useContext(handleMenuTogglerClickContext);

    return (
        <ul className="articles">
            <li><NavLink onClick={() => handleMenuTogglerClick()} to="/getting-started">Getting Started</NavLink></li>
            <li><NavLink onClick={() => handleMenuTogglerClick()} to="/query">Query Parameters</NavLink></li>
            <li><NavLink onClick={() => handleMenuTogglerClick()} to="/portrait-series">Portrait Series</NavLink></li>
            <ExamplesList />
            <li><NavLink onClick={() => handleMenuTogglerClick()} to="/changelog">Changelog</NavLink></li>
            <li><NavLink onClick={() => handleMenuTogglerClick()} to="/help">Help</NavLink></li>
        </ul>
    )
}

NavPages.propTypes = {
    setPage: PropTypes.func
};

export default NavPages;