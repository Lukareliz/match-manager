import { useState } from 'react'
import HeaderMenu from './components/HeaderMenu/Index'
import ScoreBoard from './components/ScoreBoard/Index'

import './App.css'

function App() {
  const [countRed, setCountRed] = useState(0)
  const [countBlue, setCountBlue] = useState(0)

  const resetCounts = () => {
    setCountRed(0);
    setCountBlue(0);
  }

  return (
    <>
      <HeaderMenu resetCounts={resetCounts}/>
      <main>
        <ScoreBoard countRed={countRed} setCountRed={setCountRed} countBlue={countBlue} setCountBlue={setCountBlue}/>
      </main>
    </>
  )
}

export default App
