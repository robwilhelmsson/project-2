import React, { useEffect } from "react"
import { countryCodes } from "./Countries"


interface ICountries {
  name: Name
  region: string
  flags: Image
  common: string
}

interface Name {
  name: string
  common: string
}

interface Image {
  flags: string
  png: string
}

type Country = Array<ICountries>


function CountryShow() {
  const [countries, setCountries] = React.useState<Country>([])

  function randomCountry() {
    const count = Math.floor(Math.random() * 250)
    return countryCodes[count]
  }

  async function fetchCountry() {
    const resp = await fetch(`https://restcountries.com/v3.1/alpha/${randomCountry()}`)
    const countries = await resp.json()
    setCountries(countries)
    console.log(countries)
  }

  useEffect(() => {
    fetchCountry()
  }, [])

  return (
    <section className="section">
      <div className="container">
        {countries.map((country) => {
          return <div key={country.flags.png}>
            <p>{country.name.common}</p>
            <img src={country.flags.png} alt={country.name.common} />
          </div>
        })}
        <input placeholder="Answer here" type="text" />
      </div>
    </section>
  )

}




export default CountryShow