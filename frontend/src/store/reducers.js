export const SET_ITEM = 'SET_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const SET_DATA = 'SET_DATA';
export const INCREMENT = 'INCREMENT';

const increment = (state, { itemId }) => {
    const item = state.cart.find(({ id }) => itemId === id)
    const newCart = item ? state.cart.map(item => item.id === itemId
        ? { ...item, quantity: item.quantity + 1 } : item)
        : [...state.cart, {id: itemId, quantity: 1}]
    return ( { ...state, cart: newCart } )
}

const setItem = (state, { itemId, quantity }) => {
    const newCart = state.cart.find(({ id }) => id === itemId)
        ? state.cart.map(item => item.id === itemId ? ( { ...item, quantity } ) : item)
        : [...state.cart, { id: itemId, quantity }]
    return ( { ...state, cart: newCart.filter(({ quantity }) => quantity >= 1) } );
}

const deleteItem = (state, { itemId }) => {
    const newCart = state.cart.filter(({ id }) => id !== itemId);
    return ( { ...state, cart: newCart } )
}

const setData = (state, { data }) => {
    return ( { ...state, data: data } )
}

const dis = {
    [SET_ITEM]: setItem,
    [DELETE_ITEM]: deleteItem,
    [SET_DATA]: setData,
    [INCREMENT]: increment
}

export const store = (state = { data: [], cart: [] }, action) => {
    const fn = dis[action.type];
    return fn ? fn(state, action.args) : state;
}