
import {AppBar, makeStyles, Toolbar, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";

//create style Header
const useStyles = makeStyles({
    component: {
        background: '#fff',
        color: 'black',


    },
    container: {
        justifyContent: 'center',
        '& > *': {
            padding: 20,
            cursor: "pointer",
        }
    },
    home: {
        textDecoration: 'none',
        color: 'inherit',
        "&:hover": {
            backgroundColor: 'rgb(7, 177, 77, 0.42)',
            color: 'rgb(255,236,106)',
            borderRadius: 50
        }
    }
})

//create page Home
const Header = () => {
    const classes = useStyles();
    return(
      <AppBar className={classes.component}>
          <Toolbar className={classes.container}>
            <Link to = {'/'} className = {classes.home}><Typography>HOME</Typography></Link>
              <Typography>ABOUT</Typography>
              <Typography>CONTACT</Typography>
              <Typography>LOGIN</Typography>
          </Toolbar>
      </AppBar>
    )
}
export default Header;