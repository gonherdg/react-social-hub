import { FETCH_ALL, CREATE, UPDATE, DELETE } from "../constants/actionTypes";

const postsReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...state, action.payload];
        case UPDATE:
            return state.map((post) =>
                post._id === action.payload._id ? action.payload : post
            );
        case DELETE:
            return state.filter((post) => post._id !== action.payload);

        default:
            return state;
    }
};

export default postsReducer;
