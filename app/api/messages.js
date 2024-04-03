import client from "./client";

const send = (message, listingId) => {
    return client.post('/messages', {
        message,
        listingId,
    })
};

const getMessages = () => {
    return client.get('/messages');
}

export default { send, getMessages };