import fetchData from "./fetch.js";

async function getAllRivals(){
    const rivals = await fetchData('/rivals');
    return rivals;
}

export default getAllRivals;