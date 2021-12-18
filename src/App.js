import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import PageTemplate from './components/PageTemplate';
import SectionHolder from './components/SectionHolder';
import { Outlet } from "react-router-dom";

function App(props) {
    const { pathname } = useLocation();

    useEffect(() => {
        const rootElem = document.getElementById("root");

        gsap.to(rootElem, {
            scrollTop: 0,
            transition: 50
        })

    }, [pathname]);

    return (
        <PageTemplate>
            <SectionHolder>
                <Outlet />
            </SectionHolder>
        </PageTemplate>
    );
}

export default App; 