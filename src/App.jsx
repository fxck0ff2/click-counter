import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Click Counter</h1>
      <span>Clicks: {count}</span>
      <div>
        <button onClick={() => setCount((count) => count + 1)} id='add'>
          Increase Count
        </button>
        <button onClick={() => setCount(0)} id='reset'>
          Reset Count
        </button>
      </div>
    </>
  )
}

export default App
