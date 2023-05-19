import { Link } from 'react-router-dom';
import usdImage from '../../../assets/images/payments/usd.png';
import cardImage from '../../../assets/images/payments/card.png';
import Button from '../../../components/common/Button/Button';
import Select from '../../../components/common/Select/Select';
import NormalInput from '../../../components/common/NormalInput/NormalInput';
import DatePicker from '../../../components/common/DatePicker/DatePicker';
import { StepPropsType } from '../../../types/basicComponents';

const selectOptions = [
    <div className="cost-type">
        <img src={usdImage} alt="" className="cost-type-icon" />
        <span className="cost-type-title">USD</span>
    </div>,
];

const PaymentStep2 = ({ handlePrevStep }: StepPropsType) => {
    return (
        <>
            <div className="payment-main">
                <p>Please select a payment method</p>
                <div className="form-wrapper">
                    <div className="payment-amount">
                        <Select options={selectOptions} />
                        <NormalInput placeHolder="Enter Amount" className="amount-input" />
                    </div>
                    <p>Please enter card details</p>
                    <div className="card-number-wrapper">
                        <NormalInput placeHolder="Card Number" className="card-number-input" />
                        <img src={cardImage} alt="" />
                    </div>
                    <div className="date-picker-cvv">
                        <DatePicker placeHolder="Expiry Date" className="date-input" />
                        <NormalInput placeHolder="CVV" className="cvv-input" />
                    </div>
                </div>
            </div>
            <div className="link-wrapper">
                <Button title="Pay Now" buttonType="button" type="primary" onClick={handlePrevStep} arrow />
                <br />
                <Link to="/">Back</Link>
            </div>
        </>
    );
};

export default PaymentStep2;
