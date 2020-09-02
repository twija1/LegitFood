import React from "react";
import { List, Drawer } from "@material-ui/core";

function MainDrawer({ drawerList, classes }) {
    return (
        <Drawer
            className={classes.drawer}
            variant="permanent"
            anchor="left"
            classes={{
                paper: classes.drawerPaper
            }}
        >
            <div className={classes.toolbar}/>
            <List>
                {drawerList}
            </List>
        </Drawer>
    )
}

export default MainDrawer