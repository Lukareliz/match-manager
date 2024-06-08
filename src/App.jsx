import { useState, useEffect, useRef } from 'react'
import HeaderMenu from './components/HeaderMenu/Index'
import ScoreBoard from './components/ScoreBoard/Index'

import './App.css'

function App() {
  //SCORE
  const [countRed, setCountRed] = useState(0)
  const [countBlue, setCountBlue] = useState(0)

  const resetCounts = () => {
    setCountRed(0);
    setCountBlue(0);
    setTime(0);
    setIsRunning(false);
  }

  const controlTimer = () => {
    if(isRunning == true) {
      setIsRunning(false)
    } else {
      setIsRunning(true)
    }
  }

  //TIMER

  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [isRunning]);

  return (
    <>
      <HeaderMenu resetCounts={resetCounts} controlTimer={controlTimer} isRunning={isRunning} />
      <p className='timer'>{formatTime(time)}</p>
      <main>
        <ScoreBoard countRed={countRed} setCountRed={setCountRed} countBlue={countBlue} setCountBlue={setCountBlue} />
      </main>
    </>
  )
}

export default App
