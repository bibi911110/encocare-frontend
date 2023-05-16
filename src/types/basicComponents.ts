import React from 'react';

export type ButtonPropsType = {
    title: string;
    width: number;
    type: 'primary' | 'outline' | 'light' | 'arrow';
    icon?: React.ReactNode;
};
