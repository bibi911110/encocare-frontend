import { useState } from 'react';
import OtpInput from 'react-otp-input';
import { leftArrowIcon2, lockIcon } from '../../../assets/icons/common';
import bankImage from '../../../assets/images/bank/6.png';
import './BankAuthorize.scss';

const BankAuthorize = () => {
    const [otp, setOtp] = useState('');

    return (
        <div className="bank-authorize">
            <h2>
                <span>{leftArrowIcon2}</span> Authorize your payment
            </h2>
            <div className="bank-authorize-content">
                <img src={bankImage} alt="" />
                <h3>Starling Bank</h3>
                <h4>
                    <span>{lockIcon}</span>Starling Bank Secure Gateway
                </h4>
                <h5>OTP Verification</h5>
                <p className="opt-code-phone">
                    Enter the OPT Verification code sent to <br />
                    +44 733 666 2222
                </p>
                <div className="input-wrapper">
                    <OtpInput
                        value={otp}
                        onChange={setOtp}
                        numInputs={4}
                        renderInput={(props) => <input {...props} placeholder="-" className="opt-code-input" />}
                    />
                </div>
                <p className="resend-code">Resend Code</p>
            </div>
        </div>
    );
};

export default BankAuthorize;
