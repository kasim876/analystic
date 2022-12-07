import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { authRoutes, publicRoutes } from "../routes";
import { HOME_ROUTE, LOGIN_ROUTE } from "../utils/consts";

import { AuthContext } from "../index";

import Home from "../pages/Home";

const AppRouter = () => {
  const isAuth = useContext(AuthContext)

  console.log(isAuth)
  
  return (
    <Routes>
      {!isAuth && authRoutes.map(({path, element}) => <Route key={path} path={path} element={element} />)}

      {isAuth && publicRoutes.map(({path, element}) => <Route key={path} path={path} element={element} /> )}
      
      <Route 
        element={<Navigate to={isAuth ? HOME_ROUTE : LOGIN_ROUTE} />}
        path="*"
      />
    </Routes>
  )
}

export default AppRouter
