import React from 'react'
import Weather from './Weather'

const Country = ({ country }) => {



    return (
        <>
            <h1>{country.name}</h1>
            <div>
                <strong>Capital:</strong> {country.capital} <br />
                <strong>Population:</strong> {country.population}
            </div>
            <h2>Languages</h2>
            <ul>
                {country.languages.map(language =>
                    <li key={language.name}>{language.name}</li>)}
            </ul>
            <img src={country.flag} width='164' />
            <Weather capital={country.capital} />
        </>
    )
}

export default Country