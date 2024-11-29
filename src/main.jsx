
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <CookiesProvider defaultSetCookies={{path: "/"}}>
      <App />
  </CookiesProvider>
  </BrowserRouter>
   
)
