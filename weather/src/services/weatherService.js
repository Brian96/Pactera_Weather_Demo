import { getRequest } from '../utils/requestUtil'
import { WEATHER_URL, WEATHER_API_KEY } from '../constants'

export const getWeatherData = city => {
    return getRequest(`${WEATHER_URL}weather?q=${city}&units=metric&APPID=${WEATHER_API_KEY}`, {})
        .then((response) => {
            response.isSuccess = true
            return response
        })
        .catch(() => {
            console.log("Error")
        })
}