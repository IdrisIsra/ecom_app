import { CartActionTypes } from './cart.type'

export const toggleCart = () => ({
    type: CartActionTypes.TOGGLE_CART
})

export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
})

export const removeItem = item => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: item
})