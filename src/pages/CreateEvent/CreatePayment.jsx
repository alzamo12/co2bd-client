import { motion } from "framer-motion";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from "@stripe/stripe-js";
import CreatePaymentForm from "./CreatePaymentForm";


const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);
const CreatePayment = ({ wizard, onSuccess }) => {
    return (
        <Elements stripe={stripePromise}>
            <CreatePaymentForm wizard={wizard} onSuccess={onSuccess} />
        </Elements>
    );
};

export default CreatePayment;