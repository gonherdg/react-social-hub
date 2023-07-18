import { colors } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    root: {
        "& .MuiTextField-root": {
            margin: theme.spacing(1),
        },
    },
    paper: {
        padding: theme.spacing(2),
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
        color: theme.palette.text.hint,
        textAlign: "center",
        flex: 2,
        padding: "0 23px 0 23px",
    },
    pleaseSignInClose: {
        position: "absolute",
        cursor: "pointer",
        color: theme.palette.primary.main,
        right: "34px",
        margin: "-2px 0 0px 0px",
        [theme.breakpoints.down("xs")]: {
            fontSize: "16px",
        },
    },
}));
