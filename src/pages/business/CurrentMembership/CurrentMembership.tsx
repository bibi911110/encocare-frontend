import { cardIcon, checkCircleIcon, crossCircleIcon, leftArrowIcon2, planIcon } from '../../../assets/icons/common';
import { plusCircleIcon } from '../../../assets/icons/sidebar';
import cardImage from '../../../assets/images/payments/card2.png';
import Button from '../../../components/common/Button/Button';
import './CurrentMembership.scss';

const CurrentMembership = () => {
    return (
        <div className="current-membership">
            <div className="main-header">
                <h1>
                    <span>{leftArrowIcon2}</span>Membership Plans
                </h1>
                <p>
                    Admin can see his current plan here and request change of plan or cancel subscription here. All
                    admin can add payment methods.
                </p>
            </div>
            <div className="main-content">
                <div className="card-wrapper">
                    <div className="left-section">
                        <div className="card">
                            <div className="card-title">
                                <span className="hospital-icon">{planIcon}</span>
                                CURRENT PLAN
                            </div>
                            <div className="card-body">
                                <div className="plan-card">
                                    <div className="plan-card-header">
                                        <h1>Enterprise Plan</h1>
                                        <div>
                                            <p className="main">
                                                <span className="unit">$</span>
                                                <span className="mount">120</span>
                                                <span className="per">/month</span>
                                            </p>
                                            <p className="desc">Billed Annually</p>
                                        </div>
                                    </div>
                                    <div className="plan-card-body">
                                        <div className="check-section">
                                            <div className="child-item">
                                                <span>{checkCircleIcon}</span>
                                                20 Tests/Month
                                            </div>
                                            <div className="child-item">
                                                <span>{checkCircleIcon}</span>
                                                PDF and Electronic Reports
                                            </div>
                                            <div className="child-item">
                                                <span>{checkCircleIcon}</span>
                                                Free Consultation
                                            </div>
                                        </div>
                                        <div className="cross-section">
                                            <div className="child-item">
                                                <span>{crossCircleIcon}</span>
                                                Enterprise Access
                                            </div>
                                            <div className="child-item">
                                                <span>{crossCircleIcon}</span>
                                                Unlimited Cloud Storage
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mobile-subscribe-button">
                                        <span>Upgrade</span>
                                    </div>
                                </div>
                                <div className="button-wrapper">
                                    <Button title="Upgrade" type="green" />
                                    <p>Cancel Membership</p>
                                </div>
                                <p className="mobile-support-link">
                                    Have a problem? <br /> Contact <span>Customer Support Team</span>
                                </p>
                            </div>
                        </div>

                        <p className="support-link">
                            Have a problem? Contact <span>Customer Support Team</span>
                        </p>
                    </div>
                    <div className="right-section">
                        <div className="card">
                            <div className="card-title">
                                <div className="title-wrapper">
                                    <h4>
                                        <span className="hospital-icon">{cardIcon}</span>
                                        PAYMENT METHODS
                                    </h4>
                                    <p className="title-desc">Admin can change or add payment methods. </p>
                                </div>
                                <div className="button-wrapper">
                                    <Button
                                        title="&nbsp;&nbsp;Add a Payment Method"
                                        type="primary"
                                        icon={plusCircleIcon}
                                    />
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="method-card-list">
                                    {[0, 1, 2, 3].map((item) => (
                                        <div className="method-card" key={item}>
                                            <div className="first-section">
                                                <h4>Primary Payment Method</h4>
                                                <span>Remove Payment Method</span>
                                            </div>
                                            <div className="second-section">
                                                <div>
                                                    <p className="text-title">Payment Method:</p>
                                                    <p className="text-value">VISA/Master Card</p>
                                                </div>
                                                <img src={cardImage} alt="" />
                                            </div>
                                            <div className="third-section">
                                                <div className="row-col">
                                                    <p className="text-title">Card Number</p>
                                                    <p className="text-value">1234 **** **** **45</p>
                                                </div>
                                                <div className="row-col">
                                                    <p className="text-title">Expiry Date:</p>
                                                    <p className="text-value">January 01, 2021</p>
                                                </div>
                                            </div>

                                            <span className="mobile-remove">Remove Payment Method</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="button-wrapper-mobile">
                                    <Button
                                        title="&nbsp;&nbsp;Add a Payment Method"
                                        type="primary"
                                        icon={plusCircleIcon}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CurrentMembership;
