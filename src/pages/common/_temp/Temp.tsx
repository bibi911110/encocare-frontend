import { Link } from 'react-router-dom';
import Button from '../../../components/common/Button/Button';
import FormDivider from '../../../components/common/FormDivider/FormDivider';
import NormalInput from '../../../components/common/NormalInput/NormalInput';
import PasswordInput from '../../../components/common/PasswordInput/PasswordInput';
import SocialButton from '../../../components/common/SocialButton/SocialButton';
import './Signup.scss';

const Signup = () => {
    return (
        <div className="signup">
            <div className="left-section">
                <div className="form-wrapper">
                    <h1>Sign Up</h1>
                    <p>Eyesight is a beautiful gift of life! Live it to the best!</p>
                </div>
            </div>
            <div className="right-section"></div>
        </div>
    );
};

export default Signup;
