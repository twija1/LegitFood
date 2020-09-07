import React, { useState } from 'react'
import FoodItem from './FoodItem.jsx'
import Grid from '@material-ui/core/Grid'
import FoodDialog from './FoodDialog'
import { useSelector } from "react-redux";

function FoodPage() {
    const [dialogState, setDialogState] = useState({ open: false, data: {} });
    const foodData = useSelector(state => state.data);

    const handleClickOpen = (item) => {
        setDialogState({ open: true, data: item })
    };
    const handleClose = () => {
        setDialogState({ open: false, data: {} });
    };
    const dataFoodList = foodData.map((item) => {
        return (
            <Grid item xs={12} sm={4}>
                <FoodItem item={item} key={item.id} onClick={handleClickOpen}/>
            </Grid> )
    });
    return (
        <Grid container spacing={3}>
            {dataFoodList}
            <FoodDialog item={dialogState.data} open={dialogState.open} onClose={handleClose}/>
        </Grid>
    )
}

export default FoodPage