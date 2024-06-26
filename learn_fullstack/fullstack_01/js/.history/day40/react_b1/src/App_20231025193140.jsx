import React from "react";

function App() {

  const h1 = React.createElement("h1",
    {
      id: "title",
      className: "title",
      style: {
        color: "red",
        fontStyle: "italic",
      },
      onClick: () => {
        console.log("click me")
      }
    }
    , "hello");
  const h2 = React.createElement("h2",
    {
      id: "title",
      className: "title",
      style: {
        color: "red",
        fontStyle: "italic",
      },
      onClick: () => {
        console.log("click me")
      }
    }
    , "hoc react ");

  const div = React.createElement("div",
    {
      className: "container"
    },
    h1, h2);


  return div
}

export { App }
