import React from 'react'
import Card from '@material-ui/core/Card'
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
    card: {
        maxWidth: 345,
    }
});

function FoodItem({name, photo}) {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            {name}
        </Card>
    )
}

export default FoodItem