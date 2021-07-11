export interface ICoordinates {
  lat: number;
  lon: number;
}

type WeatherAPI = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

export interface IWeather {
  current: {
    temp: number;
    feels_like: number;
    weather: Array<WeatherAPI>;
  };
  daily: [
    {
      temp: {
        day: number;
        min: number;
        max: number;
        might: number;
      };
      weather: Array<WeatherAPI>;
    },
  ];
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
}
