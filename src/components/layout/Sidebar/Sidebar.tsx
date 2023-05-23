import { Fragment, useState } from 'react';
import {
    sidebarToggleIcon,
    blockIcon,
    dashboardIcon,
    doctorIcon,
    governmentIcon,
    hospitalIcon,
    laboratoryIcon,
    messageIcon,
    plusCircleIcon,
    userCircleIcon,
    securityIcon,
    entityIcon,
} from '../../../assets/icons/sidebar';
import { rightArrowIcon, rightArrowIcon3 } from '../../../assets/icons/common';
import { SidebarPropsType } from '../../../types/basicComponents';
import './Sidebar.scss';
import { NavLink } from 'react-router-dom';

const adminLinks = [
    {
        title: 'YOUR DASHBOARD',
        children: [
            {
                title: 'My Dashboard',
                icon: dashboardIcon,
                link: '/admin/dashboard',
            },
        ],
    },
    {
        title: 'YOUR ENTITIES',
        children: [
            {
                title: 'All Entities',
                icon: entityIcon,
                link: '/admin/entity',
            },
            {
                title: 'Governments',
                icon: governmentIcon,
                link: '/admin/entity/government',
            },
            {
                title: 'Hospitals',
                icon: hospitalIcon,
                link: '/admin/entity/hospitals',
            },
            {
                title: 'Laboratories',
                icon: laboratoryIcon,
                link: '/admin/entity/laboratories',
            },
            {
                title: 'Doctors',
                icon: doctorIcon,
                link: '/admin/entity/doctors',
            },
        ],
    },
    {
        title: 'ENTITY MANAGEMENT',
        children: [
            {
                title: 'Add an Entity',
                icon: plusCircleIcon,
                link: '/admin/add_entity',
            },
            {
                title: 'Remove/Block Entity',
                icon: blockIcon,
                link: '/admin/remove_block_entity',
            },
        ],
    },
    {
        title: 'SETTINGS',
        children: [
            {
                title: 'Account Settings',
                icon: userCircleIcon,
                link: '/admin/setting',
            },
            {
                title: 'Security Settings',
                icon: securityIcon,
                link: '/admin/security',
            },
        ],
    },
    {
        title: 'MY PROFILE',
        children: [
            {
                title: 'Message',
                icon: messageIcon,
                link: '/admin/message',
            },
        ],
    },
];

const Sidebar = ({ type }: SidebarPropsType) => {
    const [isMobileOpen, setMobileOpen] = useState(false);

    return (
        <>
            <aside className={isMobileOpen ? 'mobile-open' : ''}>
                <div className="main-title">
                    <p>ENTITY NAME</p>
                    <span>{rightArrowIcon3}</span>
                </div>
                <ul className="main-menu">
                    {adminLinks.map((item) => (
                        <Fragment key={item.title}>
                            {item.title === 'SETTINGS' && <div className="divider" />}
                            <li className="parent">{item.title}</li>
                            {item.children.map((child) => (
                                <li className="child" key={child.title}>
                                    <NavLink to={child.link}>
                                        <div>
                                            <span className="child-icon">{child.icon}</span>
                                            <span className="child-title">{child.title}</span>
                                        </div>
                                        <span>{rightArrowIcon}</span>
                                    </NavLink>
                                </li>
                            ))}
                        </Fragment>
                    ))}
                </ul>
            </aside>
            <div className="sidebar-toggle-menu" onClick={() => setMobileOpen(!isMobileOpen)}>
                {sidebarToggleIcon}
            </div>
        </>
    );
};

export default Sidebar;
