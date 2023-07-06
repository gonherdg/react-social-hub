import { SHOW_SEARCH_WINDOW } from "../constants/actionTypes";

const miscReducer = (state = { showSearchWindow: false }, action) => {
    switch (action.type) {
        case SHOW_SEARCH_WINDOW:
            //console.log("GGG ", state, action?.data);
            localStorage.setItem(
                "showSearchWindow",
                JSON.stringify({ ...action?.data })
            );
            return { ...state, showSearchWindow: action?.data };
        default:
            return state;
    }
};

export default miscReducer;
