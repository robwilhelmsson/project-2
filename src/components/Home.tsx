import { Link } from "react-router-dom"

function Home() {
  return (
    <section className="hero is-fullheight-with-navbar is-warning">
      <div className="hero-body">
        <div className="container has-text-centered">
          <p className="title is-1 has-text-centered has-text-black">
            Guess the Flag
          </p>
          <Link to={"/flag-game"} className="button is-large">
            Start!
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Home