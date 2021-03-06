import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';

import Chart from '../components/chart'
import GoogleMap from '../components/google_map'

class WeatherList extends Component{
	renderWeather(cityData){

		const name = cityData.city.name;
		const temps = cityData.list.map(weather => weather.main.temp)
		const pressure = cityData.list.map(weather => weather.main.pressure)
		const humidity = cityData.list.map(weather => weather.main.humidity)

		return(
			<tr key={name}>
				<td>{name}</td>
				<td><Chart data={temps} color="orange"  unit="k"/></td>
				<td><Chart data={pressure} color="red" unit="hPa"/></td>
				<td><Chart data={humidity} color="blue" unit="%"/></td>
			</tr>
		)
	}

	render(){
		return(
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature (K)</th>
						<th>Pressure (hPa)</th>
						<th>Humidity (%)</th>
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
		)
	}
}

function mapStateToProps({ weather}){
	return { weather }
}

export default connect(mapStateToProps)(WeatherList)