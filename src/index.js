import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

export const AuthContext = createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContext.Provider value={true}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AuthContext.Provider>
);
