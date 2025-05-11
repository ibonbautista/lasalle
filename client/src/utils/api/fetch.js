import { getToken } from "../localStorage.js";

const BASE_URL = 'http://localhost:3001/api';

async function fetchData(route,method='GET',data=null) {
    const url = BASE_URL + route;
    /* const token = getToken();  */
    const options = {
        method : method,
        headers: {'Content-Type' : 'application/json'},
        credentials: 'include'
    }
    if(data){
        options.body = JSON.stringify(data);
    }

    /* if(token){ options.headers['Authorization'] = 'Bearer ' + token; } */

    const response = await fetch(url,options);
    const responseData = await response.json();
    console.log(responseData);
    return responseData;
}

export default fetchData;