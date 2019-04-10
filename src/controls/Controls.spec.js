// Test away!

import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import renderer from 'react-test-renderer';
import Controls from './Controls.js';
import 'jest-dom/extend-expect';

afterEach(cleanup)

it("Open Gate fires callback on click", () => {
    const closedFunction = jest.fn();
    const { getByTestId } = render(<Controls toggleClosed={closedFunction}/>);
    fireEvent.click(getByTestId('openButton'))
    expect(closedFunction).toHaveBeenCalled();
})