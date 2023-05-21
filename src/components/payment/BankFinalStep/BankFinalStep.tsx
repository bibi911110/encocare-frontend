import { leftArrowIcon2 } from '../../../assets/icons/common';
import bankImage from '../../../assets/images/bank/6.png';
import './BankFinalStep.scss';

const BankFinalStep = () => {
    return (
        <div className="bank-final-step">
            <h2>
                <span>{leftArrowIcon2}</span> Authorize your payment
            </h2>
            <div className="bank-final-step-content">
                <img src={bankImage} alt="" />
                <h3>Starling Bank</h3>

                <h4>Welcome Mr. Joe Bloggs</h4>
                <p>Select an account to pay!</p>
                <h5>Account Title: Mr. Joe Bloggs</h5>

                <div className="select-account">
                    <div className="select-account-item active">
                        <p className="title">Current Account</p>
                        <p className="number-title">Acc. No.</p>
                        <p className="number-value">33322222</p>
                        <p className="number-title">Sort No.</p>
                        <p className="number-value">40-65-22</p>
                    </div>
                    <div className="select-account-item">
                        <p className="title">Saving Account</p>
                        <p className="number-title">Acc. No.</p>
                        <p className="number-value">33322222</p>
                        <p className="number-title">Sort No.</p>
                        <p className="number-value">40-65-22</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BankFinalStep;
