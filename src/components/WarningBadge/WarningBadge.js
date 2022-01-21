import React, { useState } from 'react';
import './WarningBadge.css';

function WarningBadge(props) {
    const [ display, toggleDisplay ] = useState(true);

    return (
        <div data-testid="warning-badge" style={{display: `${display ? "block" : "none"}`}} className="warning-badge-holder">
            <h3>Note:</h3>
            {props.content} 
            <button data-testid="warning-badge-close-button" onClick={() => (toggleDisplay(!display))} aria-label="hide" title="hide">x</button>
        </div>
    );
}

export default WarningBadge;