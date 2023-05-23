import { AreaChart, Area, Tooltip, ResponsiveContainer } from 'recharts';
import Button from '../../../components/common/Button/Button';
import Table from '../../../components/common/Table/Table';
import CheckBox from '../../../components/common/CheckBox/CheckBox';
import { DashboardTableCardPropsType } from '../../../types/tableComponent';
import contactImage from '../../../assets/images/contact.png';
import { crossCircleIcon, downArrowIcon, eyeIcon, menuIcon, upCircleIcon } from '../../../assets/icons/common';
import { plusCircleIcon } from '../../../assets/icons/sidebar';
import './AdminDashboard.scss';

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
        key: 'type',
        title: 'Entity ID/Type',
        width: '200px',
    },
    {
        key: 'name',
        title: 'Entity Name/Contact',
    },
    {
        key: 'test',
        title: 'Total Tests',
    },
    {
        key: 'action',
        title: 'Action',
    },
];

const source = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => {
    return {
        key: item,
        id: 53735401,
        type: 'Individual',
        name: 'Pouros Group',
        contact: '7739 Ondricka Gateway, North Sheridan, KY, NF',
        test: 9634,
        logo: contactImage,
    };
});

const rows = source.map((item) => {
    return {
        key: item.key,
        type: (
            <div className="entity-type">
                <p className="table-text-primary">{item.id}</p>
                <p className="table-text-second">{item.type}</p>
            </div>
        ),
        name: (
            <div className="entity-contact">
                <img src={contactImage} alt="" />
                <div>
                    <p className="table-text-primary">{item.name}</p>
                    <p className="table-text-second">{item.contact}</p>
                </div>
            </div>
        ),
        test: item.test,
        action: (
            <div className="entity-action">
                <span>{eyeIcon}</span>
                <div className="vertical-divider" />
                <span>{crossCircleIcon}</span>
            </div>
        ),
    };
});

const TableMobileCard = ({ id, type, name, contact, test, logo }: DashboardTableCardPropsType) => {
    return (
        <div className="dashboard-table-mobile-card">
            <CheckBox />
            <div className="card-body">
                <p className="table-text-second">ENTITY NAME/CONTACT</p>
                <div className="entity-contact">
                    <img src={logo} alt="" />
                    <div>
                        <p className="table-text-primary">{name}</p>
                        <p className="table-text-second">{contact}</p>
                    </div>
                </div>

                <div className="card-footer">
                    <div className="entity-test">
                        <p className="table-text-second">TOTAL TESTS</p>
                        <p className="table-text-primary">{test}</p>
                    </div>
                    <div className="entity-type">
                        <p className="table-text-second">ENTITY ID/TYPE</p>
                        <div>
                            <span>{id}</span>
                            <span>{type}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="remove">Delete</div>
        </div>
    );
};

const AdminDashboard = () => {
    return (
        <div className="admin-dashboard">
            <div className="main-header">
                <Button title="&nbsp;&nbsp;Add Entity" type="primary" icon={plusCircleIcon} />
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
                                filter="test"
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

export default AdminDashboard;
