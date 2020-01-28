import React from 'react';
import LandingPage from './views/LandingPage.jsx'
import FoodPage from './views/FoodPage.jsx'
import './App.css';
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Container from '@material-ui/core/Container'
import {BrowserRouter, Route, Switch, Link, useHistory} from 'react-router-dom'

function App() {

  return (
    <div className="App">
        <Drawer
            variant="permanent">
            <List>
                {[{text:'Account', link:''}, {text:'Food', link:'/foodpage'}, {text:'Delivery', link:'/deliverypage'}].map((category, index) => (
                    <ListItem button key={index} component={Link} to={category.link}>
                        <ListItemText primary={category.text}/>
                    </ListItem>
                ))}
            </List>
        </Drawer>
        <Container>
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
