import { useContext, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { observer } from "mobx-react-lite";

import { authRoutes, publicRoutes } from "../routes";
import { HOME_ROUTE, LOGIN_ROUTE } from "../utils/consts";

import { UserContext } from "../index";

const AppRouter = observer(() => {
  const {user} = useContext(UserContext);

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
