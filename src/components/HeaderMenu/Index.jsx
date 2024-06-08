import { IoRefresh } from "react-icons/io5";
import { IoPauseOutline } from "react-icons/io5";
import { IoShuffleOutline } from "react-icons/io5";

import '../HeaderMenu/headerMenu.css'

const HeaderMenu = () => {
  return (
    <header className="header-menu">
      <button><IoRefresh className="header-menu-icon"/></button>
      <button><IoPauseOutline className="header-menu-icon"/></button>
      <button><IoShuffleOutline className="header-menu-icon"/></button>
    </header>
  )
}

export default HeaderMenu