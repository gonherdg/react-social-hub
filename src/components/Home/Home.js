import React, { useState, useEffect } from "react";
import {
    Container,
    Grow,
    Grid,
    Paper,
    AppBar,
    TextField,
    Button,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import ChipInput from "material-ui-chip-input";

import { getPosts, getPostsBySearch } from "../../actions/posts";
//import useStyles from "./styles";
import Paginate from "../Pagination/Pagination";
import Posts from "../Posts/Posts";
import Form from "../Form/Form";

import useStyles from "./styles";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Home = () => {
    const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();
    const query = useQuery();
    const history = useHistory();
    const page = query.get("page") || 1;
    const searchQuery = query.get("searchQuery");
    const classes = useStyles();
    const [search, setSearch] = useState("");
    const [tags, setTags] = useState([]);

    const searchPost = () => {
        if (search.trim() || tags.length > 0) {
            // dispatch -> fetch search post
            dispatch(getPostsBySearch({ search, tags: tags.join(",") }));
            history.push(
                `/posts/search?searchQuery=${search || "none"}&tags=${tags.join(
                    ","
                )}`
            );
        } else {
            history.push("/");
        }
    };

    const handleKeyPress = (e) => {
        if (e.keyCode === 13) {
            // 13 means Enter key
            searchPost();
        }
    };

    const handleAdd = (tag) => setTags([...tags, tag]);

    const handleDelete = (tagToDelete) =>
        setTags(tags.filter((tag) => tag !== tagToDelete));

    return (
        <Grow in>
            <div maxWidth="xl">
                <Grid
                    container
                    justifyContent="space-between"
                    alignItems="stretch"
                    spacing={3}
                    className={classes.gridContainer}>
                    <Grid item spacing={2} xs={12} sm={12} md={9}>
                        <Posts setCurrentId={setCurrentId}></Posts>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={12}
                        md={3}
                        className={classes.appBarContainer}>
                        <AppBar
                            className={classes.appBarSearch}
                            position="static"
                            color="inherit">
                            <TextField
                                name="search"
                                variant="outlined"
                                label="Search Memories"
                                onKeyPress={handleKeyPress}
                                fullWidth
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                            <ChipInput
                                style={{ margin: "10px 0" }}
                                value={tags}
                                onAdd={handleAdd}
                                onDelete={handleDelete}
                                label="Search Tags"
                                variant="outlined"
                            />
                            <Button
                                onClick={searchPost}
                                className={classes.searchButton}
                                variant="contained"
                                color="primary">
                                Search
                            </Button>
                        </AppBar>
                        <div className={classes.rightPart}>
                            <Form
                                currentId={currentId}
                                setCurrentId={setCurrentId}
                            />
                            {!searchQuery && !tags.length && (
                                <Paper
                                    elevation={6}
                                    className={classes.pagination}>
                                    <Paginate page={page} />
                                </Paper>
                            )}
                        </div>
                    </Grid>
                </Grid>
            </div>
        </Grow>
    );
};

export default Home;
