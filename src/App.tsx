import {useGeolocated} from "react-geolocated";
import {useEffect} from "react";
import Header from "./components/Header.tsx";
import Weather from "./components/Weather.tsx";
import {useDispatch} from "react-redux";
import {ActionTypes} from "./types/reducers/weatherReducerTypes.ts";
import {WeatherApi} from "./services/api.ts";

const App = () => {
  const dispatch = useDispatch();
  const {coords, isGeolocationAvailable} =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: false,
      },
      userDecisionTimeout: 5000,
    });

  useEffect(() => {
    if (coords) {
      const fetchData = async () => {
        const h = await WeatherApi.getCurrentWeather({lat: coords.latitude, lon: coords.longitude});
        dispatch({
          type: ActionTypes.SET_CURRENT_WEATHER,
          payload: h
        });
        dispatch({
          type: ActionTypes.SET_WEATHER,
          payload: await WeatherApi.get5DaysForecast({lat: coords.latitude, lon: coords.longitude})
        })
      }
      fetchData();
    }
  }, [coords, isGeolocationAvailable]);

  return (
    <div className="w-[420px] h-fit border-2 bg-white bg-opacity-10	rounded-2xl">
      <Header/>
      <Weather/>
    </div>
  )
}

export default App
