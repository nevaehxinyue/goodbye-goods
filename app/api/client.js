import { create } from 'apisauce';

const apiClient = create({
    baseURL: "http://192.168.1.68:9000/api",
});

export default apiClient;
// "http://161.29.91.92:9000/api