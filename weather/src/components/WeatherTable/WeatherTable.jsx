const WeatherTable = (props) => {
    return (
        <div>
            
            {props.city == null ?<p>Loading...</p> 
            :<table border="1">
            <tbody>
                <tr>
                    <td>City</td>
                    <td>{props.city}</td>
                </tr>
                <tr>
                    <td>Updated time</td>
                    <td>{props.time}</td>
                </tr>
                <tr>
                    <td>Weather</td>
                    <td>{props.weather[0].description}</td>
                </tr>
                <tr>
                    <td>Temperature</td>
                    <td>{props.main.temp}°C</td>
                </tr>
                <tr>
                    <td>Wind</td>
                    <td>{props.wind.speed}km/h</td>
                </tr>
            </tbody>

        </table>
           }
            
        </div>
    );
};

export default WeatherTable;