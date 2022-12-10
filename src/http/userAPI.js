import jwtDecode from "jwt-decode";

import { $host, $authHost } from "./index";

export const login = async (email, password) => {
  const {data} = await $host.post('login', { email, password })
  const token = data
  
  localStorage.setItem("token", token);

  return jwtDecode(token)
}

export const registration = async (email, password, isCompany, company, fullName) => {
  const {data} = await $host.post('registration', { email, password, isCompany, company, fullName })
  const token = data

  localStorage.setItem("token", token);

  return jwtDecode(token)
}

export const check = async () => {
  const {data} = await $host.get('auth', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`
    }
  })
  const token = data

  localStorage.setItem("token", token);

  return jwtDecode(token)
}