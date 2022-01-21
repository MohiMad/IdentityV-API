import React from 'react';
import ReactDOM from 'react-dom';
import Skin from '../Skin';
import '@testing-library/jest-dom';

it("renders without crashing", () => {
    const div = document.createElement("div");

    ReactDOM.render(<Skin />, div);
});
