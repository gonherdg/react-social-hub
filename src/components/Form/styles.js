import { colors } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    root: {
        "& .MuiTextField-root": {
            margin: theme.spacing(1),
        },
    },
    paper: {
        padding: theme.spacing(1),
        marginBottom: 10,
        display: "flex",
    },
    form: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
    },
    fileInput: {
        width: "100%",
        margin: "10px 0",
    },
    buttonSubmit: {
        marginBottom: 10,
        width: "100%",
    },
    pleaseSignIn: {
        fontSize: "13px",
        color: theme.palette.primary,
        textAlign: "center",
        flex: 0.9,
    },
    pleaseSignInClose: {
        cursor: "pointer",
        alignSelf: "center",
        textAlign: "center",
        color: theme.palette.primary,
        color: theme.palette.primary.main,
        flex: 0.1,
        [theme.breakpoints.down("xs")]: {
            fontSize: "16px",
        },
    },
}));
