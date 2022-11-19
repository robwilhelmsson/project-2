import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import FlagGuesserWorld from "./components/FlagGuesserWorld"
import FlagGuesserRegion from "./components/FlagGuesserRegion"

function App() {
  return <Router>
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flag-game-all" element={<FlagGuesserWorld />} />
        <Route path="/flag-game/:region" element={<FlagGuesserRegion />} />
      </Routes>
    </main>
  </Router>
}

export default App
