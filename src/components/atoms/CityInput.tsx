/* eslint-disable no-extra-boolean-cast */
import { useState } from 'react';
import useWeather from 'hooks/useWeather';
import { useAppDispatch } from 'store/hooks';
import { weatherChange } from 'store/slices/weather';
import styled from 'styled-components';

const Input = styled.input`
  height: 40px;
  width: 100%;
  max-width: 300px;
  padding: 0 10px;
  font-size: 1.5rem;
`;

const CityInput: React.FC = () => {
  const dispatch = useAppDispatch();
  const [text, setText] = useState('');

  const { data, isError } = useWeather(text);

  if (data && !isError) dispatch(weatherChange(data));

  return (
    <Input
      onChange={(e) => setText(e.target.value)}
      value={text}
      placeholder="write city name"
    />
  );
};

export default CityInput;
