import { Link } from 'react-router-dom';
import Button from '../../../components/common/Button/Button';
import SocialButton from '../../../components/common/SocialButton/SocialButton';
import FormDivider from '../../../components/common/FormDivider/FormDivider';
import NormalInput from '../../../components/common/NormalInput/NormalInput';
import PasswordInput from '../../../components/common/PasswordInput/PasswordInput';
import CheckBox from '../../../components/common/CheckBox/CheckBox';
import './Login.scss';

const Login = () => {
    return (
        <div className="login">
            <div className="left-section">
                <div className="form-wrapper">
                    <h1>Login</h1>
                    <p>Login to the Africa's #1 Eye Testing Application</p>
                    <div className="social-buttons">
                        <SocialButton type="facebook" title="Login using Facebook" />
                        <SocialButton type="google" title="Login using Google" />
                        <SocialButton type="twitter" title="Login using Twitter" />
                    </div>
                    <FormDivider />
                    <form>
                        <div className="input-wrapper">
                            <NormalInput placeHolder="Email Address" />
                            <PasswordInput placeHolder="Password" />
                            <div className="sub-links-wrapper">
                                <div className="remember-check">
                                    <CheckBox />
                                    <span>Remember me</span>
                                </div>
                                <Link to="/forget-password">Forgot Password?</Link>
                            </div>
                        </div>
                        <Button title="Login" type="primary" arrow />
                    </form>
                    <div className="link-wrapper">
                        <p>Not a member?</p>
                        <Link to="/signup">Sign Up</Link>
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

export default Login;
