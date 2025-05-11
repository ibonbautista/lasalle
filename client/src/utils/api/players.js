import fetchData from "./fetch.js";

async function getAllPlayers(){
    const players = await fetchData('/players');
    return players;
}

async function getPlayerById(player_id){
    const player = await fetchData(`/players/${player_id}`);
    return player;
}

async function editPlayer(player_id,playerData){
    const player = await fetchData("/players/edit/" + player_id , "PATCH", playerData);
    return player;
}

export {
    getAllPlayers,
    getPlayerById,
    editPlayer
}