import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Countries from './components/Countries'

const App = () => {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')
  
  useEffect(() => {
    axios 
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const showCountries = () => {
    return countries.filter(country =>
      country.name.toLowerCase().includes(filter.toLowerCase()))
  }


  return (
    <>
      <div>
        find countries &nbsp;
        <Filter value={filter} onChange={event => setFilter(event.target.value)} />
        <Countries countries={showCountries()} setFilter={(newFilter) => setFilter(newFilter)} />
      </div>
    </>
  )
}

export default App