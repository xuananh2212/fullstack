import { useState } from 'react'
import './App.css'
import Post from './Components/Post/Post'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Post />
    </>
  )
}

export default App
