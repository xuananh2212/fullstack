import React from "react";

function App() {
  const [count, setCount] = React.useState(0);
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    phone: ""
  });
  console.log(count);
  // const handleClick = () => {
  //   setCount(count + 1);
  // }

  const handleSumit = (e) => {
    e.preventDefault();
    const { name, email, phone } = form;
    console.log(name, email, phone);
  }
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  return (
    <div>
      {/* <h1>Count: {count}</h1>
      <button
        onClick={handleClick}
      >+</button>
      <hr /> */}
      <form action="" onSubmit={handleSumit}>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name..."
            onChange={handleChange}

          />
        </div>
        <div>
          <input
            type="text"
            name="email"
            placeholder="email..."

          />
        </div>
        <div>
          <input
            type="number"
            name="phone"
            placeholder="sdt..."

          />
        </div>
        <button>submit</button>
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