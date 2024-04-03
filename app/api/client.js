import { create } from 'apisauce';
import cache from "../utilities/cache";
import authStorage from '../auth/authTokenStorage';

const apiClient = create({
    // "http://161.29.91.92:9000/api
    baseURL: "http://172.23.51.11:9000/api",
});
// For protecting APIs
apiClient.addAsyncRequestTransform(async(request) => {
    const authToken = await authStorage.getToken();
    console.log(`tokenReceived By apiClient: ${authToken}`)
    if(!authToken) return;
    request.headers['Authorization'] = authToken;
    console.log(`requestHeader: ${request.headers['Authorization']}`)
})

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
