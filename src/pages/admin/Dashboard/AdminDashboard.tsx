import { AreaChart, Area, Tooltip, ResponsiveContainer } from 'recharts';
import { crossCircleIcon, downArrowIcon, eyeIcon, menuIcon, upCircleIcon } from '../../../assets/icons/common';
import { plusCircleIcon } from '../../../assets/icons/sidebar';
import Button from '../../../components/common/Button/Button';
import './AdminDashboard.scss';
import Table from '../../../components/common/Table/Table';
import contactImage from '../../../assets/images/contact.png';

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

const rows = [
    {
        key: 1,
        type: (
            <div className="entity-type">
                <p>53735401</p>
                <p>Individual</p>
            </div>
        ),
        name: (
            <div className="entity-contact">
                <img src={contactImage} alt="" />
                <div>
                    <p>Pouros Group</p>
                    <p>7739 Ondricka Gateway, North Sheridan, KY, NF</p>
                </div>
            </div>
        ),
        test: 9634,
        action: (
            <div className="entity-action">
                <span>{eyeIcon}</span>
                <div className="vertical-divider" />
                <span>{crossCircleIcon}</span>
            </div>
        ),
    },
    {
        key: 2,
        type: (
            <div className="entity-type">
                <p>53735401</p>
                <p>Individual</p>
            </div>
        ),
        name: (
            <div className="entity-contact">
                <img src={contactImage} alt="" />
                <div>
                    <p>Pouros Group</p>
                    <p>7739 Ondricka Gateway, North Sheridan, KY, NF</p>
                </div>
            </div>
        ),
        test: 9634,
        action: (
            <div className="entity-action">
                <span>{eyeIcon}</span>
                <div className="vertical-divider" />
                <span>{crossCircleIcon}</span>
            </div>
        ),
    },
    {
        key: 3,
        type: (
            <div className="entity-type">
                <p>53735401</p>
                <p>Individual</p>
            </div>
        ),
        name: (
            <div className="entity-contact">
                <img src={contactImage} alt="" />
                <div>
                    <p>Pouros Group</p>
                    <p>7739 Ondricka Gateway, North Sheridan, KY, NF</p>
                </div>
            </div>
        ),
        test: 9634,
        action: (
            <div className="entity-action">
                <span>{eyeIcon}</span>
                <div className="vertical-divider" />
                <span>{crossCircleIcon}</span>
            </div>
        ),
    },
    {
        key: 4,
        type: (
            <div className="entity-type">
                <p>53735401</p>
                <p>Individual</p>
            </div>
        ),
        name: (
            <div className="entity-contact">
                <img src={contactImage} alt="" />
                <div>
                    <p>Pouros Group</p>
                    <p>7739 Ondricka Gateway, North Sheridan, KY, NF</p>
                </div>
            </div>
        ),
        test: 9634,
        action: (
            <div className="entity-action">
                <span>{eyeIcon}</span>
                <div className="vertical-divider" />
                <span>{crossCircleIcon}</span>
            </div>
        ),
    },
    {
        key: 5,
        type: (
            <div className="entity-type">
                <p>53735401</p>
                <p>Individual</p>
            </div>
        ),
        name: (
            <div className="entity-contact">
                <img src={contactImage} alt="" />
                <div>
                    <p>Pouros Group</p>
                    <p>7739 Ondricka Gateway, North Sheridan, KY, NF</p>
                </div>
            </div>
        ),
        test: 9634,
        action: (
            <div className="entity-action">
                <span>{eyeIcon}</span>
                <div className="vertical-divider" />
                <span>{crossCircleIcon}</span>
            </div>
        ),
    },
    {
        key: 6,
        type: (
            <div className="entity-type">
                <p>53735401</p>
                <p>Individual</p>
            </div>
        ),
        name: (
            <div className="entity-contact">
                <img src={contactImage} alt="" />
                <div>
                    <p>Pouros Group</p>
                    <p>7739 Ondricka Gateway, North Sheridan, KY, NF</p>
                </div>
            </div>
        ),
        test: 9634,
        action: (
            <div className="entity-action">
                <span>{eyeIcon}</span>
                <div className="vertical-divider" />
                <span>{crossCircleIcon}</span>
            </div>
        ),
    },
    {
        key: 7,
        type: (
            <div className="entity-type">
                <p>53735401</p>
                <p>Individual</p>
            </div>
        ),
        name: (
            <div className="entity-contact">
                <img src={contactImage} alt="" />
                <div>
                    <p>Pouros Group</p>
                    <p>7739 Ondricka Gateway, North Sheridan, KY, NF</p>
                </div>
            </div>
        ),
        test: 9634,
        action: (
            <div className="entity-action">
                <span>{eyeIcon}</span>
                <div className="vertical-divider" />
                <span>{crossCircleIcon}</span>
            </div>
        ),
    },
    {
        key: 8,
        type: (
            <div className="entity-type">
                <p>53735401</p>
                <p>Individual</p>
            </div>
        ),
        name: (
            <div className="entity-contact">
                <img src={contactImage} alt="" />
                <div>
                    <p>Pouros Group</p>
                    <p>7739 Ondricka Gateway, North Sheridan, KY, NF</p>
                </div>
            </div>
        ),
        test: 9634,
        action: (
            <div className="entity-action">
                <span>{eyeIcon}</span>
                <div className="vertical-divider" />
                <span>{crossCircleIcon}</span>
            </div>
        ),
    },
    {
        key: 9,
        type: (
            <div className="entity-type">
                <p>53735401</p>
                <p>Individual</p>
            </div>
        ),
        name: (
            <div className="entity-contact">
                <img src={contactImage} alt="" />
                <div>
                    <p>Pouros Group</p>
                    <p>7739 Ondricka Gateway, North Sheridan, KY, NF</p>
                </div>
            </div>
        ),
        test: 9634,
        action: (
            <div className="entity-action">
                <span>{eyeIcon}</span>
                <div className="vertical-divider" />
                <span>{crossCircleIcon}</span>
            </div>
        ),
    },
    {
        key: 10,
        type: (
            <div className="entity-type">
                <p>53735401</p>
                <p>Individual</p>
            </div>
        ),
        name: (
            <div className="entity-contact">
                <img src={contactImage} alt="" />
                <div>
                    <p>Pouros Group</p>
                    <p>7739 Ondricka Gateway, North Sheridan, KY, NF</p>
                </div>
            </div>
        ),
        test: 9634,
        action: (
            <div className="entity-action">
                <span>{eyeIcon}</span>
                <div className="vertical-divider" />
                <span>{crossCircleIcon}</span>
            </div>
        ),
    },
];

const AdminDashboard = () => {
    return (
        <div className="admin-dashboard">
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
                <div className="right-header">
                    <Button title="&nbsp;&nbsp;Add Entity" type="primary" icon={plusCircleIcon} />
                </div>
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
                        <Table columns={columns} rows={rows} filter="test" checked />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
