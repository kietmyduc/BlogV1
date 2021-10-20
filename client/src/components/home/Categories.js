import {Button, makeStyles, Table, TableBody, TableCell, TableHead, TableRow} from "@material-ui/core";
import {Link} from 'react-router-dom'

import {categories} from "../../constants/data";
//create style Categories
const useStyles = makeStyles({
    create: {
        margin: 20,
        background: '#6495ED',
        color: '#FFF',
        width: '86%'
    },
    table: {
        border: '1px solid rgba(224, 224, 224, 1)',
        cursor: 'pointer',
        textDecoration: 'none',
        color: 'inherit'
    },
    cell: {
        fontSize: 20,
        "&:hover": {
            backgroundColor: 'rgb(7, 177, 77, 0.42)',
            fontSize: 24
        },
    }, linkCreate: {
        textDecoration: 'none',
        color: 'inherit'
    },
})

const Categories = () => {
    const classes = useStyles();
    return(
        <div>

            <Link to={'/create'} className={classes.linkCreate}> <Button variant="contained" className={classes.create}>Create Blog</Button></Link>
            {/*  create Table Categories  */}
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell className={classes.cell}>
                            <Link to={'/'} className = {classes.linkCreate}>
                                All Categories
                            </Link>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                        {
                            categories.map((category, index) => {
                                return (
                                    <TableRow key={index}>
                                            <TableCell className={classes.cell}>
                                                <Link to={`/?category=${category}`} className = {classes.linkCreate}>
                                                {category}
                                                </Link>
                                            </TableCell>
                                    </TableRow>
                                )
                            })
                        }
                </TableBody>
            </Table>
        </div>

    )
}
export default Categories;