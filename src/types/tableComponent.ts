export type AdminDashboardTableCardPropsType = {
    id: number;
    type: string;
    name: string;
    contact: string;
    test: number;
    logo: string;
};

export type EntityTableCardPropsType = {
    id: number;
    name: string;
    date: string;
    type: string;
    address: string;
    admin: string;
    email: string;
    contact: string;
};

export type EntityDetailCardPropsType = {
    id: number;
    test: number;
    group: string;
    address: string;
};

export type EntityTestResultTableCardPropsType = {
    id: number;
    name: string;
    test: number;
    email: string;
    contact: string;
    date: string;
    time: string;
    address: string;
};

export type IndividualDashboardTableCardPropsType = {
    id: number;
    name: string;
    email: string;
    date: string;
    test: number;
};

export type PatientListTableCardPropsType = {
    id: number;
    name: string;
    email: string;
    contact: string;
    address: string;
    date: string;
    time: string;
    test: number;
};

export type PatientDetailCardPropsType = {
    id: string;
    test: number;
    group: string;
    address: string;
};

export type BusinessDashboardTableCardPropsType = {
    id: number;
    name: string;
    address: string;
    test: number;
};

export type HospitalTableCardPropsType = {
    id: number;
    name: string;
    date: string;
    address: string;
    admin: string;
    email: string;
    contact: string;
};

export type HospitalDetailCardPropsType = {
    id: number;
    test: number;
    group: string;
    address: string;
};

export type DoctorTableCardPropsType = {
    id: number;
    name: string;
    date: string;
    address: string;
    admin: string;
    email: string;
    contact: string;
};

export type DoctorDetailCardPropsType = {
    id: number;
    test: number;
    group: string;
    address: string;
};
