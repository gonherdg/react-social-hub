import React, { useEffect, useState } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { SHOW_SIGNIN_MESSAGE } from "../../constants/actionTypes";
import ClearOutlinedIcon from "@material-ui/icons/Close";

import useStyles from "./styles";
import "./fileInputStyle.css";
import { createPost, updatePost } from "../../actions/posts";

const Form = ({ currentId, setCurrentId }) => {
    const [postData, setPostData] = useState({
        title: "",
        message: "",
        tags: "",
        selectedFile: "",
    });
    const post = useSelector((state) =>
        currentId ? state.posts.posts.find((p) => p._id === currentId) : null
    );
    const showSignInMessage = useSelector(
        (state) => state.misc.showSignInMessage
    );
    const classes = useStyles();
    const user = JSON.parse(localStorage.getItem("profile"));
    const history = useHistory();

    const dispatch = useDispatch();

    useEffect(() => {
        if (post) setPostData(post);
    }, [post]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(
            "Creating new Post:",
            postData,
            " ... CurrendId: ",
            currentId
        );
        const name = user?.result?.name ? user?.result?.name : user?.name;
        if (currentId === 0 || !currentId) {
            dispatch(createPost({ ...postData, name }, history));
            clear();
        } else {
            dispatch(updatePost(currentId, { ...postData, name }));
            clear();
        }
        clear();
    };

    const clear = () => {
        setCurrentId(null);
        setPostData({
            title: "",
            message: "",
            tags: "",
            selectedFile: "",
        });
    };

    const closeSignInMessageBox = () => {
        dispatch({ type: SHOW_SIGNIN_MESSAGE, data: false });
    };

    if (!user?.result?.name && !user?.name && showSignInMessage) {
        return (
            <Paper className={classes.paper} elevation={3}>
                <Typography
                    className={classes.pleaseSignIn}
                    variant="h6"
                    align="center">
                    Please Sign In to create your own posts and like other's
                    posts.
                </Typography>
                <div
                    className={classes.pleaseSignInClose}
                    onClick={closeSignInMessageBox}>
                    <ClearOutlinedIcon />
                </div>
            </Paper>
        );
    }

    if (!user?.result?.name && !user?.name && !showSignInMessage) {
        return;
    }

    return (
        <Paper elevation={3}>
            <form
                autoComplete="off"
                noValidate
                className={`${classes.root} ${classes.form}`}
                onSubmit={handleSubmit}>
                <Typography variant="h6">
                    {currentId ? "Editing" : "New"} post
                </Typography>
                <TextField
                    name="title"
                    variant="outlined"
                    label="Title"
                    fullWidth
                    value={postData.title}
                    onChange={(e) =>
                        setPostData({ ...postData, title: e.target.value })
                    }></TextField>

                <TextField
                    name="message"
                    variant="outlined"
                    label="Message"
                    fullWidth
                    value={postData.message}
                    onChange={(e) =>
                        setPostData({ ...postData, message: e.target.value })
                    }></TextField>

                <TextField
                    name="tags"
                    variant="outlined"
                    label="Tags"
                    fullWidth
                    value={postData.tags}
                    onChange={(e) =>
                        setPostData({
                            ...postData,
                            tags: e.target.value.split(","),
                        })
                    }></TextField>

                <div className={"file_input-container"}>
                    <FileBase
                        type="file"
                        multiple={false}
                        onDone={({ base64 }) =>
                            setPostData({ ...postData, selectedFile: base64 })
                        }></FileBase>
                </div>

                <Button
                    className={classes.buttonSubmit}
                    variant="contained"
                    color="primary"
                    size="large"
                    type="submit"
                    fullWidth>
                    Submit
                </Button>
                <Button
                    className={classes.buttonSubmit}
                    variant="contained"
                    color="secondary"
                    size="small"
                    onClick={clear}
                    fullWidth>
                    Clear
                </Button>
            </form>
        </Paper>
    );
};

export default Form;
