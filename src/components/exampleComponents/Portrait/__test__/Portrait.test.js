import React from 'react';
import ReactDOM from 'react-dom';
import Portrait from '../Portrait';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';

it("renders without crashing", () => {
    const div = document.createElement("div");

    // Components that hold a <Link> component require to be wrapped inside a <Router> component
    ReactDOM.render(
        <Router>
            <Portrait />
        </Router>
        , div);
});
