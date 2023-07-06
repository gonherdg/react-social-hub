import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    media: {
        borderRadius: "20px",
        objectFit: "cover",
        width: "100%",
        maxHeight: "600px",
    },
    card: {
        display: "flex",
        width: "100%",
        [theme.breakpoints.down("sm")]: {
            flexWrap: "wrap",
            flexDirection: "column",
        },
    },
    section: {
        borderRadius: "20px",
        margin: "10px",
        flex: 1,
    },
    imageSection: {
        marginLeft: "20px",
        flex: 0.6,
        [theme.breakpoints.down("sm")]: {
            marginLeft: 0,
        },
    },
    recommendedPosts: {
        display: "flex",
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
            margin: "8px",
            marginTop: "14px",
        },
    },
    loadingPaper: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "0px",
        borderRadius: "15px",
        height: "39vh",
    },
    commentsOuterContainer: {
        display: "flex",
        justifyContent: "space-between",
    },
    commentsInnerContainer: {
        height: "auto",
        overflowY: "auto",
        marginRight: "30px",
        [theme.breakpoints.down("sm")]: {
            fontSize: "34px",
            height: "auto",
        },
    },
    title: {
        fontSize: "38px",
        [theme.breakpoints.down("sm")]: {
            fontSize: "34px",
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: "29px",
        },
    },
    tags: {
        fontSize: "16px",
        [theme.breakpoints.down("sm")]: {
            fontSize: "13px",
        },
    },
    paper: {
        padding: "20px",
        [theme.breakpoints.down("sm")]: {
            padding: "8px",
        },
    },
    createdBy: {
        [theme.breakpoints.down("sm")]: {
            fontSize: "16px",
        },
    },
    recommendedPost: {
        margin: "10px",
        [theme.breakpoints.down("sm")]: {
            margin: "0px",
        },
    },
}));
