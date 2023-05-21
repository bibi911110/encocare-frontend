import { leftArrowIcon2 } from '../../../assets/icons/common';
import successImage from '../../../assets/images/success1.png';
import './BankSuccess.scss';

const BankSuccess = () => {
    return (
        <div className="bank-success">
            <h2>
                <span>{leftArrowIcon2}</span> Authorize your payment
            </h2>
            <div className="success-content">
                <img src={successImage} alt="" />
                <h3>Payment Successful!</h3>
                <p>
                    An amount of £100.25 has been successfully debited from your account. The receipt has been sent to
                    your registered email
                </p>
            </div>
        </div>
    );
};

export default BankSuccess;
