import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router";
import '../src/Cascading_Style_Sheet/index.css'
import Route_Page from './Route_Page.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <Route_Page />
    </StrictMode>
  </BrowserRouter>
)
