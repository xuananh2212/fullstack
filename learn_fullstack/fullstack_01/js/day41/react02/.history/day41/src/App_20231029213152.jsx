import React from "react";

function App() {
  return (
    <div>
      <h1>Count: 0</h1>
      <button>+</button>
    </div>
  )
}

export default App

/**
 *  class:
 * -render() -> khi bị ren-render -> gọi lại hàm này.
 * - Class React.Component: 
 * + Lifecycle
 * + State
 * 
 * Hook là gì?
 * Function: -> không có state , lifecycle -> Hook.
 * - Function đặc biệt
 * - chỉ được gọi ở cấp đầu tiên trong functional component
 * - Function bắt đầu bằng chữ use.
 */