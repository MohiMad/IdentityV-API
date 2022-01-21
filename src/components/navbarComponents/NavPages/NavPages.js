import React from 'react';
import { NavLink } from "react-router-dom";
import ExamplesList from '../ExamplesList/ExamplesList';
import PropTypes from 'prop-types';


function NavPages() {
    return (
        <ul className="articles">
            <li><NavLink to="/getting-started">Getting Started</NavLink></li>
            <li><NavLink to="/query">Query Parameters</NavLink></li>
            <li><NavLink to="/portrait-series">Portrait Series</NavLink></li>
            <ExamplesList />
            <li><NavLink to="/changelog">Changelog</NavLink></li>
            <li><NavLink to="/help">Help</NavLink></li>
        </ul>
    )
}

NavPages.propTypes = {
    setPage: PropTypes.func
};

export default NavPages;