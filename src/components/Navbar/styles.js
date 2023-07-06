import { makeStyles } from "@material-ui/core/styles";
import { deepPurple } from "@material-ui/core/colors";
import useMediaQuery from "@material-ui/core/useMediaQuery";

export default makeStyles((theme) => ({
    appBar: {
        borderRadius: 15,
        margin: "15px 0px",
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
        marginTop: "7px",
    },
    toolbar: {
        display: "flex",
        flexBasis: 0.2,
        justifyContent: "flex-end",
        minWidth: "200px",
    },
    profile: {
        display: "flex",
        justifyContent: "space-between",
    },
    userName: {
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.down("sm")]: {
            display: "none",
        },
        [theme.breakpoints.up("md")]: {
            marginRight: "20px",
        },
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
        [theme.breakpoints.up("md")]: {
            marginRight: "20px",
        },
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
    glass: {
        color: "#3F51B5",
        marginRight: "16px",
        width: "35px",
        height: "35px",
        padding: "5px",
        [theme.breakpoints.up("md")]: {
            visibility: "hidden",
        },
    },
    activeGlass: {
        color: "#FFF",
        backgroundColor: "#3F51B5",
        borderRadius: "12px",
        marginRight: "16px",
        width: "35px",
        height: "35px",
        padding: "5px",
        [theme.breakpoints.up("md")]: {
            visibility: "hidden",
        },
    },
    logout: {
        color: "#f50057",
        fontSize: "13px",
        padding: "4px",
    },
    hideXS: {
        [theme.breakpoints.down("sm")]: {
            display: "none",
        },
    },
}));
