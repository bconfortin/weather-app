export const [x, y] = [-76.92743610939091, 38.84598652130676];

export const coordinatesApiResponse = {
    result: {
        addressMatches: [{
            coordinates: {
                x,
                y
            }
        }]
    }
};

export const weatherPointsApiResponse = {
    properties: {
        forecast: "https://api.weather.gov/gridpoints/LWX/101,70/forecast",
        relativeLocation: {
            properties: {
                city: "Suitland",
                state: "MD",
            }
        },
    }
};

export const weatherForecastApiResponse = {
    "@context": [
        "https://geojson.org/geojson-ld/geojson-context.jsonld",
        {
            "@version": "1.1",
            wx: "https://api.weather.gov/ontology#",
            geo: "http://www.opengis.net/ont/geosparql#",
            unit: "http://codes.wmo.int/common/unit/",
            "@vocab": "https://api.weather.gov/ontology#"
        }
    ],
    type: "Feature",
    geometry: {
        type: "Polygon",
        coordinates: [
            [
                [
                    -76.896002199999998,
                    38.886105399999998
                ],
                [
                    -76.899789499999997,
                    38.864154399999997
                ],
                [
                    -76.871601400000003,
                    38.861204199999996
                ],
                [
                    -76.867808300000007,
                    38.883154799999993
                ],
                [
                    -76.896002199999998,
                    38.886105399999998
                ]
            ]
        ]
    },
    properties: {
        updated: "2023-03-06T17:29:15+00:00",
        units: "us",
        forecastGenerator: "BaselineForecastGenerator",
        generatedAt: "2023-03-06T19:24:09+00:00",
        updateTime: "2023-03-06T17:29:15+00:00",
        validTimes: "2023-03-06T11:00:00+00:00/P7DT14H",
        elevation: {
            unitCode: "wmoUnit:m",
            value: 75.895200000000003
        },
        periods: [
            {
                number: 1,
                name: "This Afternoon",
                startTime: "2023-03-06T14:00:00-05:00",
                endTime: "2023-03-06T18:00:00-05:00",
                isDaytime: true,
                temperature: 59,
                temperatureUnit: "F",
                temperatureTrend: null,
                probabilityOfPrecipitation: {
                    unitCode: "wmoUnit:percent",
                    value: null
                },
                dewpoint: {
                    unitCode: "wmoUnit:degC",
                    value: 0.55555555555555558
                },
                relativeHumidity: {
                    unitCode: "wmoUnit:percent",
                    value: 43
                },
                windSpeed: "6 mph",
                windDirection: "S",
                icon: "https://api.weather.gov/icons/land/day/sct?size=medium",
                shortForecast: "Mostly Sunny",
                detailedForecast: "Mostly sunny, with a high near 59. South wind around 6 mph."
            },
            {
                number: 2,
                name: "Tonight",
                startTime: "2023-03-06T18:00:00-05:00",
                endTime: "2023-03-07T06:00:00-05:00",
                isDaytime: false,
                temperature: 41,
                temperatureUnit: "F",
                temperatureTrend: null,
                probabilityOfPrecipitation: {
                    unitCode: "wmoUnit:percent",
                    value: 30
                },
                dewpoint: {
                    unitCode: "wmoUnit:degC",
                    value: 3.8888888888888888
                },
                relativeHumidity: {
                    unitCode: "wmoUnit:percent",
                    value: 82
                },
                windSpeed: "7 mph",
                windDirection: "E",
                icon: "https://api.weather.gov/icons/land/night/rain_showers,20/rain_showers,30?size=medium",
                shortForecast: "Chance Rain Showers",
                detailedForecast: "A chance of rain showers after 10pm. Partly cloudy, with a low around 41. East wind around 7 mph. Chance of precipitation is 30%. New rainfall amounts less than a tenth of an inch possible."
            },
            {
                number: 3,
                name: "Tuesday",
                startTime: "2023-03-07T06:00:00-05:00",
                endTime: "2023-03-07T18:00:00-05:00",
                isDaytime: true,
                temperature: 53,
                temperatureUnit: "F",
                temperatureTrend: null,
                probabilityOfPrecipitation: {
                    unitCode: "wmoUnit:percent",
                    value: 30
                },
                dewpoint: {
                    unitCode: "wmoUnit:degC",
                    value: 3.3333333333333335
                },
                relativeHumidity: {
                    unitCode: "wmoUnit:percent",
                    value: 86
                },
                windSpeed: "8 to 20 mph",
                windDirection: "NW",
                icon: "https://api.weather.gov/icons/land/day/rain_showers,30/sct?size=medium",
                shortForecast: "Chance Rain Showers then Mostly Sunny",
                detailedForecast: "A chance of rain showers before 7am. Mostly sunny, with a high near 53. Northwest wind 8 to 20 mph, with gusts as high as 32 mph. Chance of precipitation is 30%. New rainfall amounts less than a tenth of an inch possible."
            },
            {
                number: 4,
                name: "Tuesday Night",
                startTime: "2023-03-07T18:00:00-05:00",
                endTime: "2023-03-08T06:00:00-05:00",
                isDaytime: false,
                temperature: 32,
                temperatureUnit: "F",
                temperatureTrend: null,
                probabilityOfPrecipitation: {
                    unitCode: "wmoUnit:percent",
                    value: null
                },
                dewpoint: {
                    unitCode: "wmoUnit:degC",
                    value: -7.7777777777777777
                },
                relativeHumidity: {
                    unitCode: "wmoUnit:percent",
                    value: 53
                },
                windSpeed: "16 to 20 mph",
                windDirection: "NW",
                icon: "https://api.weather.gov/icons/land/night/few?size=medium",
                shortForecast: "Mostly Clear",
                detailedForecast: "Mostly clear, with a low around 32. Northwest wind 16 to 20 mph, with gusts as high as 31 mph."
            },
            {
                number: 5,
                name: "Wednesday",
                startTime: "2023-03-08T06:00:00-05:00",
                endTime: "2023-03-08T18:00:00-05:00",
                isDaytime: true,
                temperature: 50,
                temperatureUnit: "F",
                temperatureTrend: null,
                probabilityOfPrecipitation: {
                    unitCode: "wmoUnit:percent",
                    value: null
                },
                dewpoint: {
                    unitCode: "wmoUnit:degC",
                    value: -5
                },
                relativeHumidity: {
                    unitCode: "wmoUnit:percent",
                    value: 56
                },
                windSpeed: "16 to 23 mph",
                windDirection: "NW",
                icon: "https://api.weather.gov/icons/land/day/wind_few?size=medium",
                shortForecast: "Sunny",
                detailedForecast: "Sunny, with a high near 50. Northwest wind 16 to 23 mph, with gusts as high as 33 mph."
            },
            {
                number: 6,
                name: "Wednesday Night",
                startTime: "2023-03-08T18:00:00-05:00",
                endTime: "2023-03-09T06:00:00-05:00",
                isDaytime: false,
                temperature: 31,
                temperatureUnit: "F",
                temperatureTrend: null,
                probabilityOfPrecipitation: {
                    unitCode: "wmoUnit:percent",
                    value: null
                },
                dewpoint: {
                    unitCode: "wmoUnit:degC",
                    value: -4.4444444444444446
                },
                relativeHumidity: {
                    unitCode: "wmoUnit:percent",
                    value: 69
                },
                windSpeed: "12 to 17 mph",
                windDirection: "NW",
                icon: "https://api.weather.gov/icons/land/night/few?size=medium",
                shortForecast: "Mostly Clear",
                detailedForecast: "Mostly clear, with a low around 31."
            },
            {
                number: 7,
                name: "Thursday",
                startTime: "2023-03-09T06:00:00-05:00",
                endTime: "2023-03-09T18:00:00-05:00",
                isDaytime: true,
                temperature: 52,
                temperatureUnit: "F",
                temperatureTrend: null,
                probabilityOfPrecipitation: {
                    unitCode: "wmoUnit:percent",
                    value: null
                },
                dewpoint: {
                    unitCode: "wmoUnit:degC",
                    value: -2.2222222222222223
                },
                relativeHumidity: {
                    unitCode: "wmoUnit:percent",
                    value: 72
                },
                windSpeed: "13 mph",
                windDirection: "N",
                icon: "https://api.weather.gov/icons/land/day/few?size=medium",
                shortForecast: "Sunny",
                detailedForecast: "Sunny, with a high near 52."
            },
            {
                number: 8,
                name: "Thursday Night",
                startTime: "2023-03-09T18:00:00-05:00",
                endTime: "2023-03-10T06:00:00-05:00",
                isDaytime: false,
                temperature: 31,
                temperatureUnit: "F",
                temperatureTrend: null,
                probabilityOfPrecipitation: {
                    unitCode: "wmoUnit:percent",
                    value: null
                },
                dewpoint: {
                    unitCode: "wmoUnit:degC",
                    value: -1.6666666666666667
                },
                relativeHumidity: {
                    unitCode: "wmoUnit:percent",
                    value: 78
                },
                windSpeed: "9 mph",
                windDirection: "N",
                icon: "https://api.weather.gov/icons/land/night/sct?size=medium",
                shortForecast: "Partly Cloudy",
                detailedForecast: "Partly cloudy, with a low around 31."
            },
            {
                number: 9,
                name: "Friday",
                startTime: "2023-03-10T06:00:00-05:00",
                endTime: "2023-03-10T18:00:00-05:00",
                isDaytime: true,
                temperature: 45,
                temperatureUnit: "F",
                temperatureTrend: null,
                probabilityOfPrecipitation: {
                    unitCode: "wmoUnit:percent",
                    value: 40
                },
                dewpoint: {
                    unitCode: "wmoUnit:degC",
                    value: 0
                },
                relativeHumidity: {
                    unitCode: "wmoUnit:percent",
                    value: 81
                },
                windSpeed: "7 mph",
                windDirection: "E",
                icon: "https://api.weather.gov/icons/land/day/snow/snow,40?size=medium",
                shortForecast: "Chance Rain And Snow",
                detailedForecast: "A chance of rain and snow after 7am. Mostly cloudy, with a high near 45. Chance of precipitation is 40%."
            },
            {
                number: 10,
                name: "Friday Night",
                startTime: "2023-03-10T18:00:00-05:00",
                endTime: "2023-03-11T06:00:00-05:00",
                isDaytime: false,
                temperature: 39,
                temperatureUnit: "F",
                temperatureTrend: null,
                probabilityOfPrecipitation: {
                    unitCode: "wmoUnit:percent",
                    value: 60
                },
                dewpoint: {
                    unitCode: "wmoUnit:degC",
                    value: 3.3333333333333335
                },
                relativeHumidity: {
                    unitCode: "wmoUnit:percent",
                    value: 96
                },
                windSpeed: "9 mph",
                windDirection: "S",
                icon: "https://api.weather.gov/icons/land/night/rain,60?size=medium",
                shortForecast: "Light Rain Likely",
                detailedForecast: "Rain likely. Mostly cloudy, with a low around 39. Chance of precipitation is 60%."
            },
            {
                number: 11,
                name: "Saturday",
                startTime: "2023-03-11T06:00:00-05:00",
                endTime: "2023-03-11T18:00:00-05:00",
                isDaytime: true,
                temperature: 51,
                temperatureUnit: "F",
                temperatureTrend: null,
                probabilityOfPrecipitation: {
                    unitCode: "wmoUnit:percent",
                    value: 50
                },
                dewpoint: {
                    unitCode: "wmoUnit:degC",
                    value: 3.3333333333333335
                },
                relativeHumidity: {
                    unitCode: "wmoUnit:percent",
                    value: 96
                },
                windSpeed: "9 to 17 mph",
                windDirection: "W",
                icon: "https://api.weather.gov/icons/land/day/rain,50?size=medium",
                shortForecast: "Chance Light Rain",
                detailedForecast: "A chance of rain. Mostly cloudy, with a high near 51. Chance of precipitation is 50%."
            },
            {
                number: 12,
                name: "Saturday Night",
                startTime: "2023-03-11T18:00:00-05:00",
                endTime: "2023-03-12T06:00:00-04:00",
                isDaytime: false,
                temperature: 36,
                temperatureUnit: "F",
                temperatureTrend: null,
                probabilityOfPrecipitation: {
                    unitCode: "wmoUnit:percent",
                    value: 40
                },
                dewpoint: {
                    unitCode: "wmoUnit:degC",
                    value: 0
                },
                relativeHumidity: {
                    unitCode: "wmoUnit:percent",
                    value: 79
                },
                windSpeed: "14 to 17 mph",
                windDirection: "NW",
                icon: "https://api.weather.gov/icons/land/night/rain,40/rain,30?size=medium",
                shortForecast: "Chance Light Rain",
                detailedForecast: "A chance of rain. Mostly cloudy, with a low around 36. Chance of precipitation is 40%."
            },
            {
                number: 13,
                name: "Sunday",
                startTime: "2023-03-12T06:00:00-04:00",
                endTime: "2023-03-12T18:00:00-04:00",
                isDaytime: true,
                temperature: 50,
                temperatureUnit: "F",
                temperatureTrend: null,
                probabilityOfPrecipitation: {
                    unitCode: "wmoUnit:percent",
                    value: null
                },
                dewpoint: {
                    unitCode: "wmoUnit:degC",
                    value: -0.55555555555555558
                },
                relativeHumidity: {
                    unitCode: "wmoUnit:percent",
                    value: 82
                },
                windSpeed: "16 mph",
                windDirection: "NW",
                icon: "https://api.weather.gov/icons/land/day/rain?size=medium",
                shortForecast: "Slight Chance Light Rain",
                detailedForecast: "A slight chance of rain. Partly sunny, with a high near 50."
            },
            {
                number: 14,
                name: "Sunday Night",
                startTime: "2023-03-12T18:00:00-04:00",
                endTime: "2023-03-13T06:00:00-04:00",
                isDaytime: false,
                temperature: 35,
                temperatureUnit: "F",
                temperatureTrend: null,
                probabilityOfPrecipitation: {
                    unitCode: "wmoUnit:percent",
                    value: null
                },
                dewpoint: {
                    unitCode: "wmoUnit:degC",
                    value: -1.6666666666666667
                },
                relativeHumidity: {
                    unitCode: "wmoUnit:percent",
                    value: 72
                },
                windSpeed: "13 mph",
                windDirection: "NW",
                icon: "https://api.weather.gov/icons/land/night/rain/sct?size=medium",
                shortForecast: "Slight Chance Light Rain then Partly Cloudy",
                detailedForecast: "A slight chance of rain before 8pm. Partly cloudy, with a low around 35."
            }
        ]
    }
};
