import React from "react";
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    Button
} from "@material-ui/core";

function EmptyCartDialog({ open, onClose }) {

    const handleClose = () => onClose()

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
                    <Button href='/food-page'>
                        Go to food list
                    </Button>
                </DialogActions>
            </DialogContent>
        </Dialog>
    )

}

export default EmptyCartDialog