import React from "react";
import ReactDom from "react-dom/client";
import { Provider } from "react-redux";
import {
    legacy_createStore as createStore,
    applyMiddleware,
    compose,
} from "redux";
import thunk from "redux-thunk";
import "./index.css";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { colors } from "@material-ui/core";
import reducers from "./reducers";

import App from "./App";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Material UI theming
const theme = createTheme({
    palette: {
        type: "dark",
        background: {
            default: "#010101",
            paper: colors.grey[900],
        },
        primary: {
            main: colors.orange[500],
        },
        secondary: {
            main: colors.blue[300],
        },
    },
});

const store = createStore(
    reducers,
    compose(applyMiddleware(thunk), composeEnhancers())
);

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </Provider>
);
