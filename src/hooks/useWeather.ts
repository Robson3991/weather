import axios from 'axios';
import { useQuery } from 'react-query';
import { apiWeatherUrl } from 'constants/links';
import { ICoordinates } from 'types';

const getWeather = async ({ lat, lon }: ICoordinates) => {
  const { data } = await axios.get(
    `${apiWeatherUrl}?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric&exclude=minutely,hourly`,
  );

  return data;
};

function useWeather(coordinates: ICoordinates) {
  return useQuery(['weather', coordinates], () => getWeather(coordinates), {
    enabled: !!coordinates,
  });
}

export default useWeather;
