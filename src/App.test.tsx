import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import App from './App';

// add custom jest matchers from jest-dom
import '@testing-library/jest-dom';
import {coordinatesApiErrorResponse} from "./mocks/mockResponses";
import {server} from "./mocks/server";
import {rest} from "msw";

describe('App is working as intended', () => {
    test('Rendered the weather page correctly', () => {
        render(<App/>);
        const searchButton = screen.getByText(/search/i);
        expect(searchButton).toBeInTheDocument();
    });

    test('Search is successful and fields are filled correctly', async () => {
        render(<App/>);
        const searchButton = await screen.findByText(/search/i);
        expect(searchButton).toBeInTheDocument();
        fireEvent(searchButton, new MouseEvent('click'));
        expect(await screen.findByText(/loading/i)).toBeInTheDocument();
        expect(await screen.findByText(/refresh/i)).toBeInTheDocument();
        expect(await screen.findByText(/suitland, md/i)).toBeInTheDocument();
        expect(screen.getAllByText(/this afternoon/i)).toHaveLength(2);
    });

    test('Search throws an error state and an error message appear', async () => {
        server.use(
            rest.get('https://geocoding.geo.census.gov/geocoder/locations/onelineaddress', (req, res, ctx) => res(ctx.json(coordinatesApiErrorResponse)))
        );

        render(<App/>);
        const searchButton = await screen.findByText(/search/i);
        expect(searchButton).toBeInTheDocument();
        fireEvent(searchButton, new MouseEvent('click'));
        expect(await screen.findByText(/No matches for this address./i)).toBeInTheDocument();
    });
});
