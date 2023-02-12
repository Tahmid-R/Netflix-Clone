import axios from "axios";


//using axios to create a baseURL to instance, which can then be appended with instance.get(url)
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3"
});


export default instance;