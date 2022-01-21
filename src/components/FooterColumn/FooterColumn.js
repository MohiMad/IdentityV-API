import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useIntersectionObserver } from 'react-intersection-observer-hook';
import './FooterColumn.css';

function FooterColumn(props) {
    const [className, setClassName] = useState("");
    const [header, { entry }] = useIntersectionObserver();

    const isVisible = entry && entry.isIntersecting;

    useEffect(() => {
        if (isVisible) {
            setClassName("scroll-animation");
        }
    }, [isVisible]);

    return (
        <div className="footer-col">
            <h3 ref={header} className={className}>{props.title}</h3>
            {props.children}
        </div>
    );
}

FooterColumn.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node
}

export default FooterColumn;