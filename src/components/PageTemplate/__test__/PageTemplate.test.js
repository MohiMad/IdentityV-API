import React from 'react';
import ReactDOM from 'react-dom';
import PageTemplate from '../PageTemplate';
import { BrowserRouter as Router} from 'react-router-dom';

it("renders without crashing", () => {
    const div = document.createElement("div");

    ReactDOM.render(<Router><PageTemplate /></Router>, div);
});