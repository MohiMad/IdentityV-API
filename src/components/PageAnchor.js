import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { PageContext } from '../App';
import { handleMenuTogglerClickContext } from './Navbar';


function PageAnchor({ id, text }) {
    const { setPage } = useContext(PageContext);
    const handleMenuTogglerClick = useContext(handleMenuTogglerClickContext);

    const setPageAndSlidePageUpForPhones = () => {
        if (handleMenuTogglerClick) handleMenuTogglerClick();

        if (!id) return setPage("#getting-started");
        if (/examples-.+?/.test(window.location.hash) && window.location.hash.includes(id)) return setPage("#examples");

        setPage(id);
    };

    return (
        <a onClick={setPageAndSlidePageUpForPhones} href={id}>
            {text}
        </a>);
}

PageAnchor.propTypes = {
    id: PropTypes.string,
    text: PropTypes.string,
    setPage: PropTypes.func,
    handleMenuTogglerClick: PropTypes.func
};

export default PageAnchor;