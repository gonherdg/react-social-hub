import { makeStyles } from "@material-ui/core/styles";
import { deepPurple } from "@material-ui/core/colors";
import useMediaQuery from "@material-ui/core/useMediaQuery";

export default makeStyles((theme) => ({
    appBar: {
        borderRadius: 15,
        margin: "10px 0px 18px 0",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 16px",
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
        paddingLeft: "10px",
        paddingRight: "10px",
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
        "&:hover": {
            backgroundColor: theme.palette.action.hover,
        },
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.primary.main,
        "&:active": {
            backgroundColor: "#3F51B5",
            color: "#FFF",
        },
    },
    glass: {
        "&:hover": {
            backgroundColor: theme.palette.action.hover,
        },
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.primary.main,
        width: "35px",
        height: "35px",
        padding: "5px",
        [theme.breakpoints.up("md")]: {
            visibility: "hidden",
        },
    },
    activeGlass: {
        color: "#FFF",
        backgroundColor: theme.palette.primary.main, // "#3F51B5",
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
    space: {
        margin: 15,
    },
}));
