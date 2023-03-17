import ReactDOM from "react-dom/client";
import React from 'react'
import App from './components/App'
import './scss/index.scss'




const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
