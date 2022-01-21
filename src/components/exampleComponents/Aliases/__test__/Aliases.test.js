import React from 'react';
import ReactDOM from 'react-dom';
import Aliases from '../Aliases';

it("renders without crashing", () => {
    const div = document.createElement("div");

    ReactDOM.render(<Aliases />, div);
});

