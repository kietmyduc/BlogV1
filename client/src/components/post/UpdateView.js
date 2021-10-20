
import {Box, Button, FormControl, InputBase, makeStyles, TextareaAutosize} from "@material-ui/core";
import {AddCircle} from "@material-ui/icons";
import {useEffect, useState} from "react";
import {getPost, updatePost, uploadFile} from "../../services/api";
import {useHistory} from "react-router-dom";

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

//update initialValue for useState post
const initialValue = {
    title: '',
    description: '',
    picture: '',
    username: 'Team',
    categories: 'All',
    createDate: new Date(),
}

//create page
const UpdateView = ( {match}) => {
    const classes = useStyles();

    const [post, setPost] = useState(initialValue);
    const [file, setFile] = useState('');
    const [image, setImage] = useState('');
    useEffect(() => {
        const getImage = async () => {
            if (file){
                console.log(post.picture)
                const data = new FormData();
                data.append("name", file.name);
                data.append("file", file);

                const image = await uploadFile(data);
                post.picture = image.data;
                setImage(image.data)
            }
        }
        getImage();
    }, [file])

    useEffect(() => {
        const fetchData = async () => {
            let data = await getPost(match.params.id);
            setPost(data);
        }
        fetchData();
    }, []);

    const history = useHistory();

    const url =  post.picture ? post.picture : 'https://scontent.fdad3-3.fna.fbcdn.net/v/t1.6435-9/245976534_614422099715548_2914956693070755603_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=b9115d&_nc_ohc=uQMVv4jspTgAX_MmA4I&_nc_ht=scontent.fdad3-3.fna&oh=604657e0fa0b3054e70ef781aae28f1d&oe=6195D34E'

    const handleChange = (e) => {
        setPost({...post, [e.target.name]: e.target.value})
    }

    const updateBlog = async () => {
        await updatePost(match.params.id, post)
        history.push(`/details/${match.params.id}`)
    }

    return(
        <Box className={classes.container}>
            <img className={classes.image} src={url} alt="banner"/>
            <FormControl className={classes.form}>
                <label htmlFor="fileInput" style={{cursor: "pointer"}}>
                    <AddCircle fontSize='large' color='action'/>
                </label>
                <input type='file' id='fileInput' style={{display: 'none',  cursor: "pointer"}}
                       onChange={(event) => setFile(event.target.files[0])}
                />
                <InputBase placeholder='Title'
                           name={'title'}
                           onChange={e => handleChange(e)}
                           className={classes.textField} value={post.title}
                />
                <Button variant='contained' color='primary'
                        onClick={() => updateBlog()}
                >Update</Button>
            </FormControl>
            <TextareaAutosize
            rowsMin={5}
            placeholder={'Hãy viết theo ý của bạn'}
             className={classes.textarea}
            value={post.description}
            onChange={e => handleChange(e)}
            name={'description'}
             />
        </Box>
    )

}
export default UpdateView;