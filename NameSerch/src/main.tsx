import { StrictMode } from 'react'
import { Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import './index.css'
import App from './App.tsx'
import Game from './Game.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <StrictMode>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Game" element={<Game />} />
    </Routes>
  </StrictMode>
  </BrowserRouter>,
)
