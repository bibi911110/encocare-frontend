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
