import {Actions, ActionTypes, IState} from "../../types/reducers/weatherReducerTypes.ts";

const defaultState: IState = {
    weather: null,
    currentWeather: null,
    isLoading: true,
}

export const weatherReducer = (state = defaultState, action: Actions) => {
    switch (action.type) {
        case ActionTypes.SET_IS_LOADING: {
            return {
                ...state,
                isLoading: action.payload
            }
        }
        case ActionTypes.SET_CURRENT_WEATHER: {
            return {
                ...state,
                currentWeather: action.payload
            }
        }
        case ActionTypes.SET_WEATHER: {
            return {
                ...state,
                weather: action.payload
            }
        }
        default: {
            return state;
        }
    }
}