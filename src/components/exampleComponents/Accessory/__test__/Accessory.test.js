import React from 'react';
import ReactDOM from 'react-dom';
import Accessory from '../Accessory';
import '@testing-library/jest-dom';

it("renders without crashing", () => {
    const div = document.createElement("div");

    ReactDOM.render(<Accessory />, div);
});

