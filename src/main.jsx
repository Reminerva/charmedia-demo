import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './pages/component/Header.jsx'
import Footer from './pages/component/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Header /> */}
    <App />
    <Footer />
  </StrictMode>,
)
