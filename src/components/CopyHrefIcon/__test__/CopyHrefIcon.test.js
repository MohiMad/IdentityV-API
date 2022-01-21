import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, configure } from 'enzyme';
import '@testing-library/jest-dom';
import CopyHrefIcon from '../CopyHrefIcon';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it("renders without crashing", () => {
    const div = document.createElement("div");

    ReactDOM.render(<CopyHrefIcon />, div);
});

it("changes state upon clicking", () => {
    const setText = jest.fn();
    const wrapper = shallow(<CopyHrefIcon onClick={setText} value="hello" />);
    const handleClick = jest.spyOn(React, "useState");
    handleClick.mockImplementation(text => [text, setText]);

    // mocking navigator
    let clipboardData = '';
    const mockClipboard = {
        writeText: jest.fn(
            (data) => { clipboardData = data }
        ),
        readText: jest.fn(
            () => { return clipboardData }
        ),
    };
    global.navigator.clipboard = mockClipboard;

    wrapper.simulate("click");
    expect(setText).toBeTruthy();
    expect(clipboardData).toEqual("http://localhost/hello");

});

