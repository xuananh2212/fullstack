import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Counter from './Components/Counter'
import Search from './Components/Search'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Search />

    </>
  )
}

export default App