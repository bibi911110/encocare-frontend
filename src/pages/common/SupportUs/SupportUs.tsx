import { Link } from 'react-router-dom';
import Button from '../../../components/common/Button/Button';
import SocialButton from '../../../components/common/SocialButton/SocialButton';
import logoEyeImage from '../../../assets/images/logo-eye.png';
import './SupportUs.scss';

const SupportUs = () => {
    return (
        <div className="support-us">
            <div className="left-section">
                <div className="form-wrapper">
                    <h1>Support Us</h1>
                    <p>
                        Let's join hands to eliminate blindness from Africa. We are early looking to fund and improve
                        the technology day by day.
                        <br />
                        <br />
                        We aim to cure and relieve 200,000 patients including pregnant women,kids and babies. Help us in
                        achieving our mission.
                    </p>
                    <Button
                        className="donate-button"
                        title="Donate for a better vision"
                        buttonType="button"
                        type="primary"
                        arrow
                    />

                    <h2>Join our support group</h2>
                    <p>
                        With a community of over 20,000 members we're continuously expanding to reach out for awareness
                        programs and free diagnosis camps across Africa!
                    </p>
                    <div className="group-wrapper">
                        <div className="white-board">
                            <img src={logoEyeImage} alt="" />
                            <div>
                                <h3>Encocare Support Group</h3>
                                <Link to="/">facebook.com/Encocare Support Group</Link>
                            </div>
                        </div>
                        <SocialButton type="facebook" title="Join Facebook Support Group" />
                    </div>
                </div>
            </div>
            <div className="right-section"></div>
        </div>
    );
};

export default SupportUs;
