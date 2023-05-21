import Button from '../../../components/common/Button/Button';
import successImage from '../../../assets/images/success2.png';
import paymentMethodImage from '../../../assets/images/payments/method.png';
import './PaymentSuccess.scss';
import { Link } from 'react-router-dom';

const PaymentSuccess = () => {
    return (
        <div className="payment-success">
            <div className="payment-success-content">
                <img src={successImage} alt="" />
                <h1>Payment Successful!</h1>
                <p>
                    You're done! We hope you enjoy your subscription with Encocare! We've sent you an email{' '}
                    <br className="desktop-only" />
                    with details of your dashboard login credentials!
                </p>
                <Button title="Go to Dashboard" type="primary" />
                <Link to="/">Didn't receive the email?</Link>

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

export default PaymentSuccess;
