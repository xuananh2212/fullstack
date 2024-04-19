import { useSelector } from "./core/useSelector";
function App() {
  const data = useSelector();
  console.log(data);

  return (
    <div>
      <h1>Global state</h1>
    </div>
  )
}

export default App
