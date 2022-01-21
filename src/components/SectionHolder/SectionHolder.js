import React from 'react';
import './SectionHolder.css';

function SectionHolder(props) {
    return (
        <div className="section-holder">
            {props.children}
        </div>
    );
}

export default SectionHolder;