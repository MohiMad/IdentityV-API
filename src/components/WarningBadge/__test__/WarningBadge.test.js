import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import WarningBadge from '../WarningBadge';

afterEach(cleanup);

it("renders without crashing", () => {
    const div = document.createElement("div");

    ReactDOM.render(<WarningBadge />, div);
});

it("renders content correctly", () => {
    const { getByTestId } = render(<WarningBadge content="Hello" />);
    expect(getByTestId("warning-badge")).toHaveTextContent("Hello");
});

it("is visible upon rendering", () => {
    const { getByTestId } = render(<WarningBadge content="Hello" />);
    expect(getByTestId("warning-badge")).toBeVisible();
});

it("gets hidden once the child button is clicked", () => {
    const { getByTestId } = render(<WarningBadge content="Hello" />);
    getByTestId("warning-badge-close-button").click();

    expect(getByTestId("warning-badge")).not.toBeVisible();
});