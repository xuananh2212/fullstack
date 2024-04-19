import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App';

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


ReactDOM.createRoot(document.getElementById('root')).render(div);

// tạo ra object 