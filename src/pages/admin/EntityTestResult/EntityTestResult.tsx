import SearchInput from '../../../components/common/SearchInput/SearchInput';
import { crossCircleIcon, downloadIcon, filterIcon, leftArrowIcon2 } from '../../../assets/icons/common';
import Table from '../../../components/common/Table/Table';
import { EntityTestResultTableCardPropsType } from '../../../types/tableComponent';
import './EntityTestResult.scss';

const columns = [
    {
        key: 'id',
        title: 'TEST ID',
        center: true,
    },
    {
        key: 'name',
        title: 'Patient Name',
        center: true,
    },
    {
        key: 'contact',
        title: 'Patient Contact',
    },
    {
        key: 'date',
        title: 'Test Date/TIme',
    },
    {
        key: 'location',
        title: 'TEST LOCATION',
        width: '240px',
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
        name: 'Julio Pfannerstill',
        date: 'November 15, 2022',
        time: '1:05:27 PM',
        address: '6741 Keyshawn Squares, Timothytown, MD, MQ',
        contact: '222-961-0132 x86110',
        email: 'Francisco.Aufderhar@yahoo.com',
        test: 74796982,
    };
});

const rows = source.map((item) => {
    return {
        key: item.key,
        id: <span className="table-text-primary">{item.id}</span>,
        name: <span className="table-text-second">{item.name}</span>,
        contact: (
            <div className="entity-contact">
                <p className="table-text-primary">{item.email}</p>
                <p className="table-text-second">{item.contact}</p>
            </div>
        ),
        date: (
            <div className="entity-date">
                <p className="table-text-primary">{item.date}</p>
                <p className="table-text-second">{item.time}</p>
            </div>
        ),
        location: <p className="entity-address table-text-second">{item.address}</p>,
        test: <p className="entity-test">74796982</p>,
        action: (
            <div className="entity-action">
                <span>{downloadIcon}</span>
                <div className="vertical-divider" />
                <span>{crossCircleIcon}</span>
            </div>
        ),
    };
});

const TableMobileCard = ({
    id,
    name,
    test,
    email,
    contact,
    date,
    time,
    address,
}: EntityTestResultTableCardPropsType) => {
    return (
        <div className="entity-table-mobile-card">
            <div className="first-section">
                <div className="entity-id">
                    <p className="table-text-second">TEST ID</p>
                    <p className="table-text-primary">{id}</p>
                </div>
                <div className="entity-name">
                    <p className="table-text-second">PATIENT NAME</p>
                    <p className="table-text-primary">{name}</p>
                </div>
                <div className="entity-test">
                    <p className="table-text-second">Result Report</p>
                    <p className="table-text-primary test-text">{test}</p>
                </div>
            </div>
            <div className="second-section">
                <p className="table-text-second">Patient Contact</p>
                <p className="table-text-primary">{email}</p>
                <p className="table-text-second">{contact}</p>
            </div>
            <div className="third-section">
                <div className="entity-date">
                    <p className="table-text-second">Test Date/TIme</p>
                    <p className="table-text-primary">{date}</p>
                    <p className="table-text-second">{time}</p>
                </div>
                <div className="entity-address">
                    <p className="table-text-second">TEST LOCATION</p>
                    <p className="table-text-primary">{address}</p>
                </div>
            </div>
            <div className="remove">Delete</div>
        </div>
    );
};

const EntityTestResult = () => {
    return (
        <div className="entity-test-result">
            <div className="main-header">
                <span>{leftArrowIcon2}</span>Entity Test Results
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

export default EntityTestResult;
