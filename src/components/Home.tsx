import { Link } from "react-router-dom"

function Home() {

  function region(e: any) {
    return e.target.value
  }

  return (
    <section>
      <div>
          <p>
            Guess the Flag
          </p>
          <div className="continentButtons">
          <Link to={"/flag-game/world"}>
            World
          </Link>
          <Link to={"/flag-game/europe"}>
            Europe
          </Link>
          <Link to={"/flag-game/americas"}>
            Americas
          </Link>
          <Link to={"/flag-game/oceania"}>
            Oceania
          </Link>
          <Link to={"/flag-game/asia"}>
            Asia
          </Link>
          <Link to={"/flag-game/africa"}>
            Africa
          </Link>
          </div>
        </div>
    </section>
  )
}

export default Home