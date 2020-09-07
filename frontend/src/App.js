import React, { useEffect } from 'react'
import LandingPage from './views/LandingPage.jsx'
import FoodCart from './views/FoodCart.jsx'
import FoodPage from './views/FoodPage.jsx'
import {
    ListItem,
    ListItemText,
    Container,
    AppBar,
    CssBaseline, Typography,
} from '@material-ui/core'
import { Route, Switch, Link, Redirect } from 'react-router-dom'
import makeStyles from "@material-ui/core/styles/makeStyles"
import * as data from './data.json'
import { useDispatch } from "react-redux";
import { SET_DATA } from "./store/reducers";
import MainDrawer from "./views/MainDrawer.jsx";

const drawerWidth = 100;

const useStyles = makeStyles(theme => ( {
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        padding: 16,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    drawer: {
        flexShrink: 0,
        width: drawerWidth,
    },
    drawerPaper: {
        width: drawerWidth
    },
    toolbar: theme.mixins.toolbar,
    root: {
        display: 'flex'
    }
} ));

function App() {
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: SET_DATA, args: { data: data.food } })
    })

    const drawerItems = [
        { text: 'Main', link: '/landing-page' },
        { text: 'Food', link: '/food-page' },
        { text: 'Cart', link: '/shopping-cart-page' }
    ];

    const drawerList = drawerItems.map((category, index) => (
        <ListItem alignItems='center' button key={index} component={Link} to={category.link}>
            <ListItemText style={{textAlign: "center"}} primary={category.text}/>
        </ListItem>
    ))

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <AppBar position="fixed" className={classes.appBar}>
                <Typography variant='h6'>
                    LegitFood
                </Typography>
            </AppBar>
            <MainDrawer drawerList={drawerList} classes={classes}/>
            <Container className={classes.content}>
                <div className={classes.toolbar}/>
                <div>
                    <Switch>
                        <Redirect exact from='/' to='/landing-page'/>
                        <Route path='/food-page'
                               component={() => <FoodPage/>}/>
                        <Route path='/shopping-cart-page'
                               component={() => <FoodCart/>}/>
                        <Route exact path='/landing-page'
                               component={() => <LandingPage/>}/>
                    </Switch>
                </div>
            </Container>
        </div>
    );
}

export default App;
