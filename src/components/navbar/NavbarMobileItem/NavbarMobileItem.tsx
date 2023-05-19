import { Link } from 'react-router-dom';
import { NavbarMobileItemPropsType } from '../../../types/basicComponents';
import { downArrowIcon, rightArrowIcon } from '../../../assets/icons/common';
import './NavbarMobileItem.scss';

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
            <li className="navbar-mobile-item">
                <div className="navbar-mobile-item-main">
                    <Link to={link} onClick={closeMobileMenu}>
                        {title}
                    </Link>
                </div>
            </li>
        );
    } else {
        return (
            <li className="navbar-mobile-item">
                <div className="navbar-mobile-item-main" onClick={() => setSubMenuOpen(title)}>
                    <span>{title}</span>
                    {isSubMenuOpen === title ? downArrowIcon : rightArrowIcon}
                </div>
                {isSubMenuOpen === title && (
                    <ul className="navbar-mobile-sub-menu">
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

export default NavbarMobileItem;
