import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
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
