import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Dashboard, Login, NotFound, Peringkat, ProtectedRoute } from "./page"

function App() {

  return (
    <>  
      <Router>
        <Routes>
          <Route element={<ProtectedRoute/>}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
          <Route path="/" exact element={<Login/>} />
          <Route path="/peringkat" exact element={<Peringkat/>} />
          <Route path="*" exact element={<NotFound/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
