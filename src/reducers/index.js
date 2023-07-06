import { combineReducers } from "redux";

import posts from "./posts";
import auth from "./auth";
import misc from "./misc";

export default combineReducers({
    posts,
    auth,
    misc,
});
