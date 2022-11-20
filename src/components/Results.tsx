import FlagGuesserWorld from "./FlagGuesserWorld"
import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

interface IScore {
  score: number
  count: number
}

function Results({ score, count }: IScore) {

  return (
    <>
      <div id="results-container" className="container">
        <div className="container">
          <h2 className="title is-3">Congrats!</h2>
          <h2 className="subtitle is-4">{`You scored ${score} / ${count}`}</h2>
        </div>
      </div>
      <div className="container">
        <Link to={"/"} className="button is-small">
          Return To Main Menu
        </Link>
      </div>
    </>
  )
}

export default Results