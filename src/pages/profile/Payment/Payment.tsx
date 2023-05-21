import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BillingMethod from '../../../components/payment/BillingMethod/BillingMethod';
import BillingDetail from '../../../components/payment/BillingDetail/BillingDetail';
import BankAlert from '../../../components/payment/BankAlert/BankAlert';
import BankAuthenticate from '../../../components/payment/BankAuthenticate/BankAuthenticate';
import BankAuthorize from '../../../components/payment/BankAuthorize/BankAuthorize';
import BankFinalStep from '../../../components/payment/BankFinalStep/BankFinalStep';
import BankConfirm from '../../../components/payment/BankConfirm/BankConfirm';
import BankSuccess from '../../../components/payment/BankSuccess/BankSuccess';
import BankSelect from '../../../components/payment/BankSelect/BankSelect';
import Button from '../../../components/common/Button/Button';
import paymentMethodImage from '../../../assets/images/payments/method.png';
import { leftArrowIcon2 } from '../../../assets/icons/common';
import './Payment.scss';

const Payment = () => {
    const [step, setStep] = useState(0);
    const [payment, setPayment] = useState('card');

    const navigate = useNavigate();

    const steps = [
        { component: <BillingMethod handleMethod={setPayment} />, buttonTitle: 'Proceed to payment' },
        { component: <BankSelect />, buttonTitle: 'Continue' },
        { component: <BankAlert />, buttonTitle: 'Yes, I Agree' },
        { component: <BankAuthenticate />, buttonTitle: 'Login to Starling Bank' },
        { component: <BankAuthorize />, buttonTitle: 'Login to Starling Bank' },
        { component: <BankFinalStep />, buttonTitle: 'Proceed & Pay' },
        { component: <BankConfirm />, buttonTitle: 'Proceed & Pay' },
        { component: <BankSuccess />, buttonTitle: 'Back to dashboard' },
        { component: <BillingDetail />, buttonTitle: 'Pay Now' },
    ];

    const handleNextChange = () => {
        if (payment === 'card') {
            if (step === 0) {
                setStep(8);
            } else {
                navigate('/profile/membership/payment/success');
            }
        } else if (payment === 'bank') {
            if (step === 7) {
                navigate('/profile/dashboard');
            } else {
                setStep(step + 1);
            }
        }
    };

    const handlePrevChange = () => {
        if (payment === 'card') {
            if (step === 8) {
                setStep(0);
            }
        } else if (payment === 'bank') {
            if (step !== 0) {
                setStep(step - 1);
            }
        }
    };

    return (
        <div className="profile-membership-payment">
            <div className="main-section">
                <h1>Select a payment method</h1>
                <p>We accept Master Card, VISA and Paypal</p>

                <div className="card-wrapper">
                    <div className="left-section">{steps[step].component}</div>
                    <div className="right-section">
                        <div className="plan-card">
                            <div className="card-header">Enterprise Plan</div>
                            <div className="card-body">
                                <p className="price-title">
                                    <span>$</span>
                                    <span>120</span>
                                    <span>/month</span>
                                </p>
                                <div className="link-title">
                                    <span>Billed Annually</span>
                                    <span>Change Plan</span>
                                </div>
                            </div>
                        </div>
                        <div className="detail-card">
                            <div className="detail-1">
                                <h3>Billing Details</h3>
                                <div className="between-content">
                                    <div>
                                        <p>Base Price</p>
                                        <p>(Enterprise)</p>
                                    </div>
                                    <p>$ 240</p>
                                </div>
                            </div>
                            <div className="detail-2">
                                <div className="between-content">
                                    <p>VAT (2%)</p>
                                    <p>$ 2.4</p>
                                </div>
                                <div className="between-content">
                                    <p>Service Fee</p>
                                    <p>$ 1.5</p>
                                </div>
                            </div>
                            <div className="detail-3">
                                <div className="between-content">
                                    <p>Total</p>
                                    <p>$243.9</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="button-wrapper">
                    <Button title="Processed to payment" type="primary" onClick={handleNextChange} />
                    <p onClick={handlePrevChange}>
                        <span>{leftArrowIcon2}</span>
                        Back
                    </p>
                </div>

                <div className="method-wrapper">
                    <p>Accepted Methods:</p>
                    <img src={paymentMethodImage} alt="" />
                </div>
            </div>

            <div className="support-link">
                <p>
                    Have a problem? Contact <span>Customer Support Team</span>
                </p>
            </div>
        </div>
    );
};

export default Payment;
