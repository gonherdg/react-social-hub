import { useHistory } from "react-router-dom";
import React, { useState, useRef, useEffect } from "react";
import { Typography, TextField, Button } from "@material-ui/core";
import OpenInNew from "@material-ui/icons/OpenInNew";
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
            <br />
            <br />
            <div className={classes.text}>
                Built by Gonzalo Del Gaudio
                <br />
                <br />
                2023
                <br />
                <br />
                <a
                    className={classes.hyperlink}
                    rel="noreferrer"
                    target="_blank"
                    href="https://gonherdg.github.io">
                    <strong>gonherdg.github.io</strong>
                    <span style={{ marginRight: "4px" }}></span>
                    <OpenInNew className={classes.icon}></OpenInNew>
                </a>
            </div>
            <br />
            <br />
        </div>
    );
};

export default Footer;
