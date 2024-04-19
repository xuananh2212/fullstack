import "bootstrap/dist/css/bootstrap.min.css"
import { useState } from 'react'
import Post from './Components/Post/Post'
import Notifiactions from "./Components/Post/Notifiactions"

function App() {
  const [amount, setAmout] = useState(0);

  return (
    <>
      <Notifiactions amout={amount} />
      <Post setAmout={setAmout} />
    </>
  )
}

export default App
