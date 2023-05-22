import { Link } from 'react-router-dom';
import NormalInput from '../../common/NormalInput/NormalInput';
import Button from '../../common/Button/Button';
import { copyrightIcon, phoneIcon } from '../../../assets/icons/common';
import { facebookIcon, instagramIcon, linkedinIcon, twitterIcon } from '../../../assets/icons/social';
import logoImage from '../../../assets/images/logo.png';
import './Footer.scss';

const links = [
    {
        title: 'Encocare',
        links: ['Services', 'Opthalmologists', 'Hospitals', 'Doctors', 'Diagnosis Centers'],
    },
    {
        title: 'Legal',
        links: ['Terms of Use', 'Privacy Policy', 'Cookies Policy', 'Cookie Settings'],
    },
    {
        title: 'Quick Links',
        links: ['Become a member', 'About Us', 'Contact Us'],
    },
    {
        title: 'Encocare',
        links: ['Services', 'Opthalmologists', 'Hospitals', 'Doctors', 'Diagnosis Centers'],
    },
    {
        title: 'Legal',
        links: ['Terms of Use', 'Privacy Policy', 'Cookies Policy', 'Cookie Settings'],
    },
    {
        title: 'Quick Links',
        links: ['Become a member', 'About Us', 'Contact Us'],
    },
];

const Footer = () => {
    return (
        <footer>
            <div className="link-section">
                <ul>
                    {links.map((item, index1) => (
                        <li className="link-group" key={index1}>
                            <p className="link-group-title">{item.title}</p>
                            <ul>
                                {item.links.map((link, index) => (
                                    <li className="link-item" key={index}>
                                        <Link to="/">{link}</Link>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="subscribe-section">
                <div className="logo-section">
                    <img src={logoImage} alt="encocare" />
                    <p className="description">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                        ut labore et dolore magna
                    </p>
                    <div className="phone-number">
                        {phoneIcon}
                        <span>+1 912 5626 1568</span>
                    </div>
                    <div className="social-button-wrapper">
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
                <div className="subscribe-detail">
                    <h1>Subscribe to our news letter!</h1>
                    <p>
                        Subscribe to our newsletter for latest updates, news and developments in the ophthalmalgia
                        sector!
                    </p>
                    <div className="email-input-section">
                        <NormalInput placeHolder="Email Address" />
                        <Button title="Subscribe" type="primary" arrow />
                    </div>
                </div>
            </div>
            <div className="copyright-section">
                Copyrights&nbsp;{copyrightIcon}&nbsp;&nbsp;2022.&nbsp;Encocare&nbsp;Inc.
            </div>
        </footer>
    );
};

export default Footer;
