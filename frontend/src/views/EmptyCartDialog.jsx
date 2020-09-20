import React from "react";
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    Button
} from "@material-ui/core";
import { useHistory } from 'react-router-dom'

function EmptyCartDialog({ open, onClose }) {

    const history = useHistory()
    const handleClose = () => onClose()


    const handleClick = () => {
        history.push('/food-page')
    }

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            disableBackdropClick
            disableEscapeKeyDown
        >
            <DialogContent>
                <DialogContentText>
                    Your Cart is empty!
                </DialogContentText>
                <DialogActions>
                    <Button onClick={handleClick}>
                        Go to food list
                    </Button>
                </DialogActions>
            </DialogContent>
        </Dialog>
    )

}

export default EmptyCartDialog