import { Link } from 'react-router-dom';
import Button from '../../../components/common/Button/Button';
import PaymentSelect from '../../../components/common/PaymentSelect/PaymentSelect';
import './Donate.scss';

const Donate = () => {
    return (
        <div className="donate">
            <div className="main-section">
                <h1>Donate for a Vision</h1>
                <p>The funds we receive are used to improve the technology we use to diagnose and treat visually impaired persons!</p>

                <div className="payment-wrapper">
                    <div className="payment-main">
                        <p>Please select a payment method</p>
                        <PaymentSelect />
                    </div>
                    <div className="link-wrapper">
                        <Button title="Continue" buttonType="button" type="primary" arrow />
                        <br />
                        <Link to="/">Can't find your payment method?</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Donate;
