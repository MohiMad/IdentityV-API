import React from 'react';
import ReactDOM from 'react-dom';
import NavPages from '../NavPages';
import { BrowserRouter as Router } from 'react-router-dom';

it("renders without crashing", () => {
    const div = document.createElement("div");

    ReactDOM.render(
        <Router><NavPages /></Router>, div);
});