import { create } from 'apisauce';
import cache from "../utilities/cache"

const apiClient = create({
    // "http://161.29.91.92:9000/api
    baseURL: "http://192.168.1.68:9000/api",
});

// Implement cache 
const get = apiClient.get;

apiClient.get = async (url, params, axiosConfig) => {
    //Online
    const response = await get(url, params, axiosConfig);

    if(response.ok){
        cache.store(url, response.data);
        return response;
    }

    //Offline (if the response from the server is not ok)
    const data = await cache.get(url);
    return data ? {ok: true, data} : response;

}
export default apiClient;
