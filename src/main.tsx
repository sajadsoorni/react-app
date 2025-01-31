import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import 'bootstrap/dist/css/bootstrap.css';
// import FirstMessageApp from './FirstMessageApp.tsx';
// import ListGroupApp from './ListGroupApp.tsx';
// import ALertApp from './ALertApp.tsx';
// import AlertCloseButttonApp from './AlertCloseButttonApp.tsx';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
