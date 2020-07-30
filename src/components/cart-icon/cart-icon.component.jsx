import React from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'


import { CartIconContainer, ShoppingIconContainer, ItemCountSpan } from './cart-icon.styles'

import { toggleCart } from '../../redux/cart/cart.action'

import { selectCartItemsCount } from '../../redux/cart/cart.selectors'


const CartIcon = ({ toggleCart, itemCount }) => (
    <CartIconContainer onClick={toggleCart}>
        <ShoppingIconContainer />
        <ItemCountSpan>{itemCount}</ItemCountSpan>
    </CartIconContainer>
)

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})

const mapDispatchToProps = dispatch => ({
    toggleCart:  () => dispatch(toggleCart())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)