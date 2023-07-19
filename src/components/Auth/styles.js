import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: theme.spacing(2),
    },
    root: {
        "& .MuiTextField-root": {
            margin: theme.spacing(1),
        },
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.primary.main,
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {},
    googleButton: {
        maxWidth: "100%",
    },

    signinBlock: {
        width: "95%",
        height: 130,
        margin: theme.spacing(3, 0, 3),
        marginLeft: "auto",
        marginRight: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
    },
    hbar: {
        heigth: 10,
        padding: 1,
        width: "75%",
        backgroundColor: "#ccc",
    },
    signInButton: {
        [theme.breakpoints.down("sm")]: {
            fontSize: "19px",
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: "16px",
        },
    },
    already: {
        margin: "auto",
    },
}));
