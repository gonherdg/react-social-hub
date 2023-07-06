import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    appBarContainer: {
        [theme.breakpoints.between("sm", "sm")]: {
            display: "flex",
            justifyContent: "space-between",
        },
    },
    appBarSearch: {
        borderRadius: 4,
        marginBottom: "1rem",
        display: "flex",
        padding: "16px",
        [theme.breakpoints.between("sm", "sm")]: {
            maxWidth: "48%",
        },
    },
    rightPart: {
        [theme.breakpoints.between("sm", "sm")]: {
            maxWidth: "48%",
        },
    },
    pagination: {
        borderRadius: 4,
        marginTop: "1rem",
        padding: "16px",
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
