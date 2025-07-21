import React from 'react';

const CreatePayment = ({ wizard }) => {
    return (
        <div>
            <fieldset fieldset="true" className="fieldset">
                <label className="label">Email</label>
                <input type="email" className="input" placeholder="Email" />
                <label className="label">Password</label>
                <input type="password" className="input" placeholder="Password" />
                <div><a className="link link-hover">Forgot password?</a></div>
                <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>
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

export default CreatePayment;