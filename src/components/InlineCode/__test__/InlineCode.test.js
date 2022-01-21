import React from 'react';
import ReactDOM from 'react-dom';
import InlineCode from '../InlineCode';
import '@testing-library/jest-dom';

it("renders without crashing", () => {
    const div = document.createElement("div");

    ReactDOM.render(<InlineCode />, div);
});

