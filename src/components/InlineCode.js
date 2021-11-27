import React from 'react';
import PropTypes from 'prop-types';

function InlineCode(props) {
    return (<span className="code">{props.children}</span>);
}

InlineCode.propTypes = {
    text: PropTypes.string,
}

export default InlineCode;