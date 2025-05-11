import fetchData from "./fetch.js";

async function getAllMembers(){
    const members = await fetchData('/members');
    return members;
}

async function deleteMember(memberId){
    console.log("borrando miembro con id:",memberId);
    const members = await fetchData("/members/delete/" + memberId , "DELETE");
    return members;
}

export {
    deleteMember,
    getAllMembers
}