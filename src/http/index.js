import axios from "axios";

const $host = axios.create({
  baseURL: 'http://localhost:9000/'
})

export {$host}