import { useContext } from 'react'

import { ProviderContext } from './core/Provider'
function App() {
  const data = useContext(ProviderContext);
  console.log(data);

  return (
    <div>
      <h1>Global state</h1>
    </div>
  )
}

export default App
