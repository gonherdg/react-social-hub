import React, { useEffect } from 'react'
import { Paper, Typography, CircularProgress, Divider, ButtonBase } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { useParams, useHistory, Link } from 'react-router-dom';

import { getPost, getPostsBySearch } from '../../actions/posts';
import CommentSection from './CommentSection';
import useStyles from './styles';

const PostDetails = () => {
    const { post, posts, isLoading } = useSelector((state) => state.posts);
    const dispatch = useDispatch();
    const history = useHistory();
    const classes = useStyles();
    const { id } = useParams();

    useEffect(() => {
        dispatch(getPost(id));
    }, [id])

    useEffect(() => {
        if(post) {
            dispatch(getPostsBySearch({search: 'none', tags: post?.tags.join(',')}))
        }
    }, [post]);

    const recommendedPosts = posts.filter(({_id}) => _id !== post?._id);

    const openPost = (_id) => history.push(`/posts/${_id}`);

    if (!post) return null;

    if(isLoading) {
        return <Paper elevation={3} className={classes.loadingPaper}>
            <CircularProgress size="7em" />
        </Paper>
    }

    return (
    <Paper className={classes.paper} style={{ borderRadius: '15px' }} elevation={3}>
    <div className={classes.card}>
      <div className={classes.section}>
        <Typography className={classes.title} variant="h3" component="h2">{post.title}</Typography>
        <Typography className={classes.tags} gutterBottom variant="h6" color="textSecondary" component="h2">{post.tags.map((tag, i) => (
          <Link to={`/tags/${tag}`} style={{ textDecoration: 'none', color: '#3f51b5' }} key={i}>
            {` #${tag} `}
          </Link>
        ))}
        </Typography>
        <Typography gutterBottom variant="body1" component="p">{post.message}</Typography>
        <Typography >
          Created by:
          <Link to={`/creators/${post.name}`} style={{ textDecoration: 'none', color: '#3f51b5' }}>
            {` ${post.name}`}
          </Link>
        </Typography>
        <Typography variant="body1">{moment(post.createdAt).fromNow()}</Typography>
        <Typography variant="body1" gonza="Realtime chat - coming soon!"><strong></strong></Typography>
        <Divider style={{ margin: '20px 0' }} />
        <CommentSection post={post} />
        <Divider style={{ margin: '20px 0' }} />
      </div>
      <div className={classes.imageSection}>
        <img className={classes.media} src={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={post.title} />
      </div>
    </div>
    {recommendedPosts.length > 0 && (
      <div className={classes.section}>
        <Typography gutterBottom variant="h5">You might also like:</Typography>
        <Divider />
        <div className={classes.recommendedPosts}>
          {recommendedPosts.map(({ title, name, message, likes, selectedFile, _id }) => (
            <div className={classes.recommendedPost} style={{cursor: 'pointer' }} onClick={() => openPost(_id)} key={_id}>
              <Typography gutterBottom variant="h6">{title}</Typography>
              <Typography gutterBottom variant="subtitle2" style={{color: '#777'}}>{name}</Typography>
              <Typography gutterBottom variant="subtitle2">{message}</Typography>
              <Typography gutterBottom variant="subtitle1">Likes: {likes.length}</Typography>
              <img src={selectedFile} width="200px" />
            </div>
          ))}
        </div>
      </div>
    )}
  </Paper>
);
};

export default PostDetails;