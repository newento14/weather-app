import WaterDropIcon from "@mui/icons-material/WaterDrop";
import CloudIcon from "@mui/icons-material/Cloud";
import AirIcon from "@mui/icons-material/Air";
import {getCardinal} from "../utils/degConverter.ts";
import {ICurrentWeather, IWeatherInfo} from "../types/weatherTypes.ts";

interface Props {
  data: IWeatherInfo | ICurrentWeather
}
const WeatherInfo = ({data}:Props) => {
  return (
    <div className="rounded-2xl flex justify-between items-center px-6 bg-white bg-opacity-60 border-2 mt-6">
      <div className="text-center">
        <p>Humidity</p>
        <WaterDropIcon />
        <p>{data.main.humidity}%</p>
      </div>
      <div className="text-center">
        <p>Cloudiness</p>
        <CloudIcon />
        <p>{data.clouds.all}%</p>
      </div>
      <div className="text-center">
        <p>Wind</p>
        <AirIcon />
        <div className="flex gap-x-1">
          <p>{getCardinal(data.wind.deg)}</p>
          <p>{data.wind.speed} m/s</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;