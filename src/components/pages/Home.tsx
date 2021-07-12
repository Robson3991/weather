import { useEffect } from 'react';
import ErrorMessage from 'components/atoms/ErrorMessage';
import Loader from 'components/atoms/Loader';
import useWeather from 'hooks/useWeather';
import { useAppDispatch } from 'store/hooks';
import { weatherChange } from 'store/slices/weather';
import CurrentWeather from 'components/molecules/CurrentWeather';
import DailyWeather from 'components/organisms/DailyWeather';

const Home: React.FC = () => {
  const { data, error, isFetching } = useWeather('Poznań');
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data) {
      dispatch(weatherChange(data));
    }
  }, [data]);

  if (isFetching) return <Loader />;
  if (error)
    return <ErrorMessage>there was a problem downloading data</ErrorMessage>;

  return (
    <>
      <CurrentWeather />
      <DailyWeather />
    </>
  );
};

export default Home;
