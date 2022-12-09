import { createContext, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import './styles/App.scss';

import AppRouter from './components/AppRouter';
import UserStore from './store/UserStore';

export const UserContext = createContext(null);

const App = () => {
  return (
    <UserContext.Provider value={{user: new UserStore}}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
