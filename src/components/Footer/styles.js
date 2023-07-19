import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    background: {
        backgroundColor: theme.palette.primary.main,
        minHeight: "260px",
        marginTop: "100px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        boxShadow:
            "0px -3px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
        [theme.breakpoints.down("md")]: {
            minHeight: "220px",
            marginTop: "60px",
        },
    },
    text: {
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        fontSize: "19px",
        color: theme.palette.grey[800],
        textDecoration: "none",
        margin: "8px",
        textAlign: "center",
        [theme.breakpoints.down("sm")]: {
            fontSize: "16px",
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: "13px",
        },
    },
    hyperlink: {
        "&:hover": {
            textDecoration: "underline",
            color: theme.palette.grey[900],
        },
        color: theme.palette.grey[800],
        textDecoration: "none",
        [theme.breakpoints.down("sm")]: {
            fontSize: "16px",
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: "13px",
        },
    },
    icon: {
        verticalAlign: "middle",
        margin: "0 4px 0 0",
    },
}));
