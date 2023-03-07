import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const getWeatherBgImage = (shortForecast?: string): string => {
    if (!shortForecast) return "";

    const isSunny = shortForecast?.toLowerCase().includes("sunny");
    return `${process.env.PUBLIC_URL}/${isSunny ? "bg-sunny.png" : "bg-cloudy.png"}`;
}

export const getWeatherIcon = (shortForecast?: string): JSX.Element => {
    const lowerCasedShortForecast = shortForecast?.toLowerCase() || "";

    if (lowerCasedShortForecast.includes("thunder")) {
        return <FontAwesomeIcon icon="cloud-bolt" color="#1a237e"/>;
    } else if (lowerCasedShortForecast.includes("rain")) {
        return <FontAwesomeIcon icon="cloud-showers-heavy" color="#3949ab"/>;
    } else if (lowerCasedShortForecast.includes("snow")) {
        return <FontAwesomeIcon icon="snowflake" color="#90caf9"/>;
    } else if (lowerCasedShortForecast.includes("cloud")) {
        return <FontAwesomeIcon icon="cloud" color="#78909c"/>;
    } else if (lowerCasedShortForecast.includes("partly sunny") || lowerCasedShortForecast.includes("mostly sunny")) {
        return <FontAwesomeIcon icon="cloud-sun" color="#f9a825"/>;
    } else {
        return <FontAwesomeIcon icon="sun" color="#fdd835"/>
    }
}

export const getSearchButtonIcon = (isLoading: boolean, isRefresh: boolean): JSX.Element => {
    if (isLoading) {
        return <FontAwesomeIcon icon="spinner"/>;
    } else if (isRefresh) {
        return <FontAwesomeIcon icon="arrows-rotate"/>;
    } else {
        return <FontAwesomeIcon icon="magnifying-glass"/>
    }
}

export const getGeolocationUrl = (input: string = ""): string => {
    const formattedInput = input?.replaceAll(" ", "+");
    return `${process.env.NODE_ENV === "development" ? process.env.REACT_APP_CORS_ANYWHERE_URL : ""}${process.env.REACT_APP_GEOLOCATION_API_URL}?address=${formattedInput}&benchmark=2020&format=json`
}

export const getWeatherPointsUrl = ({latitude, longitude}: { latitude: string, longitude: string }): string => {
    return `${process.env.REACT_APP_WEATHER_API_POINTS_URL}${latitude},${longitude}`
}