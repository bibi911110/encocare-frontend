import React from 'react';

export type ButtonPropsType = {
    buttonType: 'button' | 'submit';
    title: string;
    type: 'primary' | 'outline' | 'light' | 'gray';
    icon?: React.ReactNode;
    className?: string;
    arrow?: boolean;
};

export type NormalInputPropsType = {
    placeHolder: string;
    className?: string;
};

export type NavbarItemPropsType = {
    title: string;
    link?: string;
    subLinks?: Array<{ title: string; link: string }>;
};

export type NavbarMobileItemPropsType = {
    title: string;
    link?: string;
    subLinks?: Array<{ title: string; link: string }>;
    isSubMenuOpen: string;
    setSubMenuOpen: (title: string) => void;
};

export type CheckBoxPropsType = {
    className?: string;
};

export type SocialButtonPropsType = {
    authType: 'signup' | 'login';
    type: 'facebook' | 'google' | 'twitter';
};
