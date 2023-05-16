import { facebookIcon, instagramIcon, linkedinIcon, twitterIcon } from '../../../assets/icons/social';
import { phoneIcon } from '../../../assets/icons/common';
import './Header.scss';

const Header = () => {
    return (
        <div className="header">
            <div className="header-left">
                <div className="header-left-title1">Connect with us</div>
                <div className="social-btn-wrapper">
                    <a href="https://www.facebook.com/Rarareapp" target="_blank">
                        {facebookIcon}
                    </a>
                    <a href="https://www.instagram.com/rarareapp" target="_blank">
                        {instagramIcon}
                    </a>
                    <a href="https://www.twitter.com/rarareapp" target="_blank">
                        {twitterIcon}
                    </a>
                    <a href="https://www.linked-in.com/rarareapp" target="_blank">
                        {linkedinIcon}
                    </a>
                </div>
            </div>

            <div className="header-right">
                <div className="header-right-title1">Home service for visually imparted:</div>
                <div className="header-right-phone-wrapper">
                    {phoneIcon}
                    <span className="header-right-phone-number">+1 912 5626 1568</span>
                </div>
                <div className="header-language-switch">
                    <span className="">FR</span>
                    &nbsp;|&nbsp;
                    <span className="header-language-active">ENG</span>
                </div>
            </div>
        </div>
    );
};

export default Header;
