import { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavbarItemPropsType } from '../../../types/basicComponents';
import { downArrowIcon } from '../../../assets/icons/common';
import './NavbarItem.scss';

const NavbarItem = ({ title, link, subLinks }: NavbarItemPropsType) => {
    const [isSubMenuOpen, setSubMenuOpen] = useState(false);

    if (link) {
        return (
            <li className="navbar-menu-item">
                <Link to={link}>{title}</Link>
            </li>
        );
    } else {
        return (
            <li
                className="navbar-menu-item"
                onMouseEnter={() => setSubMenuOpen(true)}
                onMouseLeave={() => setSubMenuOpen(false)}
            >
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

export default NavbarItem;
