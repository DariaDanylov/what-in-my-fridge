import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // רק ייבוא של App
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App /> {/* רק App, בלי שום Router מסביב */}
  </React.StrictMode>
);