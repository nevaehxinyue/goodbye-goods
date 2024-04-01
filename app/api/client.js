import { create } from 'apisauce';

const apiClient = create({
    // "http://161.29.91.92:9000/api
    baseURL: "http://192.168.1.68:9000/api",
});

export default apiClient;
