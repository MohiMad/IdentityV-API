import React, { useState } from 'react';
import './CopyHrefIcon.css';

function CopyHrefIcon(props) {
    const [text, setText] = useState("Copy to Clipboard");

    function copyHrefToClipBoardAndChangeState() {
        setText("Copied!");
        navigator.clipboard.writeText((props.value) ? `${window.location.origin}/${props.value}` : window.location.href);

        setTimeout(() => {
            setText("Copy to Clipboard!");
        }, 3000);
    }

    return (
        <i className="fas fa-link" onClick={copyHrefToClipBoardAndChangeState} data-text={text} data-testid="copy-href-icon" />
    );
}

export default CopyHrefIcon;