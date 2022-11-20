import React, { useState, useEffect } from "react"
import _ from 'lodash'
import { Country, Random } from "../interface/Interface"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import Results from "./Results"

// ! Start of function
function FlagGuesserWorld() {

  // ! State here, countries, random country & score
  const [countries, setCountries] = React.useState<Country>([])
  const [remainingCountries, setRemainingCountries] = React.useState<Country>([])
  const [randomCountry, setRandomCountry] = React.useState<Random>(null)
  const [score, setScore] = React.useState(0)
  const [correctName, setCorrectName] = React.useState('')
  const [correctFlag, setCorrectFlag] = React.useState('')
  const [count, setCount] = React.useState(0)

  const { region } = useParams()
  function checkRegion() {
    return !region ? 'all' : `region/${region}`
  }

  // ! Fetch data from API
  async function fetchInitialCountry() {
    const resp = await fetch(`https://restcountries.com/v3.1/${checkRegion()}`)
    const countries = await resp.json()
    const filteredCountries = countries.filter((country: any) => {
      return country.unMember
    })
    setCountries(filteredCountries)
    setRandomCountry(filteredCountries[Math.floor(Math.random() * filteredCountries.length)])
    setRemainingCountries(filteredCountries)
  }

  // ! Keep this out of async function so it can be used in return
  useEffect(() => {
    fetchInitialCountry()
  }, [])

  // ! Function to get a new random country and remove the old one from the array
  function getRandomCountryAndRemove() {
    const NewRandomCountry = remainingCountries[Math.floor(Math.random() * remainingCountries.length)]
    const NewRemainingCountries = remainingCountries.filter((country) => {
      return country !== NewRandomCountry
    })
    setRandomCountry(NewRandomCountry)
    setRemainingCountries(NewRemainingCountries)
  }

  // ! While the page loads, show loading page otherwise everything breaks
  if (remainingCountries.length === 0) {
    return <Results
      score={score}
      count={count}
    />
  } else if (!randomCountry) {
    return <p>Loading!</p>
  }

  // ! Get the random Country flag and name variables from data object
  const randomCountryFlag = randomCountry.flags.png
  const randomCountryName = randomCountry.name.common
  // console.log(randomCountryName)

  // ! Function to produce random countries options other than correct answer
  function randomCountryAnswer() {
    const randomAnswer = countries[Math.floor(Math.random() * countries.length)]
    return randomAnswer.name.common
  }

  // ! Answers array and lodash method to shuffle the answers, 1 correct, 3 incorrect
  const answers = [randomCountryName, randomCountryAnswer(), randomCountryAnswer(), randomCountryAnswer()]
  const shuffleAnswers = _.shuffle(answers)

  // ! Function to show the answers
  function answersArray() {
    const handleClick = (e: any) => {
      if (e.target.value === randomCountryName) {
        setCorrectName(randomCountryName)
        setCorrectFlag(randomCountryFlag)
        setScore(score + 1)
        setCount(count + 1)
        getRandomCountryAndRemove()
      } else {
        setCorrectName(randomCountryName)
        setCorrectFlag(randomCountryFlag)
        setCount(count + 1)
        getRandomCountryAndRemove()
      }
    }
    return <>
      <button onClick={handleClick} value={shuffleAnswers[0]} id="guess-button" className="button is-info is-small">{shuffleAnswers[0]}</button>
      <button onClick={handleClick} value={shuffleAnswers[1]} id="guess-button" className="button is-info is-small">{shuffleAnswers[1]}</button>
      <button onClick={handleClick} value={shuffleAnswers[2]} id="guess-button" className="button is-info is-small">{shuffleAnswers[2]}</button>
      <button onClick={handleClick} value={shuffleAnswers[3]} id="guess-button" className="button is-info is-small">{shuffleAnswers[3]}</button>
    </>
  }

  // ! The return with JSX 
  return (
    <>

      <section className="container">
        <div>
          <Link to={"/"} className="button is-small">
            Main Menu
          </Link>
        </div>
        <div className="container">
          <div>
            <img src={randomCountryFlag} alt={randomCountryName} />
          </div>
          <div id="answer-buttons" className="container">
            {answersArray()}
          </div>
        </div>
        <div id="answers-box" className="container">
          <div className="container">
            <h2>Flags remaining - {remainingCountries.length}</h2>
            <h2>Current Score - {score}</h2>
          </div>
          <div id="correct-answer-container" className="container">
            <h2>The answer was - {correctName} </h2>
            <img id="answerImg" src={correctFlag} alt={correctName} />
          </div>
        </div>
      </section>
    </>

  )

}

export default FlagGuesserWorld