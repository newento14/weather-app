import axios from "axios";
import {ICords, IWeather} from "../types/weatherTypes.ts";

export class WeatherApi {
  static async get5DaysForecast(cords: ICords) {
    const response = await axios.get<IWeather>(process.env.VITE_API_URL + `forecast?lat=${cords.lat}&lon=${cords.lon}&appid=${process.env.VITE_API_KEY}&units=metric`);
    return response.data;
  }

  static async getCurrentWeather(cords: ICords) {
    const response = await axios.get<IWeather>(process.env.VITE_API_URL + `weather?lat=${cords.lat}&lon=${cords.lon}&appid=${process.env.VITE_API_KEY}&units=metric`);
    return response.data;
  }
}