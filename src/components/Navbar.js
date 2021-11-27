import React, { useState } from 'react';
import Version from './Version';
import NavPages from './NavPages';
import Logo from './Logo';
import MenuToggler from './MenuToggler';


export const handleMenuTogglerClickContext = React.createContext();


function Navbar() {
    const [menuTogglerClicked, setMenuTogglerClicked] = useState(false);
    const [menuTogglerClass, setMenuTogglerClass] = useState("menu-toggler");
    const [navbarClass, setNavbarClass] = useState("navbar");


    const handleMenuTogglerClick = () => {
        setMenuTogglerClicked(!menuTogglerClicked);
        setMenuTogglerClass((menuTogglerClicked) ? "menu-toggler slide-up" : "menu-toggler clicked");
        setNavbarClass((menuTogglerClicked) ? "navbar slide-up" : "navbar clicked");
    }

    return (
        <handleMenuTogglerClickContext.Provider value={handleMenuTogglerClick}>
            <div className={navbarClass}>
                <Logo />
                <NavPages />
                <MenuToggler className={menuTogglerClass} />
                <div className="navbar-fotter">
                    © Identity V API | Version <Version />
                </div>
            </div>
        </handleMenuTogglerClickContext.Provider>

    );

};

export default Navbar;