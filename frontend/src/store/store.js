import { createStore } from "redux";

import { store, SET_ITEM, DELETE_ITEM, SET_DATA, INCREMENT } from "./reducers";

const setItem = () => store.dispatch({type: SET_ITEM});
const deleteItem = () => store.dispatch({type: DELETE_ITEM});
const setData = () => store.dispatch({type: SET_DATA});
const increment = () => store.dispatch({type: INCREMENT});
const getState = store.getState;
const subscribe = store.subscribe;
const storeInstance = createStore(store)

export const StoreService = {
    setItem,
    deleteItem,
    setData,
    increment,
    getState,
    subscribe,
    storeInstance
};