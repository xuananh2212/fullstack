import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Counter from './Components/Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Counter />

    </>
  )
}

export default App
