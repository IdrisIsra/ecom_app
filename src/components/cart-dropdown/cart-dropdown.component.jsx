import React from 'react'
import styled from 'styled-components'

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom'

import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'
import { selectCartItems } from '../../redux/cart/cart.selectors'

import { toggleCart } from '../../redux/cart/cart.action';

import { CartDropdownContainer, CartItemsContainer, EmptyMessageContainer } from './cart-dropdown.styles'

const CheckoutButton = styled(CustomButton)`
    margin-top: auto;   
`

const CartDropdown = ({ cartItems, history, dispatch }) => (
    <CartDropdownContainer>
        <CartItemsContainer>
            {
                cartItems.length ?
                cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
                : 
                <EmptyMessageContainer>Your cart is empty.</EmptyMessageContainer>
            }
        </CartItemsContainer>
        <CheckoutButton onClick={() => {
            history.push('/checkout');
            dispatch(toggleCart());
        }}
        
        >CHECKOUT</CheckoutButton>
    </CartDropdownContainer>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));