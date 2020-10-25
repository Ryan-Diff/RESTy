import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Controls from './Controls';

describe('Controls component', () => {
  afterEach(() => cleanup());
  it('render Controls component', () => {
    const { asFragment } = render(<Controls
      url='https://placekitten.com/'
      method='GET'
      body=''
      onSubmit={() => { }}
      onChange={() => { }}
    />);

    expect(asFragment()).toMatchSnapshot();
  });
});