import { makeStyles } from "@material-ui/core/styles";
import { deepPurple } from "@material-ui/core/colors";
import useMediaQuery from "@material-ui/core/useMediaQuery";

export default makeStyles((theme) => ({
    appBar: {
        borderRadius: 15,
        margin: "30px 0",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 15px",
    },
    heading: {
        color: "rgba(0,183,255, 1)",
        textDecoration: "none",
        marginLeft: "15px",
    },
    image: {
        marginLeft: "0px",
    },
    toolbar: {
        display: "flex",
        justifyContent: "flex-end",
        width: "400px",
    },
    profile: {
        display: "flex",
        justifyContent: "space-between",
        width: "400px",
    },
    userName: {
        display: "flex",
        alignItems: "center",
    },
    brandContainer: {
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.down("xs")]: {
            minWidth: 0,
        },
    },
    sep: {
        maxHeight: "72px",
        [theme.breakpoints.down("xs")]: {
            visibility: "hidden",
            width: "10px",
        },
    },
    purple: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],
    },
    signIn: {
        backgroundColor: "#FFF",
        color: "#3F51B5",
        "&:active": {
            backgroundColor: "#3F51B5",
            color: "#FFF",
        },
        "&:focus": {
            backgroundColor: "#FFF",
        },
    },
}));
