import { useState } from 'react'

import './App.css'
import Test from './pages/Test'
import Links from './pages/Links'
import Landing from './pages/Landing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Landing></Landing>
      <Links></Links>
      <Test></Test>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
