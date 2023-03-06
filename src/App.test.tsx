import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import App from './App';

// add custom jest matchers from jest-dom
import '@testing-library/jest-dom';

describe('App is working as intended', () => {
    test('Rendered the weather page correctly', () => {
        render(<App/>);
        const searchButton = screen.getByText(/search/i);
        expect(searchButton).toBeInTheDocument();
    });

    test('Search', async () => {
        render(<App/>);
        const searchButton = await screen.findByText(/search/i);
        expect(searchButton).toBeInTheDocument();
        fireEvent(searchButton, new MouseEvent('click'));
        expect(await screen.findByText(/loading/i)).toBeInTheDocument();
        expect(await screen.findByText(/refresh/i)).toBeInTheDocument();
        expect(await screen.findByText(/suitland, md/i)).toBeInTheDocument();
        expect(screen.getAllByText(/this afternoon/i)).toHaveLength(2);
    });
});
