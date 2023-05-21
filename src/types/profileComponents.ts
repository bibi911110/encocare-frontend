export type ProfilePropsType = {
    isTestHistory: boolean;
};

export type TestResultCardPropsType = {
    id: string;
    name: string;
    date: string;
    result: string;
    type: string;
    link: string;
};

export type TestHistoryChartItemPropsType = {
    title: string;
    percent: number;
    color: string;
    arrow: string;
};

export type MembershipCardPropsType = {
    title: string;
    primaryColor: string;
    secondColor: string;
    iconType: 'circle' | 'normal';
    popular: boolean;
    price: number;
};
