import React from 'react'
import FoodItem from './FoodItem.jsx'
import * as data from '../data.json'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

class FoodPage extends React.Component {
    render() {
        const dataFoodList = data.food.map((e, index) => {
            return (
                <Grid item xs={12} sm={4}>
                    <FoodItem name={e.name} photo={e.photo} price={e.price} key={index}/>
                </Grid>)
        });
        return (
            <Grid container spacing={3}>
                    {dataFoodList}
            </Grid>
        )
    }
}

export default FoodPage