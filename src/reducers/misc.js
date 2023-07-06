import {
    SHOW_SEARCH_WINDOW,
    SHOW_SIGNIN_MESSAGE,
} from "../constants/actionTypes";

const miscReducer = (
    state = { showSearchWindow: false, showSignInMessage: true },
    action
) => {
    switch (action.type) {
        case SHOW_SEARCH_WINDOW:
            //console.log("GGG ", state, action?.data);
            localStorage.setItem(
                "showSearchWindow",
                JSON.stringify({ ...action?.data })
            );
            return { ...state, showSearchWindow: action?.data };
        case SHOW_SIGNIN_MESSAGE:
            localStorage.setItem(
                "showSignInMessage",
                JSON.stringify({ ...action?.data })
            );
            return { ...state, showSignInMessage: action?.data };
        default:
            return state;
    }
};

export default miscReducer;
