import { useAppSelector } from 'store/hooks';
import styled from 'styled-components';
import { IWeather } from 'types';
import Celsius from 'components/atoms/Celsius';
import { weatherIcon } from 'constants/links';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px 0;
`;

const CelsiusWrapper = styled.p`
  margin: 1rem 0;
`;

const CurrentMore = styled.div`
  display: flex;
  margin-top: 1rem;
  color: var(--color-white);
  font-weight: 300;

  span {
    margin: 0 5px;
  }
`;

const CurrentWeather = () => {
  const { data } = useAppSelector((state) => state.weather);

  if (!data) return <>error</>;

  const weather: IWeather = data as IWeather;

  return (
    <Wrapper>
      <img src={weatherIcon(weather.weather[0].icon)} />
      <p>
        {weather.name}, {weather.sys.country}
      </p>
      <CelsiusWrapper>
        <Celsius value={weather.current.temp} size={32} />
      </CelsiusWrapper>
      <p>{weather.weather[0].main}</p>
      <CurrentMore>
        <span>Feels like: {weather.current.feels_like}</span>
        <span>Humidity: {weather.current.humidity}%</span>
      </CurrentMore>
    </Wrapper>
  );
};

export default CurrentWeather;
