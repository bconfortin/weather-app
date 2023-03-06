import {rest} from 'msw';
import {coordinatesApiResponse, weatherForecastApiResponse, weatherPointsApiResponse, x, y} from "./mockResponses";

export const handlers = [
    rest.get('https://geocoding.geo.census.gov/geocoder/locations/onelineaddress', (req, res, ctx) => {
        // ?address=4600+Silver+Hill+Rd,+Washington,+Dc,+20233&benchmark=2020&format=json
        // const address = req.url.searchParams.get('address');

        return res(
            ctx.json(coordinatesApiResponse)
        );
    }),

    rest.get(`https://api.weather.gov/points/${y},${x}`, (req, res, ctx) => {
        //https://api.weather.gov/points/38.84598652130676,-76.92743610939091

        return res(
            ctx.json(weatherPointsApiResponse)
        );
    }),

    rest.get(`https://api.weather.gov/gridpoints/LWX/101,70/forecast`, (req, res, ctx) => {
        //https://api.weather.gov/gridpoints/LWX/101,70/forecast

        return res(
            ctx.json(weatherForecastApiResponse)
        );
    }),
];