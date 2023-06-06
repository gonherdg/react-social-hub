import React, { useState, useEffect } from "react";
import useStyles from "./styles.js";
import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
    ButtonBase,
} from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbUpAltOutlined from "@material-ui/icons/ThumbUpAltOutlined";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import moment from "moment";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { deletePost, likePost } from "../../../actions/posts";
import ThumbUpAlt from "@material-ui/icons/ThumbUpAlt";

const Post = ({ post, setCurrentId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const user = JSON.parse(localStorage.getItem("profile"));
    const [likes, setLikes] = useState(post?.likes);

    //console.log("likes.length: ", likes.length);
    //console.log("post: ", post);

    //const userId = user?.googleId || user?._id;
    const userId = user?.sub || user?.result?._id;

    const hasLikedPost = post.likes.find((like) => like === userId);

    const handleLike = () => {
        dispatch(likePost(post._id));

        if (hasLikedPost) {
            setLikes(post.likes.filter((id) => id !== userId));
        } else {
            setLikes([...post.likes, userId]);
        }
    };

    useEffect(() => {
        //if (userId) console.log(userId);
        console.log(post.title, likes);
    }, []);

    const Likes = () => {
        if (likes.length > 0) {
            return likes.find((like) => like === userId) ? (
                <>
                    <ThumbUpAltIcon fontSize="small" />
                    &nbsp;
                    {likes.length > 2
                        ? `You and ${likes.length - 1} others`
                        : `${likes.length} like${likes.length > 1 ? "s" : ""}`}
                </>
            ) : (
                <>
                    <ThumbUpAltOutlined fontSize="small" />
                    &nbsp;{likes.length} {likes.length === 1 ? "Like" : "Likes"}
                </>
            );
        }

        return (
            <>
                <ThumbUpAltOutlined fontSize="small" />
                &nbsp; Like
            </>
        );
    };

    const openPost = () => history.push(`/posts/${post._id}`);

    return (
        <Card className={classes.card} raised elevation={6}>
            <div className={classes.cardActions_b} onClick={openPost}>
                <CardMedia
                    className={classes.media}
                    image={post.selectedFile}
                    title={post.title}
                />
                <div className={classes.overlay}>
                    <Typography variant="h6">{post.name}</Typography>
                    <Typography variant="body2">
                        {moment(post.createdAt).fromNow()}
                    </Typography>
                </div>
                {(user?.googleId === post?.creator ||
                    user?.result?._id === post?.creator) && (
                    <div className={classes.overlay2}>
                        <Button
                            style={{ color: "white" }}
                            size="small"
                            onClick={() => setCurrentId(post._id)}>
                            <MoreHorizIcon fontSize="medium"></MoreHorizIcon>
                        </Button>
                    </div>
                )}
                <div className={classes.details}>
                    <Typography variant="body2" color="textSecondary">
                        {post.tags.map((tag) => `#${tag} `)}
                    </Typography>
                </div>
                <Typography className={classes.title} variant="h5" gutterBottom>
                    {post.title}
                </Typography>
                <CardContent>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p">
                        {post.message}
                    </Typography>
                </CardContent>
            </div>
            <CardActions className={classes.cardActions}>
                <Button
                    size="small"
                    color="primary"
                    disabled={!user?.result && !user}
                    onClick={() => handleLike()}>
                    <Likes />
                </Button>
                {(user?.googleId === post?.creator ||
                    user?.result?._id === post?.creator) && (
                    <Button
                        size="small"
                        color="primary"
                        onClick={() => dispatch(deletePost(post._id))}>
                        <DeleteIcon fontSize="small"></DeleteIcon>
                        Delete
                    </Button>
                )}
            </CardActions>
        </Card>
    );
};

export default Post;
