import Counter from "./Components/Counter";
import Message from "./Components/Message";
import { useSelector } from "./core/useSelector";
function App() {
  const data = useSelector();
  console.log(data);

  return (
    <div>
      <h1>Global state</h1>
      <Counter />
      <Message />
    </div>
  )
}

export default App
