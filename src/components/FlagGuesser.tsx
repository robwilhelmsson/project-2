import React, { useState, useEffect } from "react"
import _ from 'lodash'
import { Country, Random } from "../interface/Interface"

// ! Start of function
function FlagGuesser() {

  // ! State here, countries, random country & score
  const [countries, setCountries] = React.useState<Country>([])
  const [randomCountry, setRandomCountry] = React.useState<Random>(null)
  const [score, setScore] = React.useState(0)
  // console.log(score)

  // ! Fetch data from API
  async function fetchCountry() {
    const resp = await fetch(`https://restcountries.com/v3.1/all`)
    const countries = await resp.json()
    const filteredCountries = countries.filter((country: any) => {
      return country.unMember
    })
    setCountries(filteredCountries)
    setRandomCountry(filteredCountries[Math.floor(Math.random() * filteredCountries.length)])
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
    const handleClick = (e: any) => {
      if (e.target.value === randomCountryName) {
        setScore(score + 1)
        fetchCountry()
      } else {
        fetchCountry()
      }
    }
    return <>
      <button onClick={handleClick} value={shuffleAnswers[0]}>{shuffleAnswers[0]}</button>
      <button onClick={handleClick} value={shuffleAnswers[1]}>{shuffleAnswers[1]}</button>
      <button onClick={handleClick} value={shuffleAnswers[2]}>{shuffleAnswers[2]}</button>
      <button onClick={handleClick} value={shuffleAnswers[3]}>{shuffleAnswers[3]}</button>
    </>
  }


  // ! The return with JSX 
  return (
    <section>
      <div className="container">
        <div>
          <img src={randomCountryFlag} alt={randomCountryName} />
        </div>
        <div className="buttons">
          {answersArray()}
        </div>
      </div>
      <div className="container">
        <div>
          <h2>Current Score - {score}</h2>
        </div>
      </div>
    </section>

  )

}

export default FlagGuesser