import React, { useContext }from 'react';
import PropTypes from 'prop-types';
import { handleMenuTogglerClickContext} from '../Navbar';


function MenuToggler({ className }) {
    const handleMenuTogglerClick = useContext(handleMenuTogglerClickContext);
    return (
        <div
            className={className} onClick={handleMenuTogglerClick}>
            <div className="icon"></div>
        </div>
    );
}

MenuToggler.propTypes = {
    className: PropTypes.string,
}

export default MenuToggler;