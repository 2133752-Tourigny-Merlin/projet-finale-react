import axios from "axios";

// Entrez votre clé api ici 
const apiKey = 'd5c2ae5be9f14f0ade6b95059244d6ff52726f8bf82e1a0e8541ed21bb1145d3';

export default axios.create({
    baseURL: "http://projet-finale-service-web.loc/",
    headers: {
        Authorization: "api_key " + apiKey,
    }
})