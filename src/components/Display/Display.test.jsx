import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Display from './Display';

describe('Display component', () => {
  afterEach(() => cleanup());

  const testDisplay = {
    'test JSON': [
      {
        '': '',
        '': ''
      }
    ]
  };

  it('render Display component', () => {
    const { asFragment } = render(<Display
      display={testDisplay}
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});