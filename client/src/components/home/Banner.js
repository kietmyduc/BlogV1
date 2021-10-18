import {Box, makeStyles, Typography} from "@material-ui/core";


//create style Banner


const useStyles = makeStyles({
    image: {
        background: `url(${'https://scontent.fdad3-2.fna.fbcdn.net/v/t1.6435-9/246287784_1182346272254381_5438137916788480603_n.jpg?_nc_cat=1&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=ec6WCXNUNbcAX9kqxQM&_nc_ht=scontent.fdad3-2.fna&oh=c73ac55010882c79d883d9ec65ea1d66&oe=6192DB90'}) center/55% repeat-x #000`,
        backgroundImage: 'cover',
        width: '100%',
        height: '50vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        '& :first-child': {
            fontSize: 66,
            color: '#FFFFFF',
            lineHeight: 1,
        },
        '& :last-child': {
            fontSize: 20,
            backgroundColor: '#FFF'
        }
    }
})

const Banner = () => {
    const classes = useStyles();
    return(
        <Box className = {classes.image}>
            <Typography>BLOG</Typography>
            <Typography>Hello May Cung</Typography>
        </Box>
    )
};

export default Banner;