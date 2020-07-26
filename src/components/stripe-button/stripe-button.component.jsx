import React from 'react'
import { connect } from 'react-redux'

import StripeCheckout from 'react-stripe-checkout'
import { clearAll } from '../../redux/cart/cart.action'

const StripeCheckoutButton = ({ price, dispatch }) => {
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_RnZ6bHQaELwpkhXCewravJ6O'

    const onToken = token => {
        console.log(token)
        dispatch(clearAll())
    }

    return (
        <StripeCheckout 
        amount={priceForStripe}
        name='Give me your money!'
        label='Pay Now'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is $${price}`}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />
    )
}




export default connect()(StripeCheckoutButton)