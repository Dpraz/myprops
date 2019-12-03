import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const Stripe = ({ price }) => {
    const priceForStripe = price * 7133;
    const publishableKey = 'pk_test_pGjs2k9cPPUFcdDk0gPh2kWm001cQVI1kQ';

    const onPayment = token => {
        console.log(token);
        alert('Payment Done');
    }

    return (
        <StripeCheckout
            label='Pay Here'
            name='MediCare'
            billingAddress
            shippingAddress
            description={`Total Money ₹${price}`}
            token={onPayment}
            stripeKey={publishableKey}
            amount={priceForStripe}
            countary='India'
        />
    )
};
export default Stripe;