import * as Constants from '../constants'

const INIT_STATE = {
    weatherData: {},
    weatherError: null
}

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case Constants.WEATHER_DATA:
            return Object.assign({}, state, {
                weatherData: action.data
            })
        case Constants.WEATHER_ERROR:
            return Object.assign({}, state, {
                weatherError: action.data
            })
        default:
            return state;
    }
}