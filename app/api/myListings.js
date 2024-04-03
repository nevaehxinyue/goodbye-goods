
import client from "./client";

const getMyListings = () => {
    return client.get('/my');
}

export default { getMyListings }