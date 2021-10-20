import Post from "./post";
import {Grid, makeStyles} from "@material-ui/core";
import {Link, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {getAllPosts} from "../../services/api";

const useStyles = makeStyles({
    component: {
        textDecoration: 'none',
        color: 'inherit'
    }
})

const Posts = () => {
    const classes = useStyles();
    const [posts, setPosts] = useState([]);
    const { search } = useLocation();
    useEffect(() => {
        const fetchData = async () => {
            let data = await getAllPosts(search);
            console.log(data)
            setPosts(data);
        }
        fetchData();
    }, [search])

   // let posts = [1,2,3,4,5,6,7,8,9]
return(
    posts.map((post, index) => (
        <Grid item lg={3} sm={4} xs={12} key={index}>
            <Link to={`/details/${post._id}`} className = {classes.component} >
                <Post  post={post} />
            </Link>
        </Grid>
    ))

)
}
export default Posts;