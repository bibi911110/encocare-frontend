import { Link } from 'react-router-dom';
import Button from '../../../components/common/Button/Button';
import CheckBox from '../../../components/common/CheckBox/CheckBox';
import NormalInput from '../../../components/common/NormalInput/NormalInput';
import PasswordInput from '../../../components/common/PasswordInput/PasswordInput';
import { rightArrowIcon2 } from '../../../assets/icons/common';
import './IndividualLogin.scss';

const IndividualLogin = () => {
    return (
        <div className="individual-login">
            <div className="main-section">
                <div className="left-section">
                    <h1>Individual Login</h1>
                    <p>Login to the Africa's #1 Eye Testing Application</p>

                    <form>
                        <NormalInput placeHolder="Email Address" />
                        <PasswordInput placeHolder="Password" />
                        <div className="sub-links-wrapper">
                            <div className="remember-check">
                                <CheckBox />
                                <span>Remember me</span>
                            </div>
                            <Link to="/">Forgot Password?</Link>
                        </div>
                        <Button title="Login" type="primary" arrow />
                    </form>
                </div>
                <div className="right-section">
                    <div className="back-image-overlay" />
                    <div className="back-image" />
                    <div className="overlay">
                        <div className="title-wrapper">
                            <h1>
                                Join the largest <br />
                                <span>Ophthalmologists Association</span>
                            </h1>
                            <p>
                                With over 2,000 Ophthalmologists across Africa,
                                <br className="desktop-only" />
                                Encocare phthalmologists Association is one of
                                <br className="desktop-only" />
                                the largest globally!
                            </p>
                            <div className="link-wrapper">
                                <Button title="Get Registered!" type="primary" />
                                <Link to="/">
                                    Learn more
                                    {rightArrowIcon2}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IndividualLogin;
