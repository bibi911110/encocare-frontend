import { Link } from 'react-router-dom';
import Button from '../../../components/common/Button/Button';
import PasswordInput from '../../../components/common/PasswordInput/PasswordInput';
import setPasswordLogoImage from '../../../assets/images/set-password.png';
import './SetPassword.scss';

const SetPassword = () => {
    return (
        <div className="set-password">
            <div className="left-section">
                <div className="form-wrapper">
                    <img src={setPasswordLogoImage} alt="" />
                    <h1>Set a new password!</h1>
                    <p>Use a password that's easy to remember yet difficult to guess!</p>
                    <form>
                        <div className="input-wrapper">
                            <PasswordInput placeHolder="New Password" />
                            <PasswordInput placeHolder="Confirm Password" />
                        </div>
                        <Link to="/login">
                            <Button title="Continue & Login" type="primary" arrow />
                        </Link>
                    </form>
                </div>
            </div>
            <div className="right-section"></div>
        </div>
    );
};

export default SetPassword;
