import fetchData from "./fetch.js";

async function getAllFeedbacks(){
    const feedbacks = await fetchData('/feedbacks');
    return feedbacks;
}

async function getFeedbacksByPlayerId(player) {
    const feedbacks = await fetchData(`/feedbacks/player/${player}`);
    return feedbacks;
}


export {
    getAllFeedbacks,
    getFeedbacksByPlayerId
}