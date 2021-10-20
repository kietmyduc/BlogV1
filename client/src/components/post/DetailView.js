import {Box, makeStyles, Typography} from "@material-ui/core";
import {Delete, Edit} from "@material-ui/icons";
import {Link, useHistory} from 'react-router-dom'
import {useEffect, useState} from "react";
import { getPost, deletePost } from "../../services/api";

//show page
const useStyles = makeStyles( (theme) => ({
    container: {
        padding: '0 100px',
        [theme.breakpoints.down('md')]: {
            padding: 0
        }
    },
    image: {
        width: '100%',
        height: '50vh',
        objectFit: 'fill',
        display: 'block'
    },
    icons: {
        float: "right"
    },
    icon: {
        margin: 5,
        borderRadius: 10,
        border: '1px solid #000',
        padding: 5,
        fontSize: 30,
        cursor: "pointer",
    },
    heading: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 25,
        paddingBottom: 10,
        fontSize: 60,
    },
    subheading: {
        color: '#878787',
        display: 'flex',
        margin: '20px 0',
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        }
    },
    link: {
        textDecoration: 'none',
        color: 'inherit'
    }
}))

const DetailView = ({ match }) => {
    const classes = useStyles();
    const url = 'https://scontent.fdad3-1.fna.fbcdn.net/v/t1.6435-9/245963704_614422026382222_3384479556199585781_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=b9115d&_nc_ohc=rWfUAo7s_uoAX9hELE4&_nc_ht=scontent.fdad3-1.fna&oh=4e9dcde47be167c5089184b0d3b73159&oe=6194B66D';

    const [post, setPost] = useState({});
    const history = useHistory();
    const d = new Date(post.createDate);
    const dateString = ("0" + d.getDate()).slice(-2) + "-" + ("0"+(d.getMonth()+1)).slice(-2) + "-" +
        d.getFullYear() ;

    useEffect(() => {
        const fetchData = async () => {
           let data = await getPost(match.params.id);
            console.log(data);
            setPost(data);
        }
        fetchData();
    }, [])

    const deleteBlog = async () => {
         await deletePost(post._id);
         history.push('/')
    }
    
    return(
        <Box className={classes.container}>
            <img src={ post.picture || url } alt="banner" className={classes.image}/>
            <Box className={classes.icons}>
               <Link to={`/update/${post._id}`}><Edit className={classes.icon} color="primary"/></Link>
                <Delete onClick={() => deleteBlog()} className={classes.icon} color="error"/>
            </Box>
            <Typography className={classes.heading}>{post.title}</Typography>
            <Box className={classes.subheading}>
                <Link to={`/?username=${post.username}`} className={classes.link}>
                    <Typography><span style={{fontWeight: 600}}>Author: {post.username}</span></Typography>
                </Link>
                <Typography style={{marginLeft: "auto"}}>{dateString}</Typography>
            </Box>
            <Typography>{post.description}</Typography>
        </Box>
    )
}
export default DetailView;