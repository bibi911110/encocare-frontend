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
                    <div className="social-buttons">
                        <SocialButton type="facebook" title="Sign up using Facebook" />
                        <SocialButton type="google" title="Sign up using Google" />
                        <SocialButton type="twitter" title="Sign up using Twitter" />
                    </div>
                    <FormDivider />
                    <form>
                        <div className="input-wrapper">
                            <NormalInput placeHolder="Email Address" />
                            <PasswordInput placeHolder="Password" />
                        </div>
                        <Button buttonType="button" title="Sign Up" type="primary" arrow />
                    </form>
                    <div className="link-wrapper">
                        <p>Already a member?</p>
                        <Link to="/login">Login</Link>
                    </div>
                    <p className="policy">
                        By signing up you agree to Encocare <span>terms & conditions</span> and privacy policy.
                    </p>
                </div>
            </div>
            <div className="right-section"></div>
        </div>
    );
};

export default Signup;
