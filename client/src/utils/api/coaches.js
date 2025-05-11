import fetchData from "./fetch.js";

async function getAllCoaches(){
    const coaches = await fetchData('/coaches');
    return coaches;
}

async function getCoachByTeamId(id){
    const coaches = await fetchData(`/coaches/team/${id}`);
    return coaches;
}

export {
    getAllCoaches,
    getCoachByTeamId
}