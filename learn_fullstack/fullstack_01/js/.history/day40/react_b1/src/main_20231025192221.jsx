import React from 'react'
import ReactDOM from 'react-dom/client'


const h1 = React.createElement("h1",
  {
    id: "title",
    className: "title",
    style: {
      color: "red",
      fontStyle: "italic",
    }
  }
  , "hello");

ReactDOM.createRoot(document.getElementById('root')).render(h1);

// tạo ra object 