import axios from "axios";
import {ICords, IWeather} from "../types/weatherTypes.ts";

export class WeatherApi {
    static async Get5DaysForecast(cords:ICords) {
        const response = await axios.get<IWeather>(API_URL + `forecast?lat=${cords.lat}&lon=${cords.lon}&appid=${API_KEY}`);
        return response.data;
    }
}