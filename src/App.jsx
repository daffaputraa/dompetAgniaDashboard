import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Dashboard } from "./page"

function App() {

  return (
    <>  
      <Router>
        <Routes>
          <Route path="/" exact element={<Dashboard/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
