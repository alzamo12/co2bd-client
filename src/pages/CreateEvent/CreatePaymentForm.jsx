import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { motion } from "framer-motion";
import { useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";

const CARD_OPTIONS = {
    style: {
        base: {
            iconColor: '#ccc',
            color: '#fff',
            fontSize: '16px',
            '::placeholder': { color: '#777' },
            backgroundColor: 'transparent',
        },
        invalid: {
            iconColor: '#ef4444',
            color: '#ef4444',
        },
    },
};
const CreatePaymentForm = ({wizard, onSuccess }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState("");
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();


    const handlePaymentSubmit = async (e) => {
        e.preventDefault();
        console.log('hitted')
        if (!stripe || !elements) {
            return;
        };

        const card = elements.getElement(CardElement);
        if (!card) {
            return;
        };

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log(error)
            setError(error.message)
        }
        else {
            setError("")
            console.log(paymentMethod)
        };

        const res = await axiosSecure.post("/create-payment-intent");
        console.log('create payment intent data',res?.data)

        const clientSecret = res.data.clientSecret;

        const result = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: user?.displayName
                }
            }
        });

        if (result.error) {
            console.log("result error", result.error)
        }
        else {
            if (result.paymentIntent.status === 'succeeded') {
                console.log("Payment Succeeded")
                onSuccess(result?.paymentIntent)
            }
        }
    };
    return (
        <div>
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="flex items-center justify-center p-4"
            >
                <motion.form
                    onSubmit={handlePaymentSubmit}
                    initial={{ y: 20 }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                    className="w-full max-w-md bg-gray-800 rounded-2xl shadow-2xl p-8 space-y-6"
                >
                    <h2 className="text-2xl font-bold text-center text-white">Complete Payment</h2>

                    <div className="p-4 bg-gray-700 rounded-lg border border-gray-600">
                        <CardElement options={CARD_OPTIONS} />
                    </div>

                    {error && (
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-red-500 text-sm text-center"
                        >
                            {error}
                        </motion.p>
                    )}

                    <motion.button
                        type="submit"
                        disabled={!stripe}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full text-white font-semibold disabled:opacity-50 transition"
                    >
                        Pay Now
                    </motion.button>
                </motion.form>
            </motion.div>
            <button
                type="button"
                onClick={() => wizard?.previousStep()}
                className="btn btn-outline"
            >
                ← Back
            </button>
        </div>
    );
};

export default CreatePaymentForm;