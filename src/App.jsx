import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Dashboard, NotFound, Peringkat } from "./page"

function App() {

  return (
    <>  
      <Router>
        <Routes>
          <Route path="/" exact element={<Dashboard/>} />
          <Route path="/peringkat" exact element={<Peringkat/>} />
          <Route path="*" exact element={<NotFound/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
