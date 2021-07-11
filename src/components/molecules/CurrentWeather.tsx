import { useAppSelector } from 'store/hooks';
import styled from 'styled-components';
import { IWeather } from 'types';
import Celsius from 'components/atoms/Celsius';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CelsiusWrapper = styled.p`
  margin: 1rem 0;
`;

const CurrentWeather = () => {
  const { data } = useAppSelector((state) => state.weather);

  if (!data) return <></>;

  console.log(data);

  const weather: IWeather = data as IWeather;

  return (
    <Wrapper>
      <p>
        {weather.name}, {weather.sys.country}
      </p>
      <CelsiusWrapper>
        <Celsius value={weather.current.temp} size={32} />
      </CelsiusWrapper>
      <p>{weather.weather[0].main}</p>
    </Wrapper>
  );
};

export default CurrentWeather;
