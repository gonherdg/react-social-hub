import React, { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { AppBar, Typography, Toolbar, Button, Avatar } from "@material-ui/core";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";
import memories from "../../images/picnic.png";
import friendshipIcon from "../../images/friendship.png";
import useStyles from "./styles";
import "../../index.css";
import "./style.css";

const Navbar = () => {
    const classes = useStyles();
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("profile"))
    );
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();

    const logout = () => {
        dispatch({ type: "LOGOUT" });

        history.push("/");

        setUser(null);
    };

    useEffect(() => {
        const token = user?.token;
        console.log("user token: ", token, " ", user);
        if (token) {
            const decodedToken = decode(token);

            if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }

        const profile = JSON.parse(localStorage.getItem("profile"));
        if (profile?.result !== undefined) {
            setUser(profile.result);
            //console.log(profile.result);
        } else {
            setUser(profile);
            //console.log(profile);
        }
        //console.log("_> " + user);
    }, [location]);

    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
                <img
                    className={classes.image}
                    src={friendshipIcon}
                    alt="memories"
                    height="60"></img>
                {
                    !(
                        <div className="units">
                            <div>Social Hub</div>
                            <div>Social Hub</div>
                            {
                                !(
                                    <Typography
                                        component={Link}
                                        to="/"
                                        className="h1"
                                        variant="h2"
                                        align="center">
                                        Social Hub
                                    </Typography>
                                )
                            }
                        </div>
                    )
                }
                <div className="sep">
                    <Typography
                        component={Link}
                        to="/"
                        className="h1"
                        variant="h2">
                        Social Hub
                    </Typography>
                </div>
            </div>
            <Toolbar className={classes.toolbar}>
                {user ? (
                    <div className={classes.profile}>
                        {user.sub !== undefined && (
                            <Avatar
                                className={classes.purple}
                                alt={user.given_name}
                                src={user.picture}>
                                {user.given_name.charAt(0)}
                            </Avatar>
                        )}
                        {user.sub === undefined && (
                            <Avatar className={classes.purple} alt={user.name}>
                                {user.name?.charAt(0)
                                    ? user.name.charAt(0)
                                    : user.name}
                            </Avatar>
                        )}
                        <Typography className={classes.userName} variant="h6">
                            {user.sub !== undefined && user.given_name}
                            {user.sub === undefined && user.name}
                        </Typography>
                        <Button
                            variant="contained"
                            className={classes.logout}
                            color="secondary"
                            onClick={logout}>
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
