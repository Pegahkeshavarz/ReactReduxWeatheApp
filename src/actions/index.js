import axios from 'axios';

const API_KEY = '327154ccc2111803f5b0f1701c0ba6dc';
const ROOT_url = `http://api.openweathermap.org/data/2.5/forecast?&appid=${API_KEY}`
console.log(ROOT_url);
export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city){
    const url = `${ROOT_url}&q=${city},us`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}
