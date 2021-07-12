import styled from 'styled-components';
import DayWeather from 'components/molecules/DayWeather';
import { useAppSelector } from 'store/hooks';
import dayjs from 'dayjs';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 30px;
`;

const DailyWeather = () => {
  const { data } = useAppSelector((state) => state.weather);

  if (!data) return <></>;

  return (
    <Wrapper>
      {data.daily.map((day, index) => (
        <DayWeather
          key={index}
          day={dayjs()
            .add(index + 1, 'day')
            .format('DD.MM.YYYY')}
          temp={day.temp.day}
          description={day.weather[0].description}
          icon={day.weather[0].icon}
          nightTemp={day.temp.night}
        />
      ))}
    </Wrapper>
  );
};

export default DailyWeather;
