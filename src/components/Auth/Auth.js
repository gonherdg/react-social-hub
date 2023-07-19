import React, { useState, useRef, useEffect } from "react";
import {
    Avatar,
    Button,
    Paper,
    Grid,
    Typography,
    Container,
} from "@material-ui/core";
import { GoogleLogin } from "@react-oauth/google";
import { useDispatch } from "react-redux";
import jwt_decode from "jwt-decode";
import { useHistory } from "react-router-dom";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import useStyles from "./styles";
import Input from "./Input";
import { signin, signup } from "../../actions/auth";

const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
};

const Auth = () => {
    const classes = useStyles();
    const [showPassword, setShowPassword] = useState(false);
    const [isSignup, setIsSignup] = useState(false);
    const [formData, setFormData] = useState(initialState);
    const dispatch = useDispatch();
    const history = useHistory();
    const ref = useRef(null);
    const [dimensions, setDimensions] = React.useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    const handleResize = () => {
        setDimensions({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isSignup) {
            dispatch(signup(formData, history));
        } else {
            dispatch(signin(formData, history));
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleShowPassword = () =>
        setShowPassword((prevShowPassword) => !prevShowPassword);

    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup);
        handleShowPassword(false);
    };

    const googleSuccess = async (res) => {
        // console.log(res.credential);  This returns an encoded value that includes all the user data
        const credential = res?.credential;
        let userData = jwt_decode(credential);
        userData.token = credential; // This is to add the same credential already encoded as a jwt as a token for later use in transactions.
        //console.log(userData);
        try {
            dispatch({ type: "AUTH", data: userData });
            history.push("/");
        } catch (error) {
            console.log(error);
        }
    };

    const googleFailure = (error) => {
        console.log(error);
        console.log("Google Sign In was unsuccessful. Try Again Later");
    };

    useEffect(() => {
        setTimeout(() => {
            setDimensions(100);
        }, 10);
        window.addEventListener("resize", handleResize, false);
    }, []);

    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography className={classes.signInButton} variant="h5">
                    {isSignup ? "Sign up" : "Sign in"}
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {isSignup && (
                            <>
                                <Input
                                    name="firstName"
                                    label="First Name"
                                    handleChange={handleChange}
                                    autofocus
                                    half
                                />
                                <Input
                                    name="lastName"
                                    label="Last Name"
                                    handleChange={handleChange}
                                    half
                                />
                            </>
                        )}
                        <Input
                            name="email"
                            label="Email Address"
                            handleChange={handleChange}
                            type="email"
                        />
                        <Input
                            name="password"
                            label="Password"
                            handleChange={handleChange}
                            type={showPassword ? "text" : "password"}
                            handleShowPassword={handleShowPassword}
                        />
                        {isSignup && (
                            <Input
                                name="confirmPassword"
                                label="Repeat Password"
                                handleChange={handleChange}
                                type="password"
                            />
                        )}
                        <div className={classes.signinBlock} ref={ref}>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}>
                                {isSignup ? "Sign Up" : "Sign In"}
                            </Button>
                            <div className={classes.hbar}></div>
                            <GoogleLogin
                                size={"large"}
                                width={
                                    ref.current ? ref.current.offsetWidth : 0
                                }
                                theme={"filled_blue"}
                                text={isSignup ? "signup_with" : "signin_with"}
                                className={classes.googleButton}
                                onSuccess={googleSuccess}
                                onError={googleFailure}
                            />
                        </div>

                        <div className={classes.already}>
                            <Button onClick={switchMode}>
                                {isSignup
                                    ? "Already have an account? Sign in"
                                    : "Don't have an account? Sign up"}
                            </Button>
                        </div>
                    </Grid>
                </form>
            </Paper>
        </Container>
    );
};

export default Auth;
