import { useState } from 'react';
import './Donate.scss';
import PaymentStep1 from './PaymentStep1';
import PaymentStep2 from './PaymentStep2';

const Donate = () => {
    const [paymentStep, setPaymentStep] = useState(0);

    const handleNextPaymentStep = () => {
        setPaymentStep(paymentStep + 1);
    };

    const handlePrevPaymentStep = () => {
        setPaymentStep(paymentStep - 1);
    };

    return (
        <div className="donate">
            <div className="main-section">
                <h1>Donate for a Vision</h1>
                <p>
                    The funds we receive are used to improve the technology we use to diagnose and treat visually
                    impaired persons!
                </p>

                <div className="payment-wrapper">
                    {paymentStep === 0 && (
                        <PaymentStep1 handleNextStep={handleNextPaymentStep} handlePrevStep={handlePrevPaymentStep} />
                    )}
                    {paymentStep === 1 && (
                        <PaymentStep2 handleNextStep={handleNextPaymentStep} handlePrevStep={handlePrevPaymentStep} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Donate;
