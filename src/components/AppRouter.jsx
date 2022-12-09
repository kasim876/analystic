import { useContext, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

import { authRoutes, publicRoutes } from "../routes";
import { HOME_ROUTE, LOGIN_ROUTE } from "../utils/consts";

import { UserContext } from "../App";
import { observer } from "mobx-react-lite";

const AppRouter = observer(() => {
  const {user} = useContext(UserContext);

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      user.setIsAuth(true)
      user.setUser(jwtDecode(token))
    }
  }, [])

  return (
    <Routes>
      {!user.isAuth && authRoutes.map(({path, element}) => <Route key={path} path={path} element={element} />)}

      {user.isAuth && publicRoutes.map(({path, element}) => <Route key={path} path={path} element={element} /> )}
      
      <Route 
        element={<Navigate to={user.isAuth ? HOME_ROUTE : LOGIN_ROUTE} />}
        path="*"
      />
    </Routes>
  )
})

export default AppRouter
