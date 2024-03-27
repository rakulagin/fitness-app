import { combineReducers } from '@reduxjs/toolkit';
// import { weatherTodayReducer } from './slices/weatherToday';
// import { weatherForecastReducer } from './slices/weatherForecast';
// import { citiesReducer } from './slices/citySlice';
import { trainingReducer } from './slices/trainingDaySlice';

const rootReducer = combineReducers({
	// weatherToday: weatherTodayReducer,
	// weatherForecast: weatherForecastReducer,
	// cities: citiesReducer,
  trainingDay: trainingReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
