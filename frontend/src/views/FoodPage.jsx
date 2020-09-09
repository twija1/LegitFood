import React, { useState } from 'react'
import FoodItem from './FoodItem.jsx'
import Grid from '@material-ui/core/Grid'
import FoodDialog from './FoodDialog'
import { useDispatch, useSelector } from "react-redux";
import { INCREMENT } from "../store/reducers";

function FoodPage() {
    const [dialogState, setDialogState] = useState({ open: false, data: {} });
    const foodData = useSelector(state => state.data);
    const dispatch = useDispatch()

    const handleClickOpen = (item) => {
        setDialogState({ open: true, data: item })
    };

    const handleClose = () => {
        setDialogState({ open: false, data: {} });
    };

    const incrementQuantity = (id) => {
        dispatch({ type: INCREMENT, args: { itemId: id } })
    };

    const dataFoodList = foodData.map((item) => {
        return (
            <Grid item xs={12} sm={4} key={item.id}>
                <FoodItem item={item} onClick={handleClickOpen} incrementQuantity={incrementQuantity}/>
            </Grid> )
    });
    return (
        <Grid container spacing={3}>
            {dataFoodList}
            {dialogState.open && <FoodDialog item={dialogState.data} open={dialogState.open} onClose={handleClose}
                                 incrementQuantity={incrementQuantity}/>}
        </Grid>
    )
}

export default FoodPage