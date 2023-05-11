import axios from "axios";

// Entrez votre clé api ici 
const apiKey = 'f23a6a8668769a1a74109b108f64d967365e451c6f36fb9b81e71fa376c01ae0';

export default axios.create({
    baseURL: "http://projet-finale-service-web.loc/",
    headers: {
        Authorization: "api_key " + apiKey,
    }
})