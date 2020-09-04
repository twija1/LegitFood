import React from "react";
import {
    Dialog,
    DialogContent,
    DialogContentText
} from "@material-ui/core";

function CheckOutDialog({ onClose, open }) {

    const handleClose = () => onClose()

    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogContent>
                <DialogContentText>
                    Not implemented
                </DialogContentText>
            </DialogContent>
        </Dialog>
    )
}

export default CheckOutDialog