import { LOGIN_ROUTE, REGISTRATION_ROUTE, NEWS_ROUTE, REPORTS_PUBLIC_ROUTE, REPORTS_PERSONAL_ROUTE, REPORTS_CREATE_ROUTE, PACKAGES_ROUTE, PROFILE_ROUTE, PROFILE_EDIT_ROUTE, HOME_ROUTE } from '../../utils/consts';

const apps = "#apps";
const portrait = "#portrait";
const book = "#book";
const document = "#document";
const documentSign = "#document-signed";
const bag = "#bag";


export default [
  {
    text: "Главная",
    link: HOME_ROUTE,
    icon: apps,
  },
  {
    text: "Личный кабинет",
    link: PROFILE_ROUTE,
    icon: portrait,
  },
  {
    text: "Новости",
    link: NEWS_ROUTE,
    icon: book,
  },
  {
    text: "Общедоступные отчёты",
    link: REPORTS_PUBLIC_ROUTE,
    icon: document,
  },
  {
    text: "Индивидуальные отчёты",
    link: REPORTS_PERSONAL_ROUTE,
    icon: documentSign,
  },
  {
    text: "Пакеты услуг",
    link: PACKAGES_ROUTE,
    icon: bag,
  },
]