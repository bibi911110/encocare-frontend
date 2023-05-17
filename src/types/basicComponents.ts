import React from 'react';

export type ButtonPropsType = {
    title: string;
    type: 'primary' | 'outline' | 'light' | 'arrow';
    icon?: React.ReactNode;
    className?: string;
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
