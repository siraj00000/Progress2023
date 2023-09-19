import axios from 'axios'
const API = axios.create({
    baseURL: "https://check4original.com/"
})
export default API