import Table from '../../../components/common/Table/Table';
import SearchInput from '../../../components/common/SearchInput/SearchInput';
import { crossCircleIcon, eyeIcon, filterIcon, leftArrowIcon2 } from '../../../assets/icons/common';
import { PatientListTableCardPropsType } from '../../../types/tableComponent';
import './PatientList.scss';

const columns = [
    {
        key: 'id',
        title: 'PATIENT Name/ID',
    },
    {
        key: 'contact',
        title: 'Patient Contact',
    },
    {
        key: 'address',
        title: 'PATIENT ADDRESS',
        width: '240px',
    },
    {
        key: 'date',
        title: 'Test Date/Time',
    },
    {
        key: 'test',
        title: 'Result Report',
        center: true,
    },
    {
        key: 'action',
        title: 'Action',
        center: true,
    },
];

const source = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => {
    return {
        key: item,
        id: 57109746,
        name: 'Schultz Group',
        email: 'Francisco.Aufderhar@yahoo.com',
        contact: '222-961-0132 x86110',
        address: '6741 Keyshawn Squares, Timothytown, MD, MQ',
        date: 'November 15, 2022',
        time: '1:05:27 PM',
        test: 74796982,
    };
});

const rows = source.map((item) => {
    return {
        key: item.key,
        id: (
            <div className="patient-id-name">
                <p className="table-text-primary">{item.name}</p>
                <p className="patient-id">{item.id}</p>
            </div>
        ),
        contact: (
            <div className="patient-contact">
                <p className="table-text-primary">{item.email}</p>
                <p className="table-text-second">{item.contact}</p>
            </div>
        ),
        address: <p className="table-text-second">{item.address}</p>,
        date: (
            <div className="patient-date">
                <p className="table-text-primary">{item.date}</p>
                <p className="table-text-second">{item.time}</p>
            </div>
        ),
        test: <p className="patient-test">74796982</p>,
        action: (
            <div className="patient-action">
                <span>{eyeIcon}</span>
                <div className="vertical-divider" />
                <span>{crossCircleIcon}</span>
            </div>
        ),
    };
});

const TableMobileCard = ({ id, name, test, email, contact, date, time, address }: PatientListTableCardPropsType) => {
    return (
        <div className="patient-table-mobile-card">
            <div className="first-section">
                <div className="patient-id">
                    <p className="table-text-second">PATIENT Name/ID</p>
                    <p className="table-text-primary">{name}</p>
                    <p className="table-text-second patient-id-text">{id}</p>
                </div>
                <div className="patient-name">
                    <p className="table-text-second">TEST DATE/TIME</p>
                    <p className="table-text-primary">{date}</p>
                    <p className="table-text-second">{time}</p>
                </div>
            </div>
            <div className="second-section">
                <p className="table-text-second">PATIENT ADDRESS</p>
                <p className="table-text-primary">{address}</p>
            </div>
            <div className="third-section">
                <div className="patient-date">
                    <p className="table-text-second">PATIENT CONTACT</p>
                    <p className="table-text-primary">{email}</p>
                    <p className="table-text-second">{contact}</p>
                </div>
                <div className="patient-address">
                    <p className="table-text-second">RESULT REPORTS</p>
                    <p className="table-text-primary patient-test-text">{test}</p>
                </div>
            </div>
        </div>
    );
};

const PatientList = () => {
    return (
        <div className="patient-list">
            <div className="main-header">
                <span>{leftArrowIcon2}</span>All Patients
            </div>
            <div className="card">
                <div className="search-wrapper">
                    <SearchInput placeHolder="Search for a entity ID/Name etc" />
                    <div className="advanced-filter">
                        <span>{filterIcon}</span>
                        Advanced Filter
                    </div>
                    <span className="mobile-filter">{filterIcon}</span>
                </div>
                <Table
                    columns={columns}
                    rows={rows}
                    source={source}
                    filter="date"
                    checked
                    mobileComponent={TableMobileCard}
                />
            </div>
        </div>
    );
};

export default PatientList;
