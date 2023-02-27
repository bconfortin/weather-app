import styled from "styled-components";
import {getWeatherIcon} from "../utils";

const ForecastBanner = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto auto 1fr;
  grid-gap: 32px;
  margin-bottom: 24px;
  padding: 32px;
  border-radius: 16px;
  box-shadow: 2px 2px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  align-items: center;

  @media (max-width: 1140px) {
    grid-gap: 16px;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto auto;
  }
`;

const ForecastBannerTemperature = styled.div`
  > div {
    display: flex;
    justify-content: flex-start;
    font-size: 32px;
    font-weight: 700;
    padding-right: 32px;
    border-right: 1px solid rgba(0, 0, 0, 0.5);

    > span {
      font-size: 64px;
      font-weight: 800;
      display: flex;

      > svg {
        font-size: 36px;
        align-self: center;
        padding-right: 8px;
      }
    }
  }

  @media (max-width: 1140px) {
    grid-column: 1;
    grid-row: 1;

    > div {
      padding-right: 16px;

      > span {
        font-size: 48px;
      }
    }
  }
`;

const ForecastBannerConditions = styled.div`
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;

  @media (max-width: 1140px) {
    grid-column: 2;
    grid-row: 1;
  }
`;

const ForecastBannerCity = styled.div`
  text-align: right;
  font-size: 14px;
  padding-left: 30%;

  > h1 {
    font-size: 64px;
    font-weight: 700;
    margin-bottom: 8px;
  }

  @media (max-width: 1400px) {
    padding-left: 0;
  }

  @media (max-width: 1140px) {
    grid-column: 1 / span 2;
    grid-row: 2;
    text-align: left;

    > h1 {
      font-size: 32px;
    }
  }
`;

interface ForecastForTodayProps {
    forecastForToday?: {
        temperature: number;
        temperatureUnit: string;
        probabilityOfPrecipitation: {
            value: number;
        };
        relativeHumidity: {
            value: number;
        };
        windSpeed: string;
        windDirection: string;
        name: string;
        detailedForecast: string;
        shortForecast: string;
    };
    city?: string;
}

const ForecastForToday = ({forecastForToday, city}: ForecastForTodayProps) => {
    const {
        temperature,
        temperatureUnit,
        probabilityOfPrecipitation,
        relativeHumidity,
        windSpeed,
        windDirection,
        name,
        detailedForecast,
        shortForecast,
    } = forecastForToday || {};

    if (!forecastForToday) return null;

    return (
        <ForecastBanner>
            <ForecastBannerTemperature>
                <div><span>{getWeatherIcon(shortForecast)} {temperature}</span> º{temperatureUnit}</div>
            </ForecastBannerTemperature>
            <ForecastBannerConditions>
                <div>Rain: {probabilityOfPrecipitation?.value}%</div>
                <div>Humidity: {relativeHumidity?.value}%</div>
                <div>Winds: {windSpeed} {windDirection}</div>
            </ForecastBannerConditions>
            <ForecastBannerCity>
                <h1>{city}</h1>
                <span>{name}: {detailedForecast}</span>
            </ForecastBannerCity>
        </ForecastBanner>

    )
}

export default ForecastForToday;