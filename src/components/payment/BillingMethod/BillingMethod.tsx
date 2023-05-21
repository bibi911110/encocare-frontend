import PaymentSelect from '../../common/PaymentSelect/PaymentSelect';
import './BillingMethod.scss';

const BillingMethod = () => {
    return (
        <div className="billing-method">
            <h2>Billing Method</h2>
            <PaymentSelect />
            <p>Can't find your payment method?</p>
        </div>
    );
};

export default BillingMethod;
