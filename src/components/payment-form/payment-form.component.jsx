import { CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
// import {Button } from "./../button/button.component";

import { PaymentFormContainer, FormContainer, PaymentButton} from './payment-form.styles';

const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const paymentHandler = async (e) => {
        e.preventDefault();

        if(!stripe || !elements) {
            return;
        }
        const response = await fetch('/.netlify/functions/create-payment-intent',{
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ amount: 10000 })
        }).then((res) =>  {
            return res.json()
        })

        const client_secret = response.paymentIntent.client_secret

        const paymentResult = await stripe.confirmCardPayment(client_secret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: 'Yihua Zhang',
                    "address[line1]":"510 Townsend St",
                    "address[postal_code]":98140,
                    "address[city]":"San Francisco",
                    "address[state]":"CA",
                    "address[country]":"US"
                }
            }
        });

        if(paymentResult.error) {
            alert(paymentResult.error);
        } else {
            if(paymentResult.paymentIntent.status === 'succeeded') {
                alert('Payment Successful');
            }
        }
    };

    return (
        <PaymentFormContainer>
            <FormContainer onSubmit={paymentHandler}>
                <h2>Credit Card Payment: </h2>
                <CardElement />
                    <PaymentButton 
                        buttonType='inverted'
                        // isLoading={isProcessingPayment}
                    > 
                        Pay now 
                    </PaymentButton>
            </FormContainer>
        </PaymentFormContainer>
    )
};

export default PaymentForm;