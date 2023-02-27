import styled from "styled-components";

const ForecastBanner = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto auto 1fr;
  grid-gap: 30px;
  margin-bottom: 24px;
  padding: 32px;
  border-radius: 16px;
  box-shadow: 2px 2px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  align-items: center;
`;

const ForecastBannerTemperature = styled.div`
  > div {
    display: flex;
    justify-content: flex-start;
    font-size: 32px;
    font-weight: 700;

    > span {
      position: relative;
      top: -4px;
      font-size: 64px;
      font-weight: 800;
    }
  }
`;

const ForecastBannerConditions = styled.div`
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
`;

const ForecastBannerCity = styled.div`
  text-align: right;
  font-size: 14px;
  padding-left: 30%;

  > h1 {
    font-size: 64px;
    font-weight: 700;
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
        detailedForecast
    } = forecastForToday || {};

    if (!forecastForToday) return null;

    return (
        <ForecastBanner>
            <ForecastBannerTemperature>
                <div><span>{temperature}</span> º{temperatureUnit}</div>
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