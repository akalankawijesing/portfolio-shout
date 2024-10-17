import { useState } from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <div>
        <Routes>
          <Route path="/shout.lk/" element={<Header/>} />
        </Routes>
      </div>
    </Router>

    </>
  )
}

export default App
