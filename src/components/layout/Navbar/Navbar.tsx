import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../common/Button/Button';
import NavbarItem from '../../navbar/NavbarItem/NavbarItem';
import NavbarMobileItem from '../../navbar/NavbarMobileItem/NavbarMobileItem';
import NavbarAuth from '../../navbar/NavbarAuth/NavbarAuth';
import { toggleMenuIcon } from '../../../assets/icons/common';
import { NavbarPropsType } from '../../../types/basicComponents';
import logoImage from '../../../assets/images/logo.png';
import './Navbar.scss';

const links = [
    { title: 'Take Test', link: '/take-test' },
    {
        title: 'Our Services',
        subLinks: [
            { title: 'AI Powered Eye Testing', link: '/' },
            { title: 'Ophthalmologist Prescription', link: '/' },
            { title: 'MDM Managment', link: '/' },
            { title: 'Remote Device Applications', link: '/' },
            { title: 'Home Service for Visually Imapried', link: '/' },
            { title: 'Low Vision Devices', link: '/' },
        ],
    },
    {
        title: 'Find an Opthalmologist',
        subLinks: [
            { title: 'AI Powered Eye Testing', link: '/' },
            { title: 'Ophthalmologist Prescription', link: '/' },
            { title: 'MDM Managment', link: '/' },
            { title: 'Remote Device Applications', link: '/' },
            { title: 'Home Service for Visually Imapried', link: '/' },
            { title: 'Low Vision Devices', link: '/' },
        ],
    },
    {
        title: 'Become a member',
        subLinks: [
            { title: 'AI Powered Eye Testing', link: '/' },
            { title: 'Ophthalmologist Prescription', link: '/' },
            { title: 'MDM Managment', link: '/' },
            { title: 'Remote Device Applications', link: '/' },
            { title: 'Home Service for Visually Imapried', link: '/' },
            { title: 'Low Vision Devices', link: '/' },
        ],
    },
];

const Navbar = ({ mode }: NavbarPropsType) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [mobileSubMenuOpen, setMobileSubMenuOpen] = useState('');

    const handleMobileSubMenu = (title: string) => {
        if (mobileSubMenuOpen === title) {
            setMobileSubMenuOpen('');
        } else {
            setMobileSubMenuOpen(title);
        }
    };

    const handleCloseMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    return (
        <>
            <nav>
                {mode === 'user' && (
                    <div
                        className="toggle-menu"
                        onClick={() => {
                            setMobileMenuOpen(!mobileMenuOpen);
                        }}
                    >
                        {toggleMenuIcon}
                    </div>
                )}
                <div className="navbar-main">
                    <div className="menubar">
                        <Link className="logo" to="/">
                            <img src={logoImage} alt="encocare" />
                        </Link>
                    </div>
                    <ul className="navbar-menu">
                        {links.map((item) => (
                            <NavbarItem key={item.title} title={item.title} link={item.link} subLinks={item.subLinks} />
                        ))}
                    </ul>
                </div>

                <NavbarAuth />
            </nav>
            {mobileMenuOpen && (
                <div className="navbar-mobile">
                    <div className="navbar-menu-wrapper">
                        <ul className="navbar-mobile-menu">
                            {links.map((item) => (
                                <NavbarMobileItem
                                    key={item.title}
                                    title={item.title}
                                    link={item.link}
                                    subLinks={item.subLinks}
                                    isSubMenuOpen={mobileSubMenuOpen}
                                    setSubMenuOpen={handleMobileSubMenu}
                                    closeMobileMenu={handleCloseMobileMenu}
                                />
                            ))}
                        </ul>
                    </div>
                    <div className="navbar-mobile-buttons">
                        <div className="auth-buttons-wrapper">
                            <Link to="/login" onClick={handleCloseMobileMenu}>
                                <Button title="Login" type="primary" />
                            </Link>
                            <Link to="/signup" onClick={handleCloseMobileMenu}>
                                <Button title="Sign up" type="light" />
                            </Link>
                        </div>
                        <div className="lang-switch">
                            <span className="">FR</span>
                            &nbsp;|&nbsp;
                            <span className="header-language-active">ENG</span>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
