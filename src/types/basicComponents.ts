import React from 'react';

export type ButtonPropsType = {
    buttonType: 'button' | 'submit';
    title: string;
    type: 'primary' | 'outline' | 'light' | 'gray';
    icon?: React.ReactNode;
    className?: string;
    arrow?: boolean;
    onClick?: () => void;
};

export type NormalInputPropsType = {
    placeHolder: string;
    className?: string;
};

export type TextAreaPropsType = {
    placeHolder: string;
    className?: string;
    rows: number;
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
    closeMobileMenu: () => void;
};

export type CheckBoxPropsType = {
    checked?: boolean;
    readonly?: boolean;
    className?: string;
};

export type SocialButtonPropsType = {
    title: string;
    type: 'facebook' | 'google' | 'twitter';
};

export type ResponsiveModalPropsType = {
    open: boolean;
    handleOk: () => void;
    handleCancel: () => void;
};

export type StepPropsType = {
    handleNextStep: () => void;
    handlePrevStep: () => void;
};

export type SelectPropsType = {
    options: Array<React.ReactElement | string>;
    placeHolder?: string;
    defaultValue?: number;
};
