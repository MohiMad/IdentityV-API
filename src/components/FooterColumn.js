import React from 'react';
import PropTypes from 'prop-types';

function FooterColumn(props) {
    return (
        <div className="footer-col">
            <h3>{props.title}</h3>
            {props.children}
        </div>
    );
}

FooterColumn.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node
}

export default FooterColumn;