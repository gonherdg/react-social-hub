import { SHOW_SEARCH_WINDOW } from "../constants/actionTypes";

export const showSearchWindow = (data) => async (dispatch) => {
    try {
        console.log("DATA: ", data);
        dispatch({ type: SHOW_SEARCH_WINDOW, data });
    } catch (error) {
        console.log(error);
    }
};
