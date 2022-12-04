import { LOGIN_ROUTE, REGISTRATION_ROUTE, NEWS_ROUTE, REPORTS_PUBLIC_ROUTE, REPORTS_PERSONAL_ROUTE, REPORTS_CREATE_ROUTE, PACKAGES_ROUTE, PROFILE_ROUTE, PROFILE_EDIT_ROUTE, HOME_ROUTE } from './utils/consts';

import Login from './pages/Login';
import Registration from './pages/Registration';
import Home from './pages/Home';
import News from './pages/News';
import ReportsPublic from './pages/ReportsPublic';
import ReportsPersonal from './pages/ReportsPersonal';
import ReportsCreate from './pages/ReportsCreate';
import Packages from './pages/Packages';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';

export const authRoutes = [
  {
    path: LOGIN_ROUTE,
    element: <Login />
  },
  {
    path: REGISTRATION_ROUTE,
    element: <Registration />
  },
]

export const publicRoutes = [
  {
    path: HOME_ROUTE,
    element: <Home />
  },
  {
    path: NEWS_ROUTE,
    element: <News />
  },
  {
    path: REPORTS_PERSONAL_ROUTE,
    element: <ReportsPersonal />
  },
  {
    path: REPORTS_PUBLIC_ROUTE,
    element: <ReportsPublic />
  },
  {
    path: REPORTS_CREATE_ROUTE,
    element: <ReportsCreate />
  },
  {
    path: PACKAGES_ROUTE,
    element: <Packages />
  },
  {
    path: PROFILE_ROUTE,
    element: <Profile />
  },
  {
    path: PROFILE_EDIT_ROUTE,
    element: <ProfileEdit />
  },
]