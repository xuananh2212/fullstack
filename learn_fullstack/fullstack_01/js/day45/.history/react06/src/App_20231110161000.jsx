import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Counter from './Components/Counter'
import Search from './Components/Search'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Search />
      <VideoPlayer />

    </>
  )
}

export default App
