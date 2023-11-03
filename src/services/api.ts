import axios from "axios";
import {ICords, IWeather} from "../types/weatherTypes.ts";
import {API_KEY, API_URL } from "../constants/api.ts";

export class WeatherApi {
  static async get5DaysForecast(cords: ICords) {
    const response = await axios.get<IWeather>(API_URL + `forecast?lat=${cords.lat}&lon=${cords.lon}&appid=${API_KEY}&units=metric`);
    return response.data;
  }

  static async getCurrentWeather(cords: ICords) {
    const response = await axios.get<IWeather>(API_URL + `weather?lat=${cords.lat}&lon=${cords.lon}&appid=${API_KEY}&units=metric`);
    return response.data;
  }
}