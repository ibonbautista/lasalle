import fetchData from "./fetch.js";

async function getAllUsers(){
    const users = await fetchData('/users');
    return users;
}

export default getAllUsers;