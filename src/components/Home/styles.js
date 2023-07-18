import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    appBarContainer: {
        [theme.breakpoints.between("sm", "sm")]: {
            display: "flex",
            alignItems: "start",
            justifyContent: "space-between",
        },
    },
    appBarContainerNoSearchBar: {},
    appBarSearch: {
        borderRadius: 4,
        marginBottom: "1rem",
        display: "flex",
        padding: "16px",
        [theme.breakpoints.down("sm")]: {
            maxWidth: "48%",
        },
        [theme.breakpoints.down("xs")]: {
            maxWidth: "100%",
        },
    },
    appBarSearchHide: {
        borderRadius: 4,
        marginBottom: "1rem",
        display: "flex",
        padding: "16px",
        [theme.breakpoints.down("sm")]: {
            maxWidth: "48%",
            display: "none",
        },
    },
    rightPart: {
        [theme.breakpoints.between("sm", "sm")]: {
            maxWidth: "100%",
        },
    },
    rightPartNoSearch: {
        [theme.breakpoints.between("sm", "sm")]: {
            maxWidth: "48%",
        },
    },
    pagination: {
        borderRadius: 4,
        padding: "6px",
        [theme.breakpoints.down("sm")]: {
            display: "none",
        },
    },
    paginationBottom: {
        borderRadius: 4,
        marginTop: "1rem",
        padding: "6px",
        [theme.breakpoints.up("md")]: {
            display: "none",
        },
    },
    gridContainer: {
        [theme.breakpoints.down("xs")]: {
            flexDirection: "column-reverse",
        },
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column-reverse",
        },
    },

    appBar: {
        borderRadius: 15,
        margin: "30px 0",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    heading: {
        color: "rgba(0,183,255, 1)",
    },
    image: {
        marginLeft: "15px",
    },
    [theme.breakpoints.down("sm")]: {
        mainContainer: {
            flexDirection: "column-reverse",
        },
    },
}));
