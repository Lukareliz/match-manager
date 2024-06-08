import { IoRefresh } from "react-icons/io5";
import { IoPlay } from "react-icons/io5";
import { IoPauseOutline } from "react-icons/io5";
import { IoShuffleOutline } from "react-icons/io5";

import '../HeaderMenu/headerMenu.css'

const HeaderMenu = ({ resetCounts, controlTimer, isRunning }) => {
  return (
    <header className="header-menu">
      <button className="header-menu-button" onClick={resetCounts}><IoRefresh className="header-menu-icon" /></button>
      <button className="header-menu-button" onClick={controlTimer}>
        {isRunning ? <IoPauseOutline className="header-menu-icon" /> : <IoPlay className="header-menu-icon" />}
      </button>
      <button className="header-menu-button"><IoShuffleOutline className="header-menu-icon" /></button>
    </header>
  )
}

export default HeaderMenu