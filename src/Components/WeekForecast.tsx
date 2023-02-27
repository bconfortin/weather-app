import styled from "styled-components";
import {FlexContainer} from "../globalStyles";

const WeekForecastContainer = styled(FlexContainer)`
  justify-content: space-between;
  flex-wrap: wrap;
  grid-gap: 16px;
`;

const WeekForecastCard = styled.div`
  padding: 16px;
  border-radius: 16px;
  box-shadow: 2px 2px rgba(0, 0, 0, 0.1);
  min-width: 130px;
  max-width: 130px;
  background-color: #fff;
`;

const WeekForecastCardTemperature = styled.div`
  font-size: 32px;
  font-weight: 700;
  display: flex;
  justify-content: flex-start;

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
                        <WeekForecastCardTemperature>{temperature}
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