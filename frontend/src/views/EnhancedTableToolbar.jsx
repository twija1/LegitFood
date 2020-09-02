import React from "react";
import { lighten, Toolbar, Tooltip, Typography, IconButton } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import clsx from 'clsx';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList'

const useToolbarStyles = makeStyles((theme) => ( {
    root: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(1),
    },
    highlight: {
        color: theme.palette.secondary.main,
        backgroundColor: lighten(theme.palette.secondary.light, 0.75),
    },
    title: {
        flex: '1 1 100%',
    },
} ))

function TableToolbar({ numSelected, deleteItems }) {

    const classes = useToolbarStyles();

    return (
        <Toolbar
            className={clsx(classes.root, { [classes.highlight]: numSelected > 0 })}>
            {numSelected > 0 ? (
                <Typography className={classes.title} color="inherit" variant="subtitle1" component="div">
                    {numSelected} selected
                </Typography>
            ) : (
                <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
                    Your Cart
                </Typography>
            )}
            {numSelected > 0 ? (
                <Tooltip title="Delete">
                    <IconButton aria-label="delete" onClick={deleteItems}>
                        <DeleteIcon/>
                    </IconButton>
                </Tooltip>
            ) : (
                <Tooltip title="Filter list">
                    <IconButton aria-label='filter list'>
                        <FilterListIcon/>
                    </IconButton>
                </Tooltip>
            )
            }
        </Toolbar>
    )
}

export default TableToolbar