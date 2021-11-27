import React from 'react';
import PageAnchor from './PageAnchor';
import ExamplesList from './ExamplesList';
import PropTypes from 'prop-types';


function NavPages() {
    return (
        <ul className="articles">
            <li><PageAnchor id="#getting-started" text="Getting Started" /></li>
            <li><PageAnchor id="#query" text="Query Parameters" /></li>
            <li><PageAnchor id="#portrait-series" text="Portrait Series" /></li>
            <ExamplesList />
            <li><PageAnchor id="#change-log" text="Changelog" /></li>
            <li><PageAnchor id="#help" text="Help" /></li>
        </ul>
    )
}

NavPages.propTypes = {
    setPage: PropTypes.func
};

export default NavPages;