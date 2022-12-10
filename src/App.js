import { useContext, useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import './styles/App.scss';

import AppRouter from './components/AppRouter';
import Spinner from './components/Spinner/Spinner';
import { UserContext } from "./index";

import { check } from "./http/userAPI";

const App = () => {
  const [loading, setLoading] = useState(true);
  
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
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return <Spinner />
  }

  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
