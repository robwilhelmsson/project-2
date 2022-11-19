import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import FlagGuesserWorld from "./components/FlagGuesserWorld"


function App() {
  return <Router>
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flag-game/world" element={<FlagGuesserWorld />} />
        <Route path="/flag-game/:region" element={<FlagGuesserWorld />} />
      </Routes>
    </main>
  </Router>
}

export default App
