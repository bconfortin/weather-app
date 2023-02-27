import styled from "styled-components";
import {getWeatherIcon} from "../utils";

const WeekForecastContainer = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
`;

const WeekForecastCard = styled.div`
  padding: 16px;
  border-radius: 16px;
  box-shadow: 2px 2px rgba(0, 0, 0, 0.1);
  width: 100%;
  background-color: #fff;
`;

const WeekForecastCardTemperature = styled.div`
  font-size: 32px;
  font-weight: 700;
  display: flex;
  justify-content: flex-start;

  > svg {
    font-size: 18px;
    align-self: center;
    padding-right: 4px;
    //color: rgba(0, 0, 0, 0.65);
  }

  > span {
    font-size: 16px;
  }
`;

const WeekForecastCardWeekday = styled.div`
  margin: 0 0 16px;
  font-size: 12px;
`;

const WeekForecastCardShortForecast = styled.div`
  font-size: 14px;
`;

interface WeatherBannerProps {
    forecastForWeek?: Record<string, any>;
}

const WeekForecast = ({forecastForWeek}: WeatherBannerProps) => {
    if (!forecastForWeek) return null;

    return (
        <WeekForecastContainer>
            {forecastForWeek?.map(({name, temperature, temperatureUnit, shortForecast}, index) => {
                return (
                    <WeekForecastCard key={index}>
                        <WeekForecastCardTemperature>
                            {getWeatherIcon(shortForecast)}
                            {temperature}
                            <span>º{temperatureUnit}</span></WeekForecastCardTemperature>
                        <WeekForecastCardWeekday>{name}</WeekForecastCardWeekday>
                        <WeekForecastCardShortForecast>{shortForecast}</WeekForecastCardShortForecast>
                    </WeekForecastCard>
                );
            })}
        </WeekForecastContainer>
    )
}

export default WeekForecast;