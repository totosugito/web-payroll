
import axios from "axios";
import {IS_DEBUG} from "../../config";

export const httpGet = async (url, config = {}) => {
    if(IS_DEBUG) {
        console.log("GET: ", url)
    }

    try {
        let response = await axios.get(url, config)

        if(IS_DEBUG) {
            console.log("OUT: ", response.data)
        }
        return (response.data);
    } catch (err) {
        const message =
            err.response && err.response.data.message
                ? err.response.data.message
                : err.message;
        return ({isError: true, data: {}, message: message});
    }
}

export const httpPost = async (url, data={}, config={}) => {
    if(IS_DEBUG) {
        console.log("POST: ", url)
    }

    try {
        let response = await axios.post(url, data, config)
        if(IS_DEBUG) {
            console.log("OUT: ", response.data)
        }
        return (response.data);
    } catch (err) {
        const message =
            err.response && err.response.data.message
                ? err.response.data.message
                : err.message;
        return ({isError: true, data: {}, message: message});
    }
}

export const httpPut = async (url, data={}, config={}) => {
    if(IS_DEBUG) {
        console.log("PUT: ", url)
    }

    try {
        let response = await axios.put(url, data, config)
        if(IS_DEBUG) {
            console.log("OUT: ", response.data)
        }
        return ({isError: false, data: response.data, message: ""});
    } catch (err) {
        const message =
            err.response && err.response.data.message
                ? err.response.data.message
                : err.message;
        return ({isError: true, data: {}, message: message});
    }
}

export const httpDelete = async (url, config = {}) => {
    if(IS_DEBUG) {
        console.log("DELETE: ", url)
    }

    try {
        let response = await axios.delete(url, config)
        if(IS_DEBUG) {
            console.log("OUT: ", response.data)
        }
        return ({isError: false, data: response.data, message: ""});
    } catch (err) {
        const message =
            err.response && err.response.data.message
                ? err.response.data.message
                : err.message;
        return ({isError: true, data: {}, message: message});
    }
}

const httpApi = {
    httpGet, httpPost, httpPut, httpDelete
};

export default httpApi;