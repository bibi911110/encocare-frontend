import CardNumberInput from '../../common/CardNumberInput/CardNumberInput';
import DatePicker from '../../common/DatePicker/DatePicker';
import NormalInput from '../../common/NormalInput/NormalInput';
import './BillingDetail.scss';

const BillingDetail = () => {
    return (
        <div className="billing-detail">
            <h2>Enter Billing Details</h2>
            <div className="input-wrapper">
                <NormalInput placeHolder="Holder Name" />
                <CardNumberInput placeHolder="Card Number" />
                <div className="date-picker-cvv">
                    <DatePicker placeHolder="Expiry Date" className="date-input" />
                    <NormalInput placeHolder="CVV" className="cvv-input" />
                </div>
            </div>
        </div>
    );
};

export default BillingDetail;
