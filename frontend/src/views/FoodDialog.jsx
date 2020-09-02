import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'
import Button from '@material-ui/core/Button';
import { useDispatch } from "react-redux";
import { INCREMENT } from "../store/reducers";

const useStyles = makeStyles({
    card: {
        width: 345
    },
    actionArea: {
        height: 150
    },
    img: {
        height: '50%',
        width: '50%',
        float: 'left',
        marginRight: 5
    },
    content: {
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    allergens: {
        clear: 'left'
    }
});

function FoodDialog({ onClose, open, item }) {
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleClose = () => {
        onClose()
    };
    const ingredients = item.ingredients ? item.ingredients.join(', ') : '';
    const allergenes = item.allergens ? item.allergens.join(', ') : '';

    const handleClick = () => {
        dispatch({type: INCREMENT, args: { itemId: item.id } })
    }

    return (
        <Dialog onClose={handleClose} aria-labelledby='simple-dialog-title' open={open} fullWidth='sm'>
            <DialogTitle>
                {item.name}
            </DialogTitle>
            <DialogContent className={classes.content}>
                <img src={item.photo} alt={item.name} className={classes.img}/>
                <DialogContentText>
                    <p>
                        {item.description}
                    </p>
                    Ingredients: {ingredients}
                </DialogContentText>
                <DialogContentText className={classes.allergens}>
                    Allergens: {allergenes}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClick}>
                    Add to cart
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default FoodDialog
