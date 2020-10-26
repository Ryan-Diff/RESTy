import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import RESTy from './RESTy';
import { fetchApi } from '../../services/Fetch-API';

jest.mock('../../Services/Fetch-API');

describe('RESTy container', () => {
  it('uses GET to hit api and display the result', async () => {
    fetchApi.mockResolvedValue({
        '': '',
        '': ''
    });

    render(<RESTy />);

    const button = screen.getByTestId('send-button');
    await fireEvent.click(button);

    const display = await screen.findByTestId('display');

    expect(display).not.toBeEmptyDOMElement();
  });
});