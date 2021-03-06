import { CartActionTypes } from './cart.type'

export const toggleCart = () => ({
    type: CartActionTypes.TOGGLE_CART
})

export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
})

export const clearItems = item => ({
    type: CartActionTypes.CLEAR_ITEM,
    payload: item
})

export const removeItem = item => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: item
})

export const clearAll = () => ({
    type: CartActionTypes.CLEAR_ALL
})