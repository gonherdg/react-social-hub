import {
    FETCH_ALL,
    FETCH_BY_SEARCH,
    CREATE,
    UPDATE,
    DELETE,
} from "../constants/actionTypes";
import * as api from "../api";

// Action Creators
export const getPosts = (page) => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts(page);

        console.log(data);

        dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
        console.log(dispatch);
        console.log(error.message);
    }
};

export const getPostsBySearch = (searchQuery) => async (dispatch) => {
    try {
        const {
            data: { data },
        } = await api.fetchPostBySearch(searchQuery);

        dispatch({ type: FETCH_BY_SEARCH, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const createPost = (post) => async (dispatch) => {
    try {
        console.log("post:", post);
        const { data } = await api.createPost(post);
        console.log("data:", data);
        dispatch({ type: CREATE, payload: data });
    } catch (error) {
        console.log(error.message);
    }
};

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post);
        dispatch({ type: UPDATE, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const deletePost = (id) => async (dispatch) => {
    try {
        console.log(id);
        await api.deletePost(id);
        dispatch({ type: DELETE, payload: id });
    } catch (error) {
        console.log(error);
    }
};

export const likePost = (id) => async (dispatch) => {
    try {
        const { data } = await api.likePost(id);
        console.log("QUE ES DATA: ", data);
        dispatch({ type: UPDATE, payload: data });
    } catch (error) {
        console.log(error);
    }
};
