import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {NextUIProvider} from "@nextui-org/react";
import {BrowserRouter} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <NextUIProvider>
    <main className="light text-foreground bg-background">
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </main>
  </NextUIProvider>
// </React.StrictMode>
);

reportWebVitals();
