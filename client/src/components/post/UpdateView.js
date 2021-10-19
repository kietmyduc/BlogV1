
import {Box, Button, FormControl, InputBase, makeStyles, TextareaAutosize} from "@material-ui/core";
import {AddCircle} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
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
    form: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10
    },
    textField: {
        flex: 1,
        margin: '0 30px',
        fontSize: 30
    }, textarea: {
        width: '100%',
        marginTop: 50,
        border: 'none',
        fontSize: 18,
        '&: focus-visible' : {
            outline: 'none'
        }
    }
}))
//create page
const UpdateView = () => {
    const classes = useStyles();
    const url = 'https://scontent.fdad3-3.fna.fbcdn.net/v/t1.6435-9/245976534_614422099715548_2914956693070755603_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=b9115d&_nc_ohc=uQMVv4jspTgAX_MmA4I&_nc_ht=scontent.fdad3-3.fna&oh=604657e0fa0b3054e70ef781aae28f1d&oe=6195D34E'
    return(
        <Box className={classes.container}>
            <img className={classes.image} src={url} alt="banner"/>
            <FormControl className={classes.form}>
                <AddCircle fontSize='large' color='action'/>
                <InputBase placeholder='Title' className={classes.textField}/>
                <Button variant='contained' color='primary'>Update</Button>
            </FormControl>
            <TextareaAutosize
            rowsMin={5}
            placeholder={'Hãy viết theo ý của bạn'}
             className={classes.textarea}
             />
        </Box>
    )

}
export default UpdateView;