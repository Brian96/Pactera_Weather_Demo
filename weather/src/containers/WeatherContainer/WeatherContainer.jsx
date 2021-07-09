import React from 'react'
import WeatherTable from '../../components/WeatherTable'
import { getWeatherData } from '../../services/weatherService'
import {weatherDataHandler} from '../../actions/weatherActions'
import { connect } from 'react-redux';

class WeatherContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cityList:["Sydney", "Melbourne", "Wollongong"]
        }
    }

    componentDidMount() {
        const {weatherDataHandler} = this.props
        weatherDataHandler('Sydney')
    }

    handleCityChange = (e) => {
        const {weatherDataHandler} = this.props
        console.log(e.target.value)
        weatherDataHandler(e.target.value)
    }
    


    render() {
        const {weatherData} = this.props

        console.log(weatherData)
        const{name, weather, wind, main} = weatherData
        return (
            <div>
                <select onChange={e => this.handleCityChange(e)}>
                    {this.state.cityList.map((item, i) => <option value={item} key={"key" + i}>{item}</option>)}
                </select>
                <WeatherTable city={name} time={new Date().toLocaleString()} weather={weather} main={main} wind={wind}/>
            </div>
        );
    }

};

const mapStateToProps = (state) => {
    const {weather} = state
    const{weatherData} = weather
    return {
        weatherData
    }
}


export default connect(
    mapStateToProps,
    {
        weatherDataHandler
    }
)(WeatherContainer);

