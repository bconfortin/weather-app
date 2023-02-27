import styled from "styled-components";
import {Dispatch, useEffect, useState} from "react";

const Form = styled.form`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 100px;
  grid-gap: 8px;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 36px;
  border-radius: 6px;
  padding: 0 10px;
  display: block;
  border: 0;
`;

const SearchButton = styled.button`
  width: 100%;
  background-color: darkcyan;
  border-radius: 6px;
  color: white;
  font-weight: 700;
  text-transform: uppercase;
`;

interface SearchBarProps {
    setForecast: Dispatch<any>;
    setCity: Dispatch<any>;
}

const SearchBar = ({setForecast, setCity}: SearchBarProps): JSX.Element => {
    const [input, setInput] = useState<string>("4600 Silver Hill Rd, Washington, Dc, 20233");
    const [isRefresh, setIsRefresh] = useState<boolean>(false);
    const [coordinates, setCoordinates] = useState<{ longitude: string, latitude: string }>();
    const [forecastAddress, setForecastAddress] = useState<string>("");

    const handleChange = (event) => {
        setInput(event.target.value);
        isRefresh && setIsRefresh(false);
    }

    const handleSubmit = (event) => {
        // do something
        event.preventDefault();
        const formattedInput = input.replaceAll(" ", "+");
        const address = `https://cors-anywhere.herokuapp.com/https://geocoding.geo.census.gov/geocoder/locations/onelineaddress?address=${formattedInput}&benchmark=2020&format=json`;
        fetch(address, {
            method: 'GET',
        })
            .then((response) => response ? response.json() : {})
            .then((data: any) => {
                const {x: longitude, y: latitude} = data?.result?.addressMatches?.[0]?.coordinates || {};
                if (!!longitude && !!latitude) setCoordinates({longitude, latitude});
            })
            .catch((error) => {
                console.log(error)
            }).finally(() => {
            setIsRefresh(true);
        });
    }

    useEffect(() => {
        if (!!coordinates?.latitude && !!coordinates?.longitude) {
            const address = `https://api.weather.gov/points/${coordinates?.latitude},${coordinates?.longitude}`;
            console.log(address);
            fetch(address, {
                method: 'GET',
            })
                .then((response) => response ? response.json() : {})
                .then((data: any) => {
                    const {forecast} = data?.properties || {};
                    const {city, state} = data?.properties?.relativeLocation?.properties || {};

                    if (!!forecast) setForecastAddress(forecast);
                    if (!!city && state) setCity(`${city}, ${state}`);
                })
                .catch((error) => {
                    console.log(error)
                });
        }
    }, [coordinates]);

    useEffect(() => {
        if (!!forecastAddress) {
            console.log(forecastAddress);
            fetch(forecastAddress, {
                method: 'GET',
            })
                .then((response) => response ? response.json() : {})
                .then((data: any) => {
                    const dataWithoutNightTimes = data?.properties?.periods?.filter((i) => !i?.name?.endsWith(" Night"));

                    setForecast({
                        ...data,
                        properties: {
                            ...data.properties,
                            periods: dataWithoutNightTimes,
                        }
                    });
                })
                .catch((error) => {
                    console.log(error)
                });
        }
    }, [forecastAddress])

    return (
        <Form onSubmit={handleSubmit}>
            <SearchInput type="text" name="location" onChange={handleChange} value={input}/>
            <SearchButton type="submit">{isRefresh ? "Refresh" : "Search"}</SearchButton>
        </Form>
    )
}

export default SearchBar;