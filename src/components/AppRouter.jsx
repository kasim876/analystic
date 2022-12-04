import { Routes, Route, Navigate } from "react-router-dom";
import { authRoutes, publicRoutes } from "../routes";

import Home from "../pages/Home";

const AppRouter = () => {
  return (
    <Routes>
      {authRoutes.map(({path, element}) => <Route key={path} path={path} element={element} />)}

      {publicRoutes.map(({path, element}) => <Route key={path} path={path} element={element} /> )}
    </Routes>
  )
}

export default AppRouter
