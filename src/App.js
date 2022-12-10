import { useContext, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

import './styles/App.scss';

import AppRouter from './components/AppRouter';
import { UserContext } from "./index";

import { check } from "./http/userAPI";

const App = () => {
  const {user} = useContext(UserContext);

  useEffect(() => {
    check()
      .then(res => {
        user.setIsAuth(true);
        user.setUser(res);
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
