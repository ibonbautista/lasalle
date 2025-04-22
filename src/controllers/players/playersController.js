import Player from "../../models/players.js";
import {  } from "../../utils/errors.js";


async function getAll(){
    const players = await Player.findAll();
    return players;
}

export default{
    getAll
}