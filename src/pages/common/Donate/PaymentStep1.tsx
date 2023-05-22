import { Link } from 'react-router-dom';
import Button from '../../../components/common/Button/Button';
import PaymentSelect from '../../../components/common/PaymentSelect/PaymentSelect';
import { StepPropsType } from '../../../types/basicComponents';

const PaymentStep1 = ({ handleNextStep }: StepPropsType) => {
    return (
        <>
            <div className="payment-main">
                <p>Please select a payment method</p>
                <PaymentSelect />
            </div>
            <div className="link-wrapper">
                <Button title="Continue" type="primary" onClick={handleNextStep} arrow />
                <br />
                <Link to="/">Can't find your payment method?</Link>
            </div>
        </>
    );
};

export default PaymentStep1;
