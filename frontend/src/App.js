import React from 'react';
import LandingPage from './views/LandingPage.jsx'
import FoodPage from './views/FoodPage.jsx'
import './App.css';
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Container from '@material-ui/core/Container'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import {Route, Switch, Link} from 'react-router-dom'
import makeStyles from "@material-ui/core/styles/makeStyles";
import MainDrawer from "./views/MainDrawer.jsx";

const useStyles = makeStyles(theme => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    drawer: {
        flexShrink: 0,
    },
    toolbar: theme.mixins.toolbar
}));

function App() {
    const classes = useStyles();
  return (
    <div className="App">
        <CssBaseline/>
        <AppBar position={"fixed"} className={classes.appBar}>
            <Toolbar>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
            <MainDrawer drawerList={drawerList} classes={classes}/>
            className={classes.drawer}
            variant="permanent">
            <div className={classes.toolbar}/>
        <Container className={classes.content}>
            <div className={classes.toolbar}/>
                <div>
                    <Switch>
                        <Route path='/foodpage' component={FoodPage}/>
                        <Route exact path='/' component={LandingPage}/>
                    </Switch>
                </div>
        </Container>
    </div>
  );
}

export default App;
