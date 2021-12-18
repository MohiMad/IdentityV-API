import React from 'react';

function SectionHolder(props) {
    return (
        <div className="section-holder">
            {props.children}
        </div>
    );
}

export default SectionHolder;