import React from 'react'
import FoodItem from './FoodItem.jsx'
import * as data from '../data.json'

class FoodPage extends React.Component {
    render() {
        const dataFoodList = data.food.map( (e, index) => <FoodItem name={e.name} photo={e.photo} key={index}/>)
        return (
            <div>
                {dataFoodList}
            </div>
        )
    }
}

export default FoodPage