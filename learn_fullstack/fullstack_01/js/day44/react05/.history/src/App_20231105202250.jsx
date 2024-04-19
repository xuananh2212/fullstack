import Chat from "./Components/Chat";
import Counter from "./Components/Counter";
import Message from "./Components/Message";
import { useSelector } from "./core/useSelector";
function App() {
  const data = useSelector();
  console.log(data);

  return (
    <div>
      <Chat></Chat>
    </div>
  )
}

export default App
