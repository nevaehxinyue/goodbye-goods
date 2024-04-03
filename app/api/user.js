import client from "./client";

const getUser = (userId) => client.get(`/user/${userId}`);

export default { getUser};