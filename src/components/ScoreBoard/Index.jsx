import React, { useState } from 'react'
import { IoCloseOutline } from "react-icons/io5";

import '../ScoreBoard/scoreBoard.css'

const ScoreBoard = ({ countRed, setCountRed, countBlue, setCountBlue }) => {
  return (
    <section className='scoreboard-section'>
        <button className='scoreboard-button-red' onClick={() => setCountRed((countRed) => countRed + 1)}>
            <div className='line-button'></div>
        </button>
        <div className='score'>
            <p className='score-number-red'>{countRed}</p>
            <IoCloseOutline className='score-x' />
            <p className='score-number-blue'>{countBlue}</p>
        </div>
        <button className='scoreboard-button-blue' onClick={() => setCountBlue((countBlue) => countBlue + 1)}>
            <div className="line-button"></div>
        </button>
    </section>
  )
}

export default ScoreBoard