import React from 'react';

import { CartItemContainer, ItemDetailsContainer, NameSpan } from './cart-item.styles'


const CartItem = ({ item: { imageUrl, price, name, quantity }}) => (
    <CartItemContainer>
        <img src={imageUrl} alt='item' />
        <ItemDetailsContainer>
            <NameSpan>{name}</NameSpan>
            <span className='price'>{quantity} x ${price}</span>

        </ItemDetailsContainer>
    </CartItemContainer>

)

export default CartItem;