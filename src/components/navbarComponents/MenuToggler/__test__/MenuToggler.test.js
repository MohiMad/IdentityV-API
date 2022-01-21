import React from 'react';
import ReactDOM from 'react-dom';
import MenuToggler from '../MenuToggler';

it("renders without crashing", () => {
    const div = document.createElement("div");

    ReactDOM.render(
    <MenuToggler />, div);
});