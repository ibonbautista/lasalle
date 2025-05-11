import fetchData from "./fetch.js";

async function getAllMatches(){
    const matches = await fetchData('/matches');
    return matches;
}

async function getMatchesByTeam(teamName) {
    const matches = await fetchData(`/matches/team/${teamName}`);
    return matches;
}

export {
    getAllMatches,
    getMatchesByTeam,
};