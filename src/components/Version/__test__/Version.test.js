import React from 'react';
import ReactDOM from 'react-dom';
import Version from '../Version';
import 'regenerator-runtime';


it("renders without crashing", () => {
    const div = document.createElement("div");

    ReactDOM.render(<Version />, div);
});
