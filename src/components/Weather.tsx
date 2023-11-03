import {Skeleton} from "@mui/material";
import {useTypedSelector} from "../hooks/useTypedSelector.ts";
import {fetchIcon} from "../utils/fetchIcons.ts";
import Forecast from "./Forecast.tsx";
import WeatherInfo from "./WeatherInfo.tsx";

const Weather = () => {
  const weather = useTypedSelector((x) => x.main.currentWeather);

  if (weather == null || weather === undefined) {
    return <>
      <Skeleton width="100%">
        <div style={{paddingTop: '117%'}}/>
      </Skeleton>
    </>;
  }

  return (
    <div className="p-5 relative">
      <div className="flex flex-col justify-center items-center">
        <p className="text-2xl font-semibold">{weather.name}</p>
        <p className="text-6xl font-bold">{weather.main.temp.toFixed()}°C</p>
        <img className="opacity-100 absolute top-0 right-0 -z-10" src={fetchIcon(weather.weather[0].main)} alt=""/>
        <p>{weather.weather[0].description}</p>
      </div>
      <WeatherInfo data={weather}/>
      <Forecast/>
    </div>
  );
};


export default Weather;