import { useState } from 'react';
import QRCode from 'react-qr-code';
import NormalInput from '../../common/NormalInput/NormalInput';
import PasswordInput from '../../common/PasswordInput/PasswordInput';
import { leftArrowIcon2, lockIcon } from '../../../assets/icons/common';
import bankImage from '../../../assets/images/bank/6.png';
import './BankAuthenticate.scss';

const BankAuthenticate = () => {
    const [step, setStep] = useState(0);

    const tabHeader = ['Internet Banking ID', 'QR Code'].map((item, index) => (
        <span className={`${step === index ? 'active' : ''}`} onClick={() => setStep(index)} key={item}>
            {item}
        </span>
    ));

    return (
        <div className="bank-authenticate">
            <h2>
                <span>{leftArrowIcon2}</span> Authenticate your Login Credentials
            </h2>
            <div className="bank-authenticate-content">
                <img src={bankImage} alt="" />
                <h3>Starling Bank</h3>
                <h4>
                    <span>{lockIcon}</span>Starling Bank Secure Gateway
                </h4>
                <p>
                    Please select your preferred <br className="mobile-only" />
                    login method:
                </p>

                <div className="tab-header">{tabHeader}</div>
                <div className="tab-content">
                    {step === 0 && (
                        <div className="tab-item">
                            <p>Sign In using Internet Banking ID</p>
                            <NormalInput placeHolder="Email Address" />
                            <PasswordInput placeHolder="Password" />
                        </div>
                    )}
                    {step === 1 && (
                        <div className="tab-item">
                            <p>Sign In using QR Code</p>
                            <QRCode size={256} style={{ height: '98px', width: '98px' }} value={'This is QR test.'} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BankAuthenticate;
