import axios from "axios";

// const API = axios.create({ baseURL: "http://localhost:5000" });  // Local development
// https://1ljmxxotee.execute-api.us-east-1.amazonaws.com/      // AWS Lambda serverless
// http://localhost:9000/.netlify/functions/api         // Netlify Lambda serverless

const API_TEST = axios.create({ baseURL: "http://localhost:5000" });

const API_AWS = axios.create({
    baseURL: "https://1ljmxxotee.execute-api.us-east-1.amazonaws.com/",
});

let API = API_AWS;

API.interceptors.request.use((req) => {
    if (localStorage.getItem("profile")) {
        const token = JSON.parse(localStorage.getItem("profile")).token;
        req.headers.authorization = `Bearer ${token}`;
    }

    //console.log("KK: ", JSON.parse(localStorage.getItem("profile")).token);
    return req;
});

export const fetchPost = (id) => API.get(`/posts/${id}`);
export const fetchPosts = (page) => API.get(`/posts?page=${page}`);
export const fetchPostBySearch = (searchQuery) =>
    API.get(
        `/posts/search?searchQuery=${searchQuery.search || "none"}&tags=${
            searchQuery.tags
        }`
    );
export const createPost = (newPost) => API.post("/posts", newPost);
export const updatePost = (id, updatedPost) =>
    API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
export const comment = (value, id) =>
    API.post(`/posts/${id}/commentPost`, { value });

export const signIn = (formData) => API.post("/user/signin", formData);
export const signUp = (formData) => API.post("/user/signup", formData);
