import { Link } from 'react-router-dom';
import Button from '../../../components/common/Button/Button';
import NormalInput from '../../../components/common/NormalInput/NormalInput';
import forgetPasswordLogoImage from '../../../assets/images/forget-password.png';
import './ForgetPassword.scss';

const ForgetPassword = () => {
    return (
        <>
            <div className="forget-password">
                <div className="left-section">
                    <div className="form-wrapper">
                        <img src={forgetPasswordLogoImage} alt="" />
                        <h1>To err is human!</h1>
                        <p>Let's recover your password! Please enter the email address you used to sign up!</p>
                        <form>
                            <div className="input-wrapper">
                                <NormalInput placeHolder="Email Address" />
                            </div>
                            <Link to="/set-password">
                                <Button  title="Get magic link" type="primary" arrow />
                            </Link>
                        </form>
                    </div>
                </div>
                <div className="right-section"></div>
            </div>
        </>
    );
};

export default ForgetPassword;
