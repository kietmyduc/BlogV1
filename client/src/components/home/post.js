import {Box, makeStyles, Typography} from "@material-ui/core";

//create style post
const useStyles = makeStyles({
    container: {
        height: 350,
        margin: 10,
        border: '1px solid #d3cede',
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        '& > *' : {
            padding: '0 5px 5px 5px'
        },
        cursor: 'pointer'
    },
    image: {
        height: 150,
        width: '100%',
        objectFit: 'cover',
        borderRadius: 15,
        paddingBottom: 20
    },
    text: {
        color: '#878787',
        fontSize: 12
    },
    heading: {
        fontSize: 20,
        fontWeight: 600,
        textAlign: "center"
    },
    detail: {
        fontSize: 16,
        wordBreak: 'break-word'
    }
})

const Post = ({ post }) => {
    const url = post.picture || `https://scontent.fdad3-5.fna.fbcdn.net/v/t1.6435-9/p180x540/245862869_1180974569058218_2756586507264415517_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=-4svKaaX4agAX9j1o_l&_nc_ht=scontent.fdad3-5.fna&oh=4a3257908aa1d3c55372e9909717ca42&oe=6192E1D2`;
    const classes = useStyles();
    return(
        <Box className={classes.container}>
            <img src={url} alt="wrapper" className={classes.image}/>
            <Typography className={classes.text}>{post.categories}</Typography>
            <Typography className={classes.heading}>{post.title}</Typography>
            <Typography className={classes.text}>Author: {post.username}</Typography>
            <Typography className={classes.detail}>{post.description}</Typography>
        </Box>
    )
}
export default Post;