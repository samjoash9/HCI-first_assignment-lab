import React from 'react';
import './index.css';
import { createRoot } from 'react-dom/client';
import { App } from './App';
const container = document.getElementById('root');
// React 19 requires a non-null assertion here since getElementById might return null
if (!container) throw new Error('Root element not found');
const root = createRoot(container);
root.render(<React.StrictMode>
    <App />
  </React.StrictMode>);