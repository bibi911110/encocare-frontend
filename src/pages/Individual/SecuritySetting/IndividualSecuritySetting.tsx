import { leftArrowIcon2, lockIcon } from '../../../assets/icons/common';
import Button from '../../../components/common/Button/Button';
import PasswordInput from '../../../components/common/PasswordInput/PasswordInput';
import './IndividualSecuritySetting.scss';

const IndividualSecuritySetting = () => {
    return (
        <div className="individual-security-setting">
            <div className="main-header">
                <div className="title-wrapper">
                    <h1>
                        <span>{leftArrowIcon2}</span>Share referral link
                    </h1>
                </div>
            </div>
            <div className="main-content">
                <div className="card left-card">
                    <div className="card-title">
                        <span className="hospital-icon">{lockIcon}</span>
                        Security Settings
                    </div>
                    <div className="card-body">
                        <div className="input-wrapper">
                            <PasswordInput placeHolder="Current Password" />
                            <PasswordInput placeHolder="Enter New Password" />
                            <PasswordInput placeHolder="Confirm New Password" />
                        </div>
                        <div className="button-wrapper">
                            <Button title="Save" type="primary" />
                            <p>
                                <span>{leftArrowIcon2} Back</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IndividualSecuritySetting;
