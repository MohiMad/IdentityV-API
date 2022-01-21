import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import hljs from 'highlight.js/lib/common';
import './CodeBlock.css';


function CodeBlock({ className, code }) {
    const codeBlock = useRef();
    
    useEffect(() => {
        hljs.highlightElement(codeBlock.current);
    }, [code]);

    return (
        <pre>
            <code data-testid="code-block" className={className} ref={codeBlock}>
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