import React, { useMemo, useState } from 'react'
import {
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    makeStyles,
    Checkbox,
    Button,
    Typography,
    TextField
} from '@material-ui/core';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { useDispatch, useSelector } from "react-redux";
import { DELETE_ITEM, SET_ITEM } from "../store/reducers";
import TableToolbar from "./EnhancedTableToolbar";

const useStyles = makeStyles((theme) => ( {
    table: {
        minWidth: 700,
    },
    paper: {
        width: '100%',
        marginBottom: theme.spacing(2)
    },
    checkout: {
        float: 'right'
    },
    qty: {
        width: 80
    }
} ))

function FoodCart() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const data = useSelector(state => state.data);
    const [checked, setChecked] = useState([]);
    const memoizedCartItems = useMemo(() => cart.map(({ id, quantity }) => ( {
        item: data.find(item => item.id === id),
        quantity
    } )), [cart, data])

    const to2Decimal = (number) => ( ( number * 100 ) / 100 ).toFixed(2)

    const delivery = 10;

    const subtotal = memoizedCartItems.map(({ item, quantity }) => item.price * quantity).reduce((sum, i) => sum + i, 0);

    const total = to2Decimal(delivery + subtotal)

    const handleCheckboxChange = (clickedId) => {
        checked.includes(clickedId)
            ? setChecked(checked.filter(id => clickedId !== id))
            : setChecked([...checked, clickedId])
    }

    const handleAllSelectClick = () => {
        checked.length === memoizedCartItems.length
            ? setChecked([])
            : setChecked(memoizedCartItems.map(({ item }) => item.id))
    }

    const handleQuantityChange = (e, id) => {
        const qty = Math.floor(e.target.value)
        qty > 0
            ? dispatch({type: SET_ITEM, args: {itemId: id, quantity: qty}})
            : dispatch({type: SET_ITEM, args: {itemId: id, quantity: 1}})
    }

    const tableBody = memoizedCartItems.map(({ item, quantity }) =>
        <TableRow key={item.id}>
            <TableCell padding='checkbox'>
                <Checkbox
                    checked={checked.includes(item.id)}
                    onChange={() => handleCheckboxChange(item.id)}
                />
            </TableCell>
            <TableCell align="left">
                {item.name}
            </TableCell>
            <TableCell align='center'>
                    <TextField
                        type='number'
                        value={quantity}
                        onChange={(e) => handleQuantityChange(e, item.id)}
                        size='small'
                        variant='outlined'
                        className={classes.qty}
                    />
                </IconButton>
            </TableCell>
            <TableCell align="center">{to2Decimal(item.price)}</TableCell>
            <TableCell align='right'>{to2Decimal(item.price * quantity)}</TableCell>
        </TableRow>)

    const deleteItems = () => {
        checked.map(id => dispatch({ type: DELETE_ITEM, args: { itemId: id } }))
        setChecked([])
    }

    return (
        <div>
            {
                memoizedCartItems.length === 0
                    ? <Typography variant='h6' align='center'>Your cart is empty!</Typography>
                    : <Paper className={classes.paper}>
                        <TableToolbar numSelected={checked.length} deleteItems={deleteItems}/>
                        <TableContainer component={Paper}>
                            <Table classes={classes.table} aria-label='spanning table' size="small">
                                <TableHead>
                                    <TableRow>
                                        <TableCell/>
                                        <TableCell align='left' colSpan={3}>
                                            Details
                                        </TableCell>
                                        <TableCell align='right'>
                                            Price
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell padding='checkbox'>
                                            <Checkbox
                                                indeterminate={checked.length > 0 && checked.length < memoizedCartItems.length}
                                                onChange={handleAllSelectClick}
                                                checked={checked.length === memoizedCartItems.length && memoizedCartItems.length > 0}
                                            />
                                        </TableCell>
                                        <TableCell align="left">Desc</TableCell>
                                        <TableCell align="center">Qty.</TableCell>
                                        <TableCell align="center">Unit</TableCell>
                                        <TableCell align="right">Sum</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {tableBody}
                                    <TableRow>
                                        <TableCell rowSpan={3} colSpan={3}/>
                                        <TableCell align='left'>Subtotal</TableCell>
                                        <TableCell align='right'>{to2Decimal(subtotal)}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell align="left">Delivery</TableCell>
                                        <TableCell align="right">{to2Decimal(delivery)}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell align='left'>Total</TableCell>
                                        <TableCell align="right">{total}</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <Button
                            disabled={memoizedCartItems.length === 0}
                            className={classes.checkout}
                        >
                            Checkout
                        </Button>
                    </Paper>
            }
        </div>
    )
}

export default FoodCart