 import * as Service from '../services/weatherService'
 import * as Constant from '../constants/index'

 export const weatherDataHandler = city => {
     return dispatch => {
         Service.getWeatherData(city).then((response) => {
             if (response.isSuccess) {
                 dispatch(weatherData(response))
             } else {
                 dispatch(weatherData(response.error))
             }
         })
     }
 }

 export const weatherData = data => {
     return {
         type: Constant.WEATHER_DATA,
         data
     }
 }

 export const weatherError = data => {
     return {
         type: Constant.WEATHER_ERROR,
         data
     }
 }