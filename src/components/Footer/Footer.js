import { useHistory } from "react-router-dom";
import React, { useState, useRef, useEffect } from "react";
import { Typography, TextField, Button } from "@material-ui/core";
import { useDispatch } from "react-redux";

import useStyles from "./styles";
import { commentPost } from "../../actions/posts";

const Footer = () => {
    const classes = useStyles();
    const history = useHistory();

    const handleClick = async () => {
        history.push("https://gonherdg.github.io");
    };

    return (
        <div className={classes.background}>
            <div className={classes.text}>
                built by Gonzalo Del Gaudio. 2023.
            </div>
            <div className={classes.text}>
                <a
                    className={classes.text}
                    rel="noreferrer"
                    target="_blank"
                    href="https://gonherdg.github.io">
                    <strong>gonherdg.github.io</strong>
                </a>
            </div>
            <div className={classes.text}></div>
        </div>
    );
};

export default Footer;
