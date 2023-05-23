import React from 'react';

export type NavbarPropsType = {
    mode: 'user' | 'admin';
};

export type SidebarPropsType = {
    type: 'admin' | 'business' | 'individual';
};

export type ButtonPropsType = {
    title: string;
    type: 'primary' | 'outline' | 'light' | 'gray' | 'link' | 'green' | 'danger';
    icon?: React.ReactNode;
    className?: string;
    arrow?: boolean;
    submit?: boolean;
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

export type MultiSelectPropsType = {
    options: Array<React.ReactElement | string>;
    placeHolder?: string;
    defaultValue?: Array<number>;
};

export type PaymentSelectPropsType = {
    onChange?: (type: string) => void;
};

export type StepperPropsType = {
    current: number;
};

export type TablePropsType = {
    columns: Array<{ key: string; title: string; width?: string; center?: boolean }>;
    rows: Array<any>;
    filter: string;
    checked: boolean;
    source: Array<any>;
    mobileComponent: React.FC<any>;
};
