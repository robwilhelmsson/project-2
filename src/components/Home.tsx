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
          <Link to={"/flag-game-all"}>
            World
          </Link>
          <Link to={"/flag-game/:region"}>
            Europe
          </Link>
          <Link to={"/flag-game/:region"}>
            Americas
          </Link>
          <Link to={"/flag-game/:region"}>
            Oceana
          </Link>
          <Link to={"/flag-game/:region"}>
            Asia
          </Link>
          <Link to={"/flag-game/:region"}>
            Africa
          </Link>
          </div>
        </div>
    </section>
  )
}

export default Home