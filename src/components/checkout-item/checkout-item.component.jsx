import React from 'react'
import { connect } from 'react-redux'

import './checkout-item.styles.scss'
import { addItem, clearItems, removeItem } from '../../redux/cart/cart.action'

const CheckoutItem = ({ item, item: { imageUrl, name, quantity, price }, clearItems, addItem, removeItem }) => (
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={imageUrl} alt='item' />
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>
            <div className='arrow' onClick={() => removeItem(item)}>&#10094;</div>
            <div className='value'>{quantity}</div>           
            <div className='arrow' onClick={() => addItem(item)}>&#10095;</div>
        </span>
        <span className='price'>{price}</span>
        <div className='remove-button' onClick={() => clearItems(item)}>&#10005;</div>
    </div>
)

const mapDispatchToProps = dispatch => ({
    clearItems: item => dispatch(clearItems(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem)