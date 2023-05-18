import React from 'react';

export type ButtonPropsType = {
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
    isChecked: boolean;
    onChange: () => void;
};
