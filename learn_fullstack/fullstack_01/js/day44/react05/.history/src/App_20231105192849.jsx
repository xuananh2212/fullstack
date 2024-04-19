import { useContext, useState } from 'react'

import { ProviderContext } from '../src/core/Provider'
function App() {
  const data = useContext(ProviderContext);

  return (
    <div>
      <h1>Global state</h1>
    </div>
  )
}

export default App
