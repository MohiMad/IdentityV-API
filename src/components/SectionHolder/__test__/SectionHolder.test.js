import React from 'react';
import ReactDOM from 'react-dom';
import SectionHolder from '../SectionHolder';

it("renders without crashing", () => {
    const div = document.createElement("div");

    ReactDOM.render(<SectionHolder />, div);
});