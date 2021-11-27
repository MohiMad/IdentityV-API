import React from 'react';
import PropTypes from 'prop-types';

function CodeBlock({ className, code }) {
    return (
        <pre>
            <code className={className}>
                {code}
            </code>
        </pre>
    );
}

CodeBlock.propTypes = {
    className: PropTypes.string,
    code: PropTypes.string
};

export default CodeBlock;