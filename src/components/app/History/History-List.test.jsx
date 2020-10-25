
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import HistoryList from './History-List';

describe('HistoryList component', () => {
  afterEach(() => cleanup());
  it('render HistoryList component', () => {
    const { asFragment } = render(<HistoryList
    histories={[{
        url:"https://placekitten.com/",
        method:"GET"
    }]}    
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});