import axios from 'axios';

const API_KEY = 'b6177ed4871a8d8b9e0358bb1af82da1';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function featchWeather(city) {
	const url = `${ROOT_URL}&q=${city},us`;
	const request = axios.get(url);
	
	return{
		type: FETCH_WEATHER,
		payload: request,
	}
}