import styled from "styled-components";
import {Dispatch, useCallback, useEffect, useState} from "react";
import {getSearchButtonIcon} from "../utils";

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

const SearchButton = styled.button<{ isLoading?: boolean }>`
  width: 100%;
  background-color: ${({isLoading}) => isLoading ? "gray" : "#1565c0"};
  border-radius: 6px;
  color: white;
  font-weight: 700;
  text-transform: uppercase;
  border: 0;
  cursor: ${({isLoading}) => isLoading ? "not-allowed" : "pointer"};

  > svg {
    padding-right: 4px;
  }
`;

const ErrorMessage = styled.p`
  text-align: center;
  color: red;
  margin: 16px auto;
  font-size: 14px;
  font-weight: 700;
`;

interface SearchBarProps {
    setForecast: Dispatch<any>;
    setCity: Dispatch<any>;
}

const SearchBar = ({setForecast, setCity}: SearchBarProps): JSX.Element => {
    const [input, setInput] = useState<string>("4600 Silver Hill Rd, Washington, Dc, 20233");
    const [isRefresh, setIsRefresh] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>("");
    const [coordinates, setCoordinates] = useState<{ longitude: string, latitude: string }>();
    const [forecastAddress, setForecastAddress] = useState<string | null>("");

    const cleanupBeforeSearching = useCallback(() => {
        setErrorMessage("");
        setIsLoading(true);
        setForecastAddress(null);
    }, []);

    const handleChange = (event) => {
        setInput(event.target.value);
        isRefresh && setIsRefresh(false);
    }

    const handleSubmit = async (event) => {
        // do something
        event.preventDefault();
        cleanupBeforeSearching();

        const formattedInput = input?.replaceAll(" ", "+");
        // Running into cors issues in dev mode, so I used this website as a proxy.
        const address = `${process.env.NODE_ENV === "development" ? "https://cors-anywhere.herokuapp.com/" : ""}https://geocoding.geo.census.gov/geocoder/locations/onelineaddress?address=${formattedInput}&benchmark=2020&format=json`;
        fetch(address, {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((data: any) => {
                if (data?.result?.addressMatches?.length === 0) {
                    setForecast(null);
                    setCity(null);
                    setErrorMessage("No matches for this address.");
                }
                const {x: longitude, y: latitude} = data?.result?.addressMatches?.[0]?.coordinates || {};
                if (!!longitude && !!latitude) setCoordinates({longitude, latitude});
            })
            .catch((error) => {
                console.log(error);
            }).finally(() => {
            setIsRefresh(true);
            setIsLoading(false);
        });
    }

    useEffect(() => {
        if (!!coordinates?.latitude && !!coordinates?.longitude) {
            const address = `https://api.weather.gov/points/${coordinates?.latitude},${coordinates?.longitude}`;
            fetch(address, {
                method: 'GET',
            })
                .then((response) => response ? response.json() : {})
                .then((data: any) => {
                    const {forecast} = data?.properties || {};
                    const {city, state} = data?.properties?.relativeLocation?.properties || {};

                    if (forecast) setForecastAddress(forecast);
                    if (city && state) setCity(`${city}, ${state}`);
                })
                .catch((error) => {
                    console.log(error)
                });
        }
    }, [coordinates]);

    useEffect(() => {
        if (!!forecastAddress) {
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
    }, [forecastAddress]);

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <SearchInput type="text" name="location" onChange={handleChange} value={input}/>
                <SearchButton type="submit"
                              disabled={isLoading}
                              isLoading={isLoading}>
                    {getSearchButtonIcon(isLoading, isRefresh)}{isLoading ? "Loading" : isRefresh ? "Refresh" : "Search"}
                </SearchButton>
            </Form>
            {!!errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </div>
    )
}

export default SearchBar;