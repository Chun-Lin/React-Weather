import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import _ from 'lodash';

class WeatherList extends Component {
    renderWeather = cityData => {
        const name = cityData.city.name;
        const temps = _.map(cityData.list.map(weather => weather.main.temp), temp => temp - 273);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);

        return (
            <tr key={name}>
                <td>{name}</td>
                <td>
                    <Chart data={temps} color="orange" units="C" height={45} width={80} />
                </td>
                <td>
                    <Chart data={pressures} color="blue" units="hpa" height={45} width={80}/>
                </td>
                <td>
                    <Chart data={humidities} color="black" units="%" height={45} width={80}/>
                </td>
            </tr>
        );
    };

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>城市</th>
                        <th>溫度</th>
                        <th>壓力</th>
                        <th>濕度</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(cityData =>
                        this.renderWeather(cityData)
                    )}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({ weather }) {
    // this {weather} is equal to const weather = state.weather

    return { weather }; // this {weather} is equal to {weather: weather}
}

export default connect(mapStateToProps)(WeatherList);
