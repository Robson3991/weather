import axios from 'axios';
import { useQuery } from 'react-query';
import { apiWeatherUrl } from 'constants/links';

const getWeather = async (city: string) => {
  const { data: cityData } = await axios.get(
    `${apiWeatherUrl}/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`,
  );

  const { coord } = cityData;

  const { data } = await axios.get(
    `${apiWeatherUrl}/onecall?lat=${coord.lat}&lon=${coord.lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric&exclude=minutely,hourly`,
  );

  return { ...cityData, ...data };
};

function useWeather(city: string) {
  return useQuery(['weather', city], () => getWeather(city), {
    enabled: !!city,
  });
}

export default useWeather;
