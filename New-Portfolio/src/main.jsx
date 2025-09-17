import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css'
import App from './App.jsx'
import "@fontsource/roboto";
import "@fontsource/oswald";
import "@fontsource/dm-serif-display";
import "@fontsource/playfair-display";
import "@fontsource/roboto-slab";
import "@fontsource/noto-sans-jp";
import "@fontsource/lora"
import "@fontsource/anek-telugu"
import "@fontsource/roboto-mono";
import "@fontsource/eb-garamond";
import "@fontsource/libertinus-sans";




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
