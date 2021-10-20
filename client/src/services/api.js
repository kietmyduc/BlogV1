import axios from "axios";

const url = 'http://localhost:8000';

export const createPost = async (post) => {
    try{
       return await axios.post(`${url}/create`, post)
    } catch (e) {
        console.log('Error while calling createPost API', e)
    }
}

export const getAllPosts = async (param) => {
    try{
        const response = await axios.get(`${url}/posts/${param}`)
        return response.data;
    } catch (e) {
        console.log('Error while calling getAllPosts API', e)
    }
}

export const getPost = async (id) => {
    try{
        let response = await axios.get(`${url}/post/${id}`)
        return response.data;
    } catch (e) {
        console.log('Error while calling getPost API', e)
    }
}

export const updatePost =  async (id, post) => {
    try {
        await axios.post(`${url}/update/${id}`, post)
    } catch (e) {
        console.log('Error while calling updatePost API', e)
    }
}

export const deletePost = async (id) => {
    try {
        await axios.delete(`${url}/delete/${id}`)
    } catch (e) {
        console.log('Error while calling deletePost API', e)
    }
}