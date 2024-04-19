import "bootstrap/dist/css/bootstrap.min.css"
import { useState } from 'react'
import Post from './Components/Post/Post'
import Notifiactions from "./Components/Post/Notifiactions"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Notifiactions />
      <Post />
    </>
  )
}

export default App
