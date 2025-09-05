import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'c5aaf3acf5c7492e9a8c46eff7054ffe'
    }
})