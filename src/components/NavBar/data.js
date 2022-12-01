const apps = "#apps";
const portrait = "#portrait";
const book = "#book";
const document = "#document";
const documentSign = "#document-signed";
const bag = "#bag";
const chat = "#chat";

export default [
  {
    text: "Главная",
    link: "/home",
    icon: apps,
  },
  {
    text: "Личный кабинет",
    link: "/profile",
    icon: portrait,
  },
  {
    text: "Новости",
    link: "/news",
    icon: book,
  },
  {
    text: "Общедоступные отчёты",
    link: "/public-reports",
    icon: document,
  },
  {
    text: "Индивидуальные отчёты",
    link: "/personal-reports",
    icon: documentSign,
  },
  {
    text: "Пакеты услуг",
    link: "/packages",
    icon: bag,
  },
  {
    text: "Заявки",
    link: "/requests",
    icon: chat,
  },
]