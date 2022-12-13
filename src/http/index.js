import axios from "axios";

export const $host = axios.create({
  baseURL: 'http://62.113.96.248:9000/user/'
})