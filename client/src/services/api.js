import axios from "axios";

const url = 'http://localhost:8000';

export const createPost = async (post) => {
    try{
       return await axios.post(`${url}/create`, post)
    } catch (e) {
        console.log('Error while calling createPost API', e)
    }
}