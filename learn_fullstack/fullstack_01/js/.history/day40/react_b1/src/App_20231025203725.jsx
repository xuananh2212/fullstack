// import React from "react";

function App() {
  // const number = 10;
  // const range = [...Array(number).keys()];
  // const li = range.map((index) => React.createElement("li", {}, `items${index}`))
  // const ul = React.createElement("ul", {
  //   className: "menu"
  // }, ...li);
  // const h1 = React.createElement("h1",
  //   {
  //     id: "title",
  //     className: "title",
  //     style: {
  //       color: "red",
  //       fontStyle: "italic",
  //     },
  //     onClick: () => {
  //       console.log("click me")
  //     }
  //   }
  //   , "hello");
  // const h2 = React.createElement("h2",
  //   {
  //     id: "title",
  //     className: "title",
  //     style: {
  //       color: "red",
  //       fontStyle: "italic",
  //     },
  //     onClick: () => {
  //       console.log("click me")
  //     }
  //   }
  //   , "hoc react ");

  // const div = React.createElement("div",
  //   {
  //     className: "container"
  //   },
  //   h1, ul, h2);

  const title = <h2>toi la tuan anh</h2>
  const isPrimary = true;
  const handlerClick = (title) => {
    console.log("F8", title);
  }

  /**
   *  Render 1 danh sách => chuyển về array
   * 
   */
  const list = ["item1", "item2", "item2"];
  const isLogin = true;
  const Product = () => {
    return isLogin ? <h2> không thể login</h2> : <h2>login</h2>
  }
  const div2 = (
    <div className="container">
      {title}
      <Product />
      <h3>Học lập trình không khó , khó là nguoi hoc</h3>
      <h3>Học lập trình không khó , khó là nguoi hoc</h3>
      <h3>Học lập trình không khó , khó là nguoi hoc</h3>
      <h3>Học lập trình không khó , khó là nguoi hoc</h3>
      <ul className="menu">
        <li>item1</li>
        <li>item2</li>
        <li>item3</li>
      </ul>
      {list.map((item, index) => <h3 key={index}>{item}</h3>)}
      <button
        className={`btn ${isPrimary ? "btn-primary" : null}`}
        onClick={() => handlerClick("i love you")}
      >click me</button>
    </div>
  )
  return div2
}

export { App }
