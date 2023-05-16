import { Link } from 'react-router-dom';
import { downArrowIcon } from '../../../assets/icons/common';
import logoImage from '../../../assets/images/logo.png';
import './Navbar.scss';
import Button from '../../common/Button/Button';

const links = [
    { name: 'Task Test', url: '/take-test' },
    {
        name: 'Our Services',
        children: [
            { name: 'AI Powered Eye Testing', url: '/' },
            { name: 'Ophtalmologist Prescription', url: '/' },
            { name: 'MDM Managment', url: '/' },
            { name: 'Remote Device Applications', url: '/' },
            { name: 'Home Service for Visually Imapried', url: '/' },
            { name: 'Low Vision Devices', url: '/' },
        ],
    },
    {
        name: 'Find an Opthalmologist',
        children: [
            { name: 'AI Powered Eye Testing', url: '/' },
            { name: 'Ophtalmologist Prescription', url: '/' },
            { name: 'MDM Managment', url: '/' },
            { name: 'Remote Device Applications', url: '/' },
            { name: 'Home Service for Visually Imapried', url: '/' },
            { name: 'Low Vision Devices', url: '/' },
        ],
    },
    {
        name: 'Become a member',
        children: [
            { name: 'AI Powered Eye Testing', url: '/' },
            { name: 'Ophtalmologist Prescription', url: '/' },
            { name: 'MDM Managment', url: '/' },
            { name: 'Remote Device Applications', url: '/' },
            { name: 'Home Service for Visually Imapried', url: '/' },
            { name: 'Low Vision Devices', url: '/' },
        ],
    },
];

const Navbar = () => {
    const renderItems = () =>
        links.map((item, index) => (
            <li key={index}>
                {item.url ? (
                    <Link to={item.url}>{item.name}</Link>
                ) : (
                    <span>
                        {item.name}
                        {downArrowIcon}
                    </span>
                )}
                {item.children && renderChildren(item.children)}
            </li>
        ));

    const renderChildren = (children: Array<{ name: string; url: string }>) => (
        <ul className="sub-menu">
            {children.map((child, index) => (
                <li key={index}>
                    <Link to={child.url}>{child.name}</Link>
                </li>
            ))}
        </ul>
    );

    return (
        <nav>
            <div className="navbar-main">
                <div className="menubar">
                    <div className="logo">
                        <img src={logoImage} alt="encocare" />
                    </div>
                    <div className="toggle-menu"></div>
                </div>
                <ul className="menu">{renderItems()}</ul>
            </div>

            <div className="navbar-auth">
                <Button title="Sign up" type="light" width={182} />
                <Button title="Login" type="primary"  width={182}/>
            </div>
        </nav>
    );
};

export default Navbar;
