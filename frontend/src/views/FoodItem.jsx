import React from 'react'
import Card from '@material-ui/core/Card'
import makeStyles from "@material-ui/core/styles/makeStyles";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles({
    card: {
        maxWidth: 345,
        textAlign: "center"
    },
    actionArea: {
        height: 150
    }
});

function FoodItem({ item, onClick, incrementQuantity }) {
    const classes = useStyles();
    const { id, name, photo, price, description } = item

    const handleClick = () => {
        incrementQuantity(id);
    }

    return (
        <Card className={classes.card}>
            <CardActionArea onClick={() => onClick(item)}>
                <CardMedia
                    square
                    image={photo}
                    title={name}
                    className={classes.actionArea}
                />
                <CardContent>
                    <Typography
                        gutterBottom
                        variant='h5'
                        component='h2'>
                        {name}
                    </Typography>
                    <Typography
                        variant='body2'
                        color='textSecondary'
                        component='p'>
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Grid container justify='space-around'>
                    <Button
                        size='small'
                        color='primary'
                        onClick={handleClick}
                    >
                        Add to cart
                    </Button>
                    <Typography>
                        Price
                    </Typography>
                    <Typography>
                        {Number.parseFloat(price).toFixed(2)} zł
                    </Typography>
                </Grid>
            </CardActions>
        </Card>
    )
}

export default FoodItem