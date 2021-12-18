import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

function CodeBlock({ className, code }) {
    const codeBlock = useRef();
    
    useEffect(() => {
        window.hljs.highlightElement(codeBlock.current);
    }, []);

    return (
        <pre>
            <code className={className} ref={codeBlock}>
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