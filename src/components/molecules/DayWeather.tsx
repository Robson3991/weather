import styled from 'styled-components';
import Celsius from 'components/atoms/Celsius';
import { weatherIcon } from 'constants/links';
import dayjs from 'dayjs';

interface DayWeatherProps {
  day: string | number | Date | dayjs.Dayjs | null | undefined;
  icon: string;
  temp: number;
  nightTemp: number;
  description: string;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--color-white);
  padding: 20px;
  background: rgba(var(--color-black-rgb), 0.1);
  border-radius: 10px;
  margin: 0 15px 20px 0;
`;

const Day = styled.span`
  font-size: 1.4rem;
`;

const Temperatures = styled.div`
  display: flex;
  align-items: flex-end;
`;

const Night = styled(Celsius)`
  display: inline-block;
  margin-left: 10px;
  color: rgba(var(--color-black), 0.7);
`;

const Icon = styled.img`
  width: 50px;
  height: 50px;
`;

const DayWeather: React.FC<DayWeatherProps> = ({
  day,
  icon,
  temp,
  nightTemp,
  description,
}) => {
  return (
    <Wrapper>
      <Day>{day}</Day>
      <Icon src={weatherIcon(icon)} alt="weather icon" title={description} />
      <Temperatures>
        <Celsius size={20} value={temp} />
        <Night size={14} value={nightTemp} />
      </Temperatures>
    </Wrapper>
  );
};

export default DayWeather;
