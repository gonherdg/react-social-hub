import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Typography, Toolbar, Button, Avatar } from "@material-ui/core";

import memories from "../../images/picnic.png";
import useStyles from "./styles";

const Navbar = () => {
    const classes = useStyles();

    const user = null;

    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
                <Typography
                    component={Link}
                    to="/"
                    className={classes.heading}
                    variant="h2"
                    align="center">
                    Memories
                </Typography>
                <img
                    className={classes.image}
                    src={memories}
                    alt="memories"
                    height="60"></img>
            </div>
            <Toolbar className={classes.toolbar}>
                {user ? (
                    <div className={classes.profile}>
                        <Avatar
                            className={classes.purple}
                            alt={user.result.name}
                            src={user.result.imageUrl}>
                            {user.result.name.charAt(0)}
                        </Avatar>
                        <Button
                            variant="contained"
                            className={classes.logout}
                            color="secondary">
                            Logout
                        </Button>
                    </div>
                ) : (
                    <Button
                        component={Link}
                        to="/auth"
                        variant="contained"
                        color="primary">
                        Sign in
                    </Button>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
