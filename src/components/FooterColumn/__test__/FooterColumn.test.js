import React from 'react';
import ReactDOM from 'react-dom';
import FooterColumn from '../FooterColumn';

it("renders without crashing", () => {
    const div = document.createElement("div");

    ReactDOM.render(<FooterColumn />, div);
});