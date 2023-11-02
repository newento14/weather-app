import {fetchIcon} from "../utils/fetchIcons.ts";
import {getDateFromTxt} from "../utils/date.ts";
import {IWeatherInfo} from "../types/weatherTypes.ts";
import {useState} from "react";
import Details from "./Details.tsx";

interface Props {
  displayWeather: IWeatherInfo
  currentWeather: IWeatherInfo[]
}

const WeatherElement = ({displayWeather, currentWeather}: Props) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <div className="border-2 rounded-3xl px-5 flex justify-between items-center hover:bg-gray-200 cursor-pointer"
           onClick={() => setModalVisible(true)}>
        <div className="w-[48px] h-[48px] flex justify-center items-center">
          <img src={fetchIcon(displayWeather.weather[0].description)} alt={displayWeather.weather[0].description}/>
        </div>
        <p className="text-3xl font-semibold">{displayWeather.main.temp.toFixed()}°C</p>
        <p>{getDateFromTxt(displayWeather.dt_txt)}</p>
      </div>
      <Details data={currentWeather} visible={modalVisible} setVisible={setModalVisible}/>
    </>
  );
};

export default WeatherElement;