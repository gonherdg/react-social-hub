import React, { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { AppBar, Typography, Toolbar, Button, Avatar } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { LOGOUT, SHOW_SEARCH_WINDOW } from "../../constants/actionTypes";
import decode from "jwt-decode";
import memories from "../../images/picnic.png";
import distanceIcon from "../../images/distance_orange.png";
import friendshipIcon from "../../images/friendship.png";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import LogoutOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";
import AccountIcon from "@material-ui/icons/AccountCircleRounded";
import SupervisedUserCircleIcon from "@material-ui/icons/People";
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
    const { showSearchWindow } = useSelector((state) => state.misc);

    const currentPage = window.location.href.split("/").at(-1);

    const logout = () => {
        dispatch({ type: LOGOUT });

        history.push("/");

        setUser(null);
    };

    const glassClick = () => {
        //console.log("DISPATCH: ", !showSearchWindow);
        dispatch({ type: SHOW_SEARCH_WINDOW, data: !showSearchWindow });
        //console.log("FIN: ", showSearchWindow);
    };

    useEffect(() => {
        const token = user?.token;
        //console.log("user token: ", token, " ", user);
        if (token) {
            const decodedToken = decode(token);

            if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }

        const profile = JSON.parse(localStorage.getItem("profile"));
        //console.log("profile: ", profile);
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
                <Typography component={Link} to="/">
                    {
                        (
                            <img
                                className={classes.image}
                                src={distanceIcon}
                                alt="memories"
                                height="60"></img>
                        )
                    }
                </Typography>
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
                <div className={classes.sep}>
                    <Typography className="sep" component={Link} to="/">
                        <div className="h1">Social Hub</div>
                    </Typography>
                </div>
            </div>
            <Toolbar className={classes.toolbar}>
                {currentPage === "posts" && (
                    <Button
                        onClick={glassClick}
                        variant="contained"
                        color={"primary"}
                        className={
                            showSearchWindow
                                ? classes.activeGlass
                                : classes.glass
                        }>
                        <SearchOutlinedIcon></SearchOutlinedIcon>
                    </Button>
                )}
                <div className={classes.space}></div>
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
                        <Button className={classes.logout} onClick={logout}>
                            <span className={classes.hideXS}>Logout</span>
                            <LogoutOutlinedIcon />
                        </Button>
                    </div>
                ) : (
                    <Button
                        component={Link}
                        to="/auth"
                        variant="contained"
                        color="primary"
                        className={classes.signIn}>
                        <AccountIcon></AccountIcon>
                    </Button>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
