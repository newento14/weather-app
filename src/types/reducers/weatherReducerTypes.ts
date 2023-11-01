import {ICurrentWeather, IWeather} from "../weatherTypes.ts";


export interface IState{
    weather: IWeather | null,
    currentWeather: ICurrentWeather | null,
    isLoading: boolean,
}

export enum ActionTypes {
    SET_WEATHER = "SET_WEATHER",
    SET_CURRENT_WEATHER = "SET_CURRENT_WEATHER",
    SET_IS_LOADING = "SET_IS_LOADING",
}

interface FetchSetWeather {
    type: ActionTypes.SET_WEATHER,
    payload: IWeather,
}

interface FetchSetCurrentWeather {
    type: ActionTypes.SET_CURRENT_WEATHER,
    payload: ICurrentWeather,
}

interface FetchSetIsLoading {
    type: ActionTypes.SET_IS_LOADING,
    payload: boolean,
}

export type Actions = FetchSetWeather | FetchSetCurrentWeather | FetchSetIsLoading;