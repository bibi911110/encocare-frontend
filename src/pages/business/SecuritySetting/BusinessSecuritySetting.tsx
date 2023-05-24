import Button from '../../../components/common/Button/Button';
import PasswordInput from '../../../components/common/PasswordInput/PasswordInput';
import { leftArrowIcon2, lockIcon } from '../../../assets/icons/common';
import './BusinessSecuritySetting.scss';

const BusinessSecuritySetting = () => {
    return (
        <div className="business-security-setting">
            <div className="main-header">
                <h1>
                    <span>{leftArrowIcon2}</span>Security Settings
                </h1>
                <p>Admin can change passwords here and other security setting if any!</p>
            </div>
            <div className="main-content">
                <div className="card left-card">
                    <div className="card-title">
                        <span className="hospital-icon">{lockIcon}</span>
                        CHANGE PASSWORD
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

export default BusinessSecuritySetting;
