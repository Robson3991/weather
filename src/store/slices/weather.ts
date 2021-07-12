import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../instance';
import { IWeather } from 'types';

interface WeatherState {
  data: IWeather | null;
}

type LocalePayload = IWeather;

const inistialState: WeatherState = {
  data: null,
};

const localeSlice = createSlice({
  name: 'localeData',
  initialState: inistialState,
  reducers: {
    weatherChange: (state, action: PayloadAction<LocalePayload>) => {
      state.data = action.payload;
    },
  },
});

export const { weatherChange } = localeSlice.actions;
export const selectLocale = (state: RootState) => state.weather;

export default localeSlice.reducer;
