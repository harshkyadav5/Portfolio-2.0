import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import QuickGlance from './components/QuickGlance.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QuickGlance />
    <App />
  </React.StrictMode>,
)
