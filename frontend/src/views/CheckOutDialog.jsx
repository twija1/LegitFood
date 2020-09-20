import React, { useState } from "react";
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    TextField,
    Button
} from "@material-ui/core";

function CheckOutDialog({ onClose, open, onOrder }) {

    const [location, setLocation] = useState('');
    const [comment, setComment] = useState('');

    const handleClose = () => onClose()

    const handleOrderClick = () => {
        onOrder(location, comment)
        handleClose()
    };

    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogContent>
                <DialogContentText>
                    Complete form
                </DialogContentText>
                <TextField
                    required
                    autoFocus
                    margin='dense'
                    fullWidth
                    label='Location'
                    onChange={(e) => setLocation(e.target.value)}
                />
                <TextField
                    fullWidth
                    margin='dense'
                    label='Comment'
                    onChange={(e) => setComment(e.target.value)}
                />
            </DialogContent>
            <DialogActions>
                <Button
                    onClick={handleOrderClick}
                >
                    order
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default CheckOutDialog