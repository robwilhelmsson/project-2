import { Link } from "react-router-dom"

function Home() {

  function region(e: any) {
    return e.target.value
  }

  return (
    <section className="home-menu">
      <div className="container-area">
        <div className="title is-2">
          GUESS THE FLAG
        </div>
        <div className="subtitle is-6">
          Choose the whole world or a continent, and guess as many flags as you can!
        </div>
        <div className="container">
          <Link to={"/flag-game/world"} id="cont-button" className="button is-link is-outlined is-small">
            World
          </Link>
          <Link to={"/flag-game/europe"} id="cont-button" className="button is-link is-outlined is-small">
            Europe
          </Link>
          <Link to={"/flag-game/americas"} id="cont-button" className="button is-link is-outlined is-small">
            Americas
          </Link>
          <Link to={"/flag-game/oceania"} id="cont-button" className="button is-link is-outlined is-small">
            Oceania
          </Link>
          <Link to={"/flag-game/asia"} id="cont-button" className="button is-link is-outlined is-small">
            Asia
          </Link>
          <Link to={"/flag-game/africa"} id="cont-button" className="button is-link is-outlined is-small">
            Africa
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Home