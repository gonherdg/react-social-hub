import React, { useEffect, useState } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";

import useStyles from "./styles";
import { createPost, updatePost } from "../../actions/posts";

const Form = ({ currentId, setCurrentId }) => {
    const [postData, setPostData] = useState({
        title: "",
        message: "",
        tags: "",
        selectedFile: "",
    });
    const post = useSelector((state) =>
        currentId ? state.posts.find((p) => p._id === currentId) : null
    );
    const classes = useStyles();
    const user = JSON.parse(localStorage.getItem("profile"));

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
            dispatch(createPost({ ...postData, name }));
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

    if (!user?.result?.name && !user?.name) {
        return (
            <Paper className={classes.paper}>
                <Typography variant="h6" align="center">
                    Please Sign In to create your own posts and like other's
                    posts.
                </Typography>
            </Paper>
        );
    }

    return (
        <Paper className={classes.paper} elevation={6}>
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
                    fullwidth="true"
                    value={postData.title}
                    onChange={(e) =>
                        setPostData({ ...postData, title: e.target.value })
                    }></TextField>

                <TextField
                    name="message"
                    variant="outlined"
                    label="Message"
                    fullwidth="true"
                    value={postData.message}
                    onChange={(e) =>
                        setPostData({ ...postData, message: e.target.value })
                    }></TextField>

                <TextField
                    name="tags"
                    variant="outlined"
                    label="Tags"
                    fullwidth="true"
                    value={postData.tags}
                    onChange={(e) =>
                        setPostData({
                            ...postData,
                            tags: e.target.value.split(","),
                        })
                    }></TextField>

                <div className={classes.fileInput}>
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
                    fullwidth="true">
                    Submit
                </Button>
                <Button
                    className={classes.buttonSubmit}
                    variant="contained"
                    color="secondary"
                    size="small"
                    onClick={clear}
                    fullwidth="true">
                    Clear
                </Button>
            </form>
        </Paper>
    );
};

export default Form;
