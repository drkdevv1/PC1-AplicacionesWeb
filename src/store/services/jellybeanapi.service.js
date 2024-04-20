import axios from "axios";

// Create axios instance with predefined properties
const http = axios.create({
    baseURL: 'https://jellybellywikiapi.onrender.com',
});

// Define country API service
export class JellyBeanApiService {
    getCardInfo() {
        return http.get(`/api/Beans`);
    }
}
