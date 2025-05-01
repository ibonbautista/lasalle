const BASE_URL = 'http://localhost:3001/api';

async function fetchData(route) {
    const url = BASE_URL + route;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
}

export default fetchData;