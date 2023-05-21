import { leftArrowIcon2 } from '../../../assets/icons/common';
import alertImage from '../../../assets/images/alert.png';
import './BankAlert.scss';

const BankAlert = () => {
    return (
        <div className="bank-alert">
            <h2>
                <span>{leftArrowIcon2}</span>Select your bank
            </h2>
            <div className="alert-content">
                <img src={alertImage} alt="" />
                <h3>Paying from your Starling Bank account</h3>
                <p>
                    By clicking Yes, I Agree!, you agree to be redirected to Starling Bank, where you can login to your
                    account and approve the payment to iPurvey Inc, for your £100.25 transaction
                </p>
            </div>
            <p>Change bank</p>
        </div>
    );
};

export default BankAlert;
