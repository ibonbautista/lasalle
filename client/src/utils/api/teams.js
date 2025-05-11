import fetchData from "./fetch.js";

async function getAllTeams(){
    const teams = await fetchData('/teams');
    return teams;
}

export default getAllTeams;