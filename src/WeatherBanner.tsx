import styled from "styled-components";

const FlexContainer = styled.div<{ column?: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: ${({column}) => column ? "column" : "row"};
`;

const WeekForecast = styled(FlexContainer)`
  justify-content: space-between;
`;

const ForecastToday = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto auto 1fr;
  grid-gap: 30px;
  margin-bottom: 24px;
  padding: 32px 16px;
  border-radius: 16px;
  box-shadow: 2px 2px rgba(0, 0, 0, 0.1);
  background-color: #fff;

  > div:first-child {
    > div:first-child {
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
  }

  > div:nth-child(2) {
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
  }

  > div:nth-child(3) {
    text-align: right;
    //color: rgba(0, 0, 0, 0.65);
    //font-size: 14px;

    > h1 {
      font-size: 64px;
      font-weight: 700;
    }

    > span {

    }
  }
`;

const WeekForecastCard = styled.div`
  padding: 16px;
  border-radius: 16px;
  box-shadow: 2px 2px rgba(0, 0, 0, 0.1);
  width: calc(12.5% - 16px);
  background-color: #fff;

  > div:first-child {
    font-size: 32px;
    font-weight: 700;
    display: flex;
    justify-content: flex-start;

    > span {
      font-size: 16px;
    }
  }

  > div:nth-child(2) {
    margin: 0 0 16px;
    font-size: 14px;
  }

  > div:nth-child(3) {
    font-size: 12px;
  }
`;

interface WeatherBannerProps {
    forecast?: Record<string, any>;
    city?: string;
}

const WeatherBanner = ({forecast, city}: WeatherBannerProps) => {
    const forecastForToday = forecast?.properties?.periods?.[0];

    return (
        <FlexContainer column>
            <ForecastToday>
                <div>
                    <div><span>{forecastForToday?.temperature}</span> º{forecastForToday?.temperatureUnit}</div>
                </div>
                <div>
                    <div>Rain: {forecastForToday?.probabilityOfPrecipitation?.value}%</div>
                    <div>Humidity: {forecastForToday?.relativeHumidity?.value}%</div>
                    <div>Winds: ${forecastForToday?.windSpeed} ${forecastForToday?.windDirection}</div>
                </div>
                <div>
                    <h1>{city}</h1>
                    <span>{forecastForToday?.name}: {forecastForToday?.detailedForecast}</span>
                </div>
            </ForecastToday>
            <WeekForecast>
                {forecast?.properties?.periods?.map(({name, temperature, temperatureUnit, shortForecast}) => {
                    return (
                        <WeekForecastCard>
                            <div>{temperature} <span>º{temperatureUnit}</span></div>
                            <div>{name}</div>
                            <div>{shortForecast}</div>
                        </WeekForecastCard>
                    );
                })}
            </WeekForecast>
        </FlexContainer>
    )
}

export default WeatherBanner;