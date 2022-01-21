import React from 'react';
import ReactDOM from 'react-dom';
import Emote from '../Emote';
import '@testing-library/jest-dom';

it("renders without crashing", () => {
    const div = document.createElement("div");

    ReactDOM.render(<Emote />, div);
});

