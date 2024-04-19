import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';

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

ReactDOM.createRoot(document.getElementById('root')).render(h1);

// tạo ra object 