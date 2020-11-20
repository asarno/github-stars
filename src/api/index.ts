import axios from "axios";
const {
    REACT_APP_API_BASE,
    REACT_APP_ACCESS_KEY,
} = process.env;

// This is where I would setup interceptors to alter whatever necessary (Authorization Headers, Error Handling, etc.)
// Since this API accepts apikey as a queryParam, there is very little setup required here.

export const authedFetcher = axios.create({
    baseURL: REACT_APP_API_BASE,
    headers: { 'Authorization': `token ${REACT_APP_ACCESS_KEY}`}
});