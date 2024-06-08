import HeaderMenu from './components/HeaderMenu/Index'
import ScoreBoard from './components/ScoreBoard/Index'

import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  // onClick={() => setCount((count) => count + 1)}

  return (
    <>
      <HeaderMenu />
      <main>
        <ScoreBoard />
      </main>
    </>
  )
}

export default App
