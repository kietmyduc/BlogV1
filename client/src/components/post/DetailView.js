import {Box, makeStyles, Typography} from "@material-ui/core";
import {Delete, Edit} from "@material-ui/icons";
import {Link} from 'react-router-dom'

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
    }
}))

const DetailView = () => {
    const classes = useStyles();
    const url = 'https://scontent.fdad3-1.fna.fbcdn.net/v/t1.6435-9/245963704_614422026382222_3384479556199585781_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=b9115d&_nc_ohc=rWfUAo7s_uoAX9hELE4&_nc_ht=scontent.fdad3-1.fna&oh=4e9dcde47be167c5089184b0d3b73159&oe=6194B66D';
    return(
        <Box className={classes.container}>
            <img src={url} alt="banner" className={classes.image}/>
            <Box className={classes.icons}>
               <Link to={'/update'}><Edit className={classes.icon} color="primary"/></Link>
                <Delete className={classes.icon} color="error"/>
            </Box>
            <Typography className={classes.heading}>Title of the Blog</Typography>
            <Box className={classes.subheading}>
                <Typography><span style={{fontWeight: 600}}>Author: Team</span></Typography>
                <Typography style={{marginLeft: "auto"}}>19/10/2021</Typography>
            </Box>
            <Typography>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci culpa deserunt ea et iure iusto praesentium quaerat qui quibusdam saepe! A aliquid, commodi dignissimos harum iure libero omnis qui voluptas.</Typography>
        </Box>
    )
}
export default DetailView;