import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Weather = ({ capital }) => {
    const [weather, setWeather] = useState('')
    const [icon, setIcon] = useState('')

    const params = {
        access_key: process.env.REACT_APP_API_KEY,
        query: capital
    }

    useEffect(() => {
        axios
            .get(`http://api.weatherstack.com/current`, {params})
            .then(response => {
                setWeather(response.data.current)
                setIcon(response.data.current.weather_icons)
            })
    }, [])

    return (
        <div>
            <h2>Weather in {capital}</h2>
            <strong>temperature:</strong>&nbsp;{weather.temperature}
            <br />
            <strong>wind:</strong>&nbsp;{weather.wind_speed} mph direction {weather.wind_dir}
            <br />
            <img src={icon} />

        </div>
    )
}

export default Weather