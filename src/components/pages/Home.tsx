import ErrorMessage from 'components/atoms/ErrorMessage';
import Loader from 'components/atoms/Loader';
import useWeather from 'hooks/useWeather';

const Home = () => {
  const { data, error, isFetching } = useWeather({
    lat: 33.44,
    lon: -94.04,
  });

  console.log(data);
  if (error) console.log(error);

  if (isFetching) return <Loader />;
  if (error)
    return <ErrorMessage>there was a problem downloading data</ErrorMessage>;

  return <>test</>;
};

export default Home;
