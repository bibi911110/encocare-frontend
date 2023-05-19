import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../common/Button/Button';
import logoImage from '../../../assets/images/logo.png';
import { rightArrowIcon, toggleMenuIcon, downArrowIcon } from '../../../assets/icons/common';
import { NavbarItemPropsType, NavbarMobileItemPropsType } from '../../../types/basicComponents';
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

const NavbarItem = ({ title, link, subLinks }: NavbarItemPropsType) => {
    const [isSubMenuOpen, setSubMenuOpen] = useState(false);

    if (link) {
        return (
            <li>
                <Link to={link}>{title}</Link>
            </li>
        );
    } else {
        return (
            <li onMouseEnter={() => setSubMenuOpen(true)} onMouseLeave={() => setSubMenuOpen(false)}>
                {title}
                {downArrowIcon}
                {isSubMenuOpen && (
                    <ul className="sub-menu">
                        {subLinks?.map((item) => (
                            <li key={item.title}>
                                <Link to={item.link}>{item.title}</Link>
                            </li>
                        ))}
                    </ul>
                )}
            </li>
        );
    }
};

const NavbarMobileItem = ({
    title,
    link,
    subLinks,
    isSubMenuOpen,
    setSubMenuOpen,
    closeMobileMenu,
}: NavbarMobileItemPropsType) => {
    if (link) {
        return (
            <li>
                <div className="mobile-title">
                    <Link to={link} onClick={closeMobileMenu}>
                        {title}
                    </Link>
                </div>
            </li>
        );
    } else {
        return (
            <li>
                <div className="mobile-title" onClick={() => setSubMenuOpen(title)}>
                    <span>{title}</span>
                    {isSubMenuOpen === title ? downArrowIcon : rightArrowIcon}
                </div>
                {isSubMenuOpen === title && (
                    <ul className="mobile-sub-menu">
                        {subLinks?.map((item) => (
                            <li key={item.title}>
                                <Link to={item.link}>{item.title}</Link>
                            </li>
                        ))}
                    </ul>
                )}
            </li>
        );
    }
};

const Navbar = () => {
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
                <div
                    className="toggle-menu"
                    onClick={() => {
                        setMobileMenuOpen(!mobileMenuOpen);
                    }}
                >
                    {toggleMenuIcon}
                </div>
                <div className="navbar-main">
                    <div className="menubar">
                        <Link className="logo" to="/">
                            <img src={logoImage} alt="encocare" />
                        </Link>
                    </div>
                    <ul className="menu">
                        {links.map((item) => (
                            <NavbarItem key={item.title} title={item.title} link={item.link} subLinks={item.subLinks} />
                        ))}
                    </ul>
                </div>

                <div className="navbar-auth">
                    <Link to="/signup">
                        <Button title="Sign up" type="light" buttonType="button" />
                    </Link>
                    <Link to="/login">
                        <Button title="Login" type="primary" buttonType="button" />
                    </Link>
                </div>
            </nav>
            {mobileMenuOpen && (
                <div className="navbar-mobile">
                    <div className="navbar-menu-wrapper">
                        <ul className="mobile-menu">
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
                                <Button title="Login" type="primary" buttonType="button" />
                            </Link>
                            <Link to="/signup" onClick={handleCloseMobileMenu}>
                                <Button title="Sign up" type="light" buttonType="button" />
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
