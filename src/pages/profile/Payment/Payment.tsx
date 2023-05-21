import { Link } from 'react-router-dom';
import BillingMethod from '../../../components/payment/BillingMethod/BillingMethod';
import BillingDetail from '../../../components/payment/BillingDetail/BillingDetail';
import SelectBank from '../../../components/payment/SelectBank/SelectBank';
import BankAlert from '../../../components/payment/BankAlert/BankAlert';
import Button from '../../../components/common/Button/Button';
import paymentMethodImage from '../../../assets/images/payments/method.png';
import { leftArrowIcon2 } from '../../../assets/icons/common';
import './Payment.scss';

const Payment = () => {
    return (
        <div className="profile-membership-payment">
            <div className="main-section">
                <h1>Select a payment method</h1>
                <p>We accept Master Card, VISA and Paypal</p>

                <div className="card-wrapper">
                    <div className="left-section">
                        {/* <BillingMethod /> */}
                        {/* <BillingDetail /> */}
                        {/* <SelectBank /> */}
                        <BankAlert />
                    </div>
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
                    <Button title="Processed to payment" type="primary" />
                    <Link to="/">
                        <span>{leftArrowIcon2}</span>
                        Back
                    </Link>
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
