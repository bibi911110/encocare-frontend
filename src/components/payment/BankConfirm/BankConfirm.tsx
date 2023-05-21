import { leftArrowIcon2 } from '../../../assets/icons/common';
import alertImage from '../../../assets/images/alert.png';
import './BankConfirm.scss';

const BankConfirm = () => {
    return (
        <div className="bank-confirm">
            <h2>
                <span>{leftArrowIcon2}</span> Authorize your payment
            </h2>
            <div className="confirm-content">
                <img src={alertImage} alt="" />
                <h3>Confirm Payment?</h3>
                <p>Are you sure you want to make this payment?</p>
            </div>
        </div>
    );
};

export default BankConfirm;
