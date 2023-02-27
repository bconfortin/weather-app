import ForecastForToday from "./ForecastForToday";
import {FlexContainer} from "../globalStyles";
import WeekForecast from "./WeekForecast";

interface WeatherBannerProps {
    forecast?: Record<string, any>;
    city?: string;
}

const WeatherBanner = ({forecast, city}: WeatherBannerProps) => {
    const forecastForToday = forecast?.properties?.periods?.[0];
    const forecastForWeek = forecast?.properties?.periods;

    return (
        <FlexContainer column>
            <ForecastForToday forecastForToday={forecastForToday} city={city}/>
            <WeekForecast forecastForWeek={forecastForWeek}/>
        </FlexContainer>
    )
}

export default WeatherBanner;