import React from 'react'
import Country from './Country'

const Countries = ({ countries, setFilter }) => {

    const countryList = () => countries.map(country =>
        <div key={country.numericCode}>
            {country.name} &nbsp;
            <button onClick={() => setFilter(country.name)}>show</button>
        </div>
    )

    if (countries.length === 1) return <Country country={countries[0]} />
    if (countries.length < 10 && countries.length > 0) return <>{countryList()}</>
    if (countries.length > 10) return <p>Too many matches, specify another filter</p>
    return <p>No matches</p>
}

export default Countries