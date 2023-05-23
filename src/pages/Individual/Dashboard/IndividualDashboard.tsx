import { AreaChart, Area, Tooltip, ResponsiveContainer } from 'recharts';
import Button from '../../../components/common/Button/Button';
import Table from '../../../components/common/Table/Table';
import CheckBox from '../../../components/common/CheckBox/CheckBox';
import { IndividualDashboardTableCardPropsType } from '../../../types/tableComponent';
import { crossCircleIcon, downArrowIcon, eyeIcon, menuIcon, upCircleIcon } from '../../../assets/icons/common';
import { plusCircleIcon } from '../../../assets/icons/sidebar';
import './IndividualDashboard.scss';

const data = [
    {
        name: 'Page A',
        uv: 2000,
    },
    {
        name: 'Page B',
        uv: 1600,
    },
    {
        name: 'Page C',
        uv: 1400,
    },
    {
        name: 'Page D',
        uv: 2000,
    },
    {
        name: 'Page E',
        uv: 2400,
    },
    {
        name: 'Page F',
        uv: 2600,
    },
    {
        name: 'Page G',
        uv: 3200,
    },
];

const columns = [
    {
        key: 'id',
        title: 'patient ID',
        width: '200px',
    },
    {
        key: 'name',
        title: 'patient Name/Contact',
    },
    {
        key: 'date',
        title: 'test date/time',
    },
    {
        key: 'test',
        title: 'RESULTS',
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
        id: 53735401,
        name: 'Wilfred Casper',
        email: 'Myron72@hotmail.com',
        date: 'January 23, 2023',
        test: 52910770,
    };
});

const rows = source.map((item) => {
    return {
        key: item.key,
        id: <span className="entity-id">{item.id}</span>,
        name: (
            <div className="entity-name">
                <p className="table-text-primary">{item.name}</p>
                <p className="table-text-second">{item.email}</p>
            </div>
        ),
        date: (
            <div className="entity-date">
                <p className="table-text-primary">{item.date}</p>
                <p className="table-text-second">{item.date}</p>
            </div>
        ),
        test: <span className="entity-test">{item.test}</span>,
        action: (
            <div className="entity-action">
                <span>{eyeIcon}</span>
                <div className="vertical-divider" />
                <span>{crossCircleIcon}</span>
            </div>
        ),
    };
});

const TableMobileCard = ({ id, test, name, email, date }: IndividualDashboardTableCardPropsType) => {
    return (
        <div className="dashboard-table-mobile-card">
            <CheckBox />
            <div className="card-body">
                <div className="card-row">
                    <div className="card-row-col">
                        <p className="table-text-second">PATIENT ID</p>
                        <p className="entity-id">{id}</p>
                    </div>
                    <div className="card-row-col">
                        <p className="table-text-second">RESULT REPORT</p>
                        <p className="entity-test">{test}</p>
                    </div>
                </div>
                <div className="card-row">
                    <div className="card-row-col">
                        <p className="table-text-second">PATIENT NAME/CONTACT</p>
                        <p className="table-text-primary second-text">{name}</p>
                        <p className="table-text-second">{email}</p>
                    </div>
                    <div className="card-row-col">
                        <p className="table-text-second">TEST DATE/TIME</p>
                        <p className="table-text-primary second-text">{date}</p>
                        <p className="table-text-second">{date}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const IndividualDashboard = () => {
    return (
        <div className="individual-dashboard">
            <div className="main-header">
                <Button title="&nbsp;&nbsp;Conduct a Test" type="primary" icon={plusCircleIcon} />
            </div>
            <div className="main-section">
                <div className="left-section">
                    <div className="card summary-card">
                        <div className="card-header">
                            <div className="title-wrapper">
                                <h1>QUICK SUMMARY</h1>
                                <p>Last 12 Months</p>
                            </div>
                            <div className="date-select">
                                January 2023 <span>{downArrowIcon}</span>
                            </div>
                        </div>
                        <div className="main-title">
                            <h1 className="text-green">
                                20,265 <span>{upCircleIcon}</span>
                            </h1>
                            <p>Overall Patients</p>
                        </div>
                        <div className="sub-title">
                            <div className="col">
                                <h3 className="text-blue">5,250</h3>
                                <p>Hospitals</p>
                            </div>
                            <div className="col">
                                <h3 className="text-red">1,265</h3>
                                <p>NGOS</p>
                            </div>
                            <div className="col">
                                <h3 className="text-yellow">8,265</h3>
                                <p>Doctors</p>
                            </div>
                            <div className="col">
                                <h3 className="text-yellow">10,265</h3>
                                <p>Laboratories</p>
                            </div>
                        </div>
                    </div>
                    <div className="card chart-card">
                        <div className="card-header">
                            <div className="title-wrapper">
                                <h1>TESTING STATS</h1>
                                <p>Last 12 Months</p>
                            </div>
                            <span>{menuIcon}</span>
                        </div>
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart
                                data={data}
                                margin={{
                                    top: 60,
                                    right: 0,
                                    left: 0,
                                    bottom: 0,
                                }}
                            >
                                <Tooltip />
                                <Area type="monotone" dataKey="uv" stroke="#0BB500" fill="#C6E8C4" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                <div className="right-section">
                    <div className="card table-card">
                        <div className="card-header">
                            <h1>TESTS CONDUCTED BY ENTITY</h1>
                            <div className="button-wrapper">
                                <div className="date-select">
                                    Date <span>{downArrowIcon}</span>
                                </div>
                                <div className="type-select">
                                    Type <span>{downArrowIcon}</span>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
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
                </div>
            </div>
        </div>
    );
};

export default IndividualDashboard;
