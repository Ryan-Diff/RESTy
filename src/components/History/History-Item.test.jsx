
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import HistoryItem from './History-Item';

describe('HistoryItem component', () => {
  afterEach(() => cleanup());
  it('render HistoryItem component', () => {
    const { asFragment } = render(<HistoryItem
      url='https://placekitten.com/'
      method='GET'
      body=''
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});