import { combineReducers } from 'redux';
import {weatherReducer} from './weatherReducer.ts'

export const rootReducer = combineReducers({
    main: weatherReducer
});

export type RootState = ReturnType<typeof rootReducer>