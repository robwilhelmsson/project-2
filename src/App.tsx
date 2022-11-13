import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import CountryShow from "./components/CountryShow"

function App() {
  return <Router>
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flag-game" element={<CountryShow />} />
      </Routes>
    </main>
  </Router>
}

export default App
