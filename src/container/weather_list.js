import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';




class WeatherList extends Component{
    renderCity(){

        return this.props.weather.map((city) => {
            const temps = city.list.map((weather) => {
                return weather.main.temp;
            })
            const pressures = city.list.map((pres) => pres.main.pressure);
            const hums = city.list.map((hums) => hums.main.humidity);
            return (
                <tr key={city.city.id}>
                    <td>
                        <GoogleMap lon={city.city.coord.lon} lat={city.city.coord.lat}/>
                    </td>
                    <td>
                        <Chart data={temps} color="orange" unit='K'/>
                    </td>
                    <td>
                        <Chart data={pressures} color="green" unit="hPa" />
                    </td>
                    <td>
                        <Chart data={hums} color="black" unit='%'/>
                    </td>

                </tr>

            )

        })
    }
    render(){
            console.log(this.props.weather);
        return(
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Tempreture (K)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderCity()}
                </tbody>

            </table>
        )
    }
}

function mapStateToProps(state){
    return {
        weather: state.weather
    }
}

export default connect(mapStateToProps)(WeatherList);
