import React from 'react'
import { IoCloseOutline } from "react-icons/io5";

import '../ScoreBoard/scoreBoard.css'

const ScoreBoard = () => {
  return (
    <section className='scoreboard-section'>
        <button className='scoreboard-button-red'>
            <div className='line-button'></div>
        </button>
        <div className='score'>
            <p className='score-number-red'>0</p>
            <IoCloseOutline className='score-x' />
            <p className='score-number-blue'>0</p>
        </div>
        <button className='scoreboard-button-blue'>
            <div className="line-button"></div>
        </button>
    </section>
  )
}

export default ScoreBoard