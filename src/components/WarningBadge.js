import React, { useState } from 'react';

function WarningBadge(props) {
    const [ display, toggleDisplay ] = useState(true);

    return (
        <div style={{display: `${display ? "block" : "none"}`}} className="warning-badge-holder">
            <h3>Note:</h3>
            {props.content} 
            <button onClick={() => (toggleDisplay(!display))} aria-label="hide" title="hide">x</button>
        </div>
    );
}

export default WarningBadge;