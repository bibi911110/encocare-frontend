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
