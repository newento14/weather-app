import {useTypedSelector} from "../hooks/useTypedSelector.ts";
import WeatherElement from "./WeatherElement.tsx";

const Forecast = () => {
  const weather = useTypedSelector(x => x.main.weather);

  if (!weather) {
    return <>
    </>
  }
  const weatherData = weather?.list.filter(x => x.dt_txt.includes('15:00:00'))

  return (
    <div className=" mt-6 bg-white bg-opacity-60 rounded-3xl flex flex-col gap-y-3">
      {weatherData.map(data => (
        <WeatherElement key={data.dt} displayWeather={data} currentWeather={weather.list.filter(x => x.dt_txt.includes(data.dt_txt.slice(0,10)))} />
      ))}
    </div>
  );
};

export default Forecast;