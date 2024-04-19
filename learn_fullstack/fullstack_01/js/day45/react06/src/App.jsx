import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Counter from './Components/Counter'
import Search from './Components/Search'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'
import Counter2 from './Components/Counter2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Search />
      <VideoPlayer />
      <Counter2 />

    </>
  )
}

export default App
