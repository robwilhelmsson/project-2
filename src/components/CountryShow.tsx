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
  const [randomCountry, setRandomCountry] = React.useState<Country>([])


  async function fetchCountry() {
    const resp = await fetch(`https://restcountries.com/v3.1/all`)
    const countries = await resp.json()
    setCountries(countries)
    setRandomCountry(countries[Math.floor(Math.random() * countries.length)])
  }

  useEffect(() => {
    fetchCountry()
  }, [])

  console.log(randomCountry)

  // function randomCountry() {
  //   const randomCountries = setRandomCountries(Math.floor(Math.random() * countries.length))
  //   setRandomCountries[0](randomCountries)
  // }
  // console.log(randomCountry())

  // const country = countries[Math.floor(Math.random() * countries.length)]
  // console.log(country)

  return (
    <section className="section">     

    <div>
      {/* <h2>{randomCountry}</h2> */}
    </div>

      {/* <div>
        {countries.map((country) => {
          return <div key={country.name.common}>
            <h2>{country.name.common}</h2>
            <img src={country.flags.png} alt={country.name.common} />
          </div>
        })
        }
      </div> */}

      {/* <div className="container">
        {countries.map((country) => {
          return <div key={country.name.common}>
            <button onClick={fetchCountry}>{country.name.common}</button>
            <button onClick={fetchCountry}>{country.name.common}</button>
            <button onClick={fetchCountry}>{country.name.common}</button>
            <button onClick={fetchCountry}>{country.name.common}</button>
            </div> 
        })}
      </div> */}

    </section>
  )

}

export default CountryShow