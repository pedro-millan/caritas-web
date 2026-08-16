import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './styles/global.css';

// ponytail: Chrome's native ScrollTimeline/ViewTimeline API makes Framer
// Motion's useScroll take an "accelerated" tracking path that crashes on
// unmount during SPA route changes (Chrome-only; Safari has no native
// support so it never hits this path). We don't use CSS scroll-driven
// animations anywhere, so hiding the API is safe and makes scroll tracking
// behave the same, stable way in every browser. Remove once Framer Motion
// ships a fix upstream.
delete window.ScrollTimeline;
delete window.ViewTimeline;

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
