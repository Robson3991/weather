import axios from 'axios';
import { useQuery } from 'react-query';
import { apiUrl } from 'constants/links';

const getWeatherByCityName = async (city: string) => {
  const { data } = await axios.get(
    `${apiUrl}?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`,
  );

  console.log(
    'api',
    `${apiUrl}?q=${city}&appid=${process.env.WEATHER_API_KEY}`,
  );
  return data;
};

function useWeather(city: string) {
  return useQuery(['weather', city], () => getWeatherByCityName(city), {
    enabled: !!city,
  });
}

export default useWeather;
