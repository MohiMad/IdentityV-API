import React from "react";
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import CodeBlock from '../CodeBlock';

afterEach(cleanup);

it("renders without crashing", () => {
    const div = document.createElement("div");

    ReactDOM.render(<CodeBlock />, div);
});

it("renders content properly", () => {
    const code = `console.log("Hello World!");`;
    const { getByTestId } = render(<CodeBlock className="language js" code={code} />);
    
    expect(getByTestId("code-block")).toHaveTextContent(code);
});

it("has the classes passed through props", () => {
    const code = `console.log("Hello World!");`;
    const { getByTestId } = render(<CodeBlock className="language js" code={code} />);
    
    expect(getByTestId("code-block")).toHaveClass("language", "js");
});