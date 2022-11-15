import React, { useState, useEffect } from "react"
import _ from 'lodash'

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

interface IRandom {
  flags: {
    png: string
  }
  name: {
    common: string
  }
}

type Random = null | IRandom

// ! Start of function
function CountryShow() {

  // ! State here, countries and random Country 
  const [countries, setCountries] = React.useState<Country>([])
  const [randomCountry, setRandomCountry] = React.useState<Random>(null)

  // ! Fetch data from API
  async function fetchCountry() {
    const resp = await fetch(`https://restcountries.com/v3.1/all`)
    const countries = await resp.json()
    setCountries(countries)
    setRandomCountry(countries[Math.floor(Math.random() * countries.length)])
  }
  // ! Keep this out of async function so it can be used in return
  useEffect(() => {
    fetchCountry()
  }, [])

  // ! While the page loads, show loading page otherwise everything breaks
  if (!randomCountry) {
    return <p>Loading!</p>
  }

  // ! Get the random Country flag and name variables from data object
  const randomCountryFlag = randomCountry.flags.png
  const randomCountryName = randomCountry.name.common
  console.log(randomCountryName)

  // ! Function to produce random countries options other than correct answer
  function randomCountryAnswer() {
    const randomAnswer = countries[Math.floor(Math.random() * countries.length)]
    return randomAnswer.name.common
  }
  // ! Answers array and lodash method to shuffle the answers, 1 correct, 3 incorrect
  const answers = [randomCountryName, randomCountryAnswer(), randomCountryAnswer(), randomCountryAnswer()]
  const shuffleAnswers = _.shuffle(answers)
  console.log(shuffleAnswers)

  // ! Function to show the answers
  function answersArray() {
    return <>
      <button onClick={fetchCountry}>{shuffleAnswers[0]}</button>
      <button onClick={fetchCountry}>{shuffleAnswers[1]}</button>
      <button onClick={fetchCountry}>{shuffleAnswers[2]}</button>
      <button onClick={fetchCountry}>{shuffleAnswers[3]}</button>
    </>
  }

  // function checkAnswers() {
  //   if (randomCountryName === )
  // }

  // ! The return with JSX 
  return (
    <section className="section">
      <div className="container">
        <img src={randomCountryFlag} alt={randomCountryName} />
      </div>
      <div className="container">
        {answersArray()}
      </div>
    </section>
  )

}

export default CountryShow