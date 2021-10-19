import Post from "./post";
import {Grid, makeStyles} from "@material-ui/core";
import {Link} from "react-router-dom";

const useStyles = makeStyles({
    component: {
        textDecoration: 'none',
        color: 'inherit'
    }
})

const Posts = () => {
    const classes = useStyles();
    let posts = [1,2,3,4,5,6,7,8,9]
return(
    posts.map(post => (
        <Grid item lg={3} sm={4} xs={12}>
            <Link to={'/details'} className = {classes.component} >
                <Post />
            </Link>

        </Grid>
    ))

)
}
export default Posts;