import client from "./client";

const send = (message, listingId) => {
    return client.post('/messages', {
        message,
        listingId,
    })
};

const getMessages = () => {
    return client.get('/messages');
};

const deleteMessage = (messageId) => {
    return client.post(`/messages/${messageId}`);

}


export default { send, getMessages, deleteMessage };