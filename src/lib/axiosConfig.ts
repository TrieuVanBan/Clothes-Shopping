import axios from "axios";
import { DEFAULT_HEADER } from "../constants/app.const";


const intance = axios.create({
    baseURL: 'http://localhost:3000',
    headers: DEFAULT_HEADER
})

export default intance;