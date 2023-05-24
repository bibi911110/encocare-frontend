import { AreaChart, Area, Tooltip, ResponsiveContainer, BarChart, XAxis, Bar, Cell } from 'recharts';
import { downArrowIcon, eyeIcon, menuIcon } from '../../../assets/icons/common';
import './BusinessDashboard.scss';
import Table from '../../../components/common/Table/Table';
import CheckBox from '../../../components/common/CheckBox/CheckBox';
import { BusinessDashboardTableCardPropsType } from '../../../types/tableComponent';

const data1 = [
    {
        name: 'Jan',
        value: 145,
        color: '#0BB500',
    },
    {
        name: 'Feb',
        value: 73,
        color: '#FFB300',
    },
    {
        name: 'Mar',
        value: 186,
        color: '#0BB500',
    },
    {
        name: 'Apr',
        value: 177,
        color: '#0BB500',
    },
    {
        name: 'May',
        value: 112,
        color: '#FFB300',
    },
    {
        name: 'Jun',
        value: 97,
        color: '#FFB300',
    },
    {
        name: 'Jul',
        value: 10,
        color: '#FF0202',
    },
    {
        name: 'Aug',
        value: 195,
        color: '#0BB500',
    },
    {
        name: 'Set',
        value: 98,
        color: '#FFB300',
    },
    {
        name: 'Oct',
        value: 37,
        color: '#FFB300',
    },
    {
        name: 'Nov',
        value: 195,
        color: '#0BB500',
    },
    {
        name: 'Dec',
        value: 73,
        color: '#FFB300',
    },
];

const data2 = [
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
        title: 'Entity ID',
        center: true,
    },
    {
        key: 'contact',
        title: 'HOSPITAL Name/Contact',
    },
    {
        key: 'test',
        title: 'Total Tests',
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
        name: 'Pouros Group',
        address: '7739 Ondricka Gateway, North Sheridan, KY, NF',
        test: 9634,
    };
});

const rows = source.map((item) => {
    return {
        key: item.key,
        id: <span className="entity-id">{item.id}</span>,
        contact: (
            <div className="entity-contact">
                <p className="table-text-primary">{item.name}</p>
                <p className="table-text-second">{item.address}</p>
            </div>
        ),
        test: <span className="table-text-primary">{item.test}</span>,
        action: <span>{eyeIcon}</span>,
    };
});

const TableMobileCard = ({ id, name, address, test }: BusinessDashboardTableCardPropsType) => {
    return (
        <div className="business-dashboard-table-mobile-card">
            <CheckBox />
            <div className="mobile-card-body">
                <div className="first-card-row">
                    <p className="table-text-second">Entity ID</p>
                    <p className="table-text-primary">{id}</p>
                </div>
                <div className="second-card-row">
                    <div className="row-card-col">
                        <p className="table-text-second">HOSPITAL Name/Contact</p>
                        <p className="table-text-primary">{name}</p>
                        <p className="table-text-second">{address}</p>
                    </div>
                    <div className="row-card-col">
                        <p className="table-text-second">Total Tests</p>
                        <p className="table-text-primary">{test}</p>
                    </div>
                </div>
            </div>
            <div className="view-icon">{eyeIcon}</div>
        </div>
    );
};

const BusinessDashboard = () => {
    return (
        <div className="business-dashboard">
            <div className="first-section">
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
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            data={data1}
                            margin={{
                                top: 46,
                                right: 0,
                                left: 0,
                                bottom: 0,
                            }}
                        >
                            <XAxis dataKey="name" />
                            <Tooltip />
                            <Bar dataKey="value">
                                {data1.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
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
                            data={data2}
                            margin={{
                                top: 46,
                                right: 0,
                                left: 0,
                                bottom: 0,
                            }}
                            startAngle={45}
                            endAngle={45}
                        >
                            <Tooltip />
                            <Area type="monotone" dataKey="uv" stroke="#FFB300 " fill="#F7E8C4" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
            <div className="second-section">
                <div className="card table-card">
                    <div className="card-header">
                        <span>TEST CONDUCTED BY HOSPITALS</span>
                    </div>
                    <div className="card-body">
                        <Table
                            columns={columns}
                            rows={rows}
                            source={source}
                            filter="test"
                            checked
                            mobileComponent={TableMobileCard}
                        />
                    </div>
                </div>
                <div className="card table-card">
                    <div className="card-header">
                        <span>TEST CONDUCTED BY HOSPITALS</span>
                    </div>
                    <div className="card-body">
                        <Table
                            columns={columns}
                            rows={rows}
                            source={source}
                            filter="test"
                            checked
                            mobileComponent={TableMobileCard}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessDashboard;
