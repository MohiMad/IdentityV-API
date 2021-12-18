import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function PageTemplate(props) {
    return (
        <>
            <Navbar />
            {props.children}
            <Footer />
        </>
    );
}

export default PageTemplate;