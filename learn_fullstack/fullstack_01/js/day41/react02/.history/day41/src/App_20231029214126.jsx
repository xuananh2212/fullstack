import React from "react";

function App() {
  const [count, setCount] = React.useState(0);
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    phone: ""
  });
  console.log(count);
  const handleClick = () => {
    setCount(count + 1);
  }
  return (
    <div>
      <h1>Count: {count}</h1>
      <button
        onClick={handleClick}
      >+</button>
      <hr />
      <form action="">
        <div>
          <input type="text" name="name" placeholder="Name..." />
        </div>
        <div>
          <input type="text" name="email" placeholder="email..." />
        </div>
      </form>
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