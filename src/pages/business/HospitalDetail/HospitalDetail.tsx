import Button from '../../../components/common/Button/Button';
import CheckBox from '../../../components/common/CheckBox/CheckBox';
import Table from '../../../components/common/Table/Table';
import { HospitalDetailCardPropsType } from '../../../types/tableComponent';
import {
    cardIcon,
    crossCircleIcon,
    downloadIcon,
    leftArrowIcon2,
    lockIcon,
    rightArrowIcon,
    userIcon,
} from '../../../assets/icons/common';
import { hospitalIcon } from '../../../assets/icons/sidebar';
import contactImage from '../../../assets/images/contact.png';
import hospitalBannerImage from '../../../assets/images/hospital-banner.png';
import './HospitalDetail.scss';

const columns = [
    {
        key: 'id',
        title: 'TEST ID',
    },
    {
        key: 'date',
        title: 'TEST DATE & TIME',
    },
    {
        key: 'test',
        title: 'RESULT REPORT',
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
        group: 'Pouros Group',
        address: '7739 Ondricka Gateway',
        test: 9634,
    };
});

const rows = source.map((item) => {
    return {
        key: item.key,
        id: item.id,
        date: (
            <div className="hospital-date">
                <p className="table-text-primary">{item.group}</p>
                <p className="table-text-second">{item.address}</p>
            </div>
        ),
        test: <span className="hospital-test">{item.test}</span>,
        action: (
            <div className="hospital-action">
                <span>{downloadIcon}</span>
                <div className="vertical-divider" />
                <span>{crossCircleIcon}</span>
            </div>
        ),
    };
});

const TableMobileCard = ({ id, test, group, address }: HospitalDetailCardPropsType) => {
    return (
        <div className="hospital-detail-table-mobile-card">
            <div className="first-section">
                <div className="hospital-id">
                    <p className="table-text-second">TEST ID</p>
                    <p className="table-text-primary">{id}</p>
                </div>
                <div className="hospital-test">
                    <p className="table-text-second">RESULT REPORT</p>
                    <p className="table-text-primary">{test}</p>
                </div>
            </div>
            <div className="second-section">
                <p className="table-text-second">TEST DATE & TIME</p>
                <p className="table-text-primary">{group}</p>
                <p className="table-text-second">{address}</p>
            </div>
            <div className="remove">Delete</div>
        </div>
    );
};

const HospitalDetail = () => {
    return (
        <div className="hospital-detail">
            <div className="main-header">
                <div className="title-wrapper">
                    <h1>
                        <span>{leftArrowIcon2}</span>Hospital View Page
                    </h1>
                    <p>An an hospital to add in your dashboard!</p>
                </div>
                <div className="button-wrapper">
                    <Button title="Delete" type="danger" />
                    <Button title="Edit Hospital" type="primary" />
                </div>
            </div>
            <div className="main-content">
                <div className="left-section">
                    <div className="card hospital-card">
                        <div className="card-title">
                            <span className="header-icon hospital-icon">{hospitalIcon}</span>
                            Hospital Details
                        </div>

                        <div className="card-body">
                            <img src={hospitalBannerImage} alt="" />
                            <div className="hospital-name-id-type">
                                <img src={contactImage} alt="" />
                                <div className="title-wrapper">
                                    <div className="hospital-name-id">
                                        <p className="title-text">Hospital name</p>
                                        <p className="value-text">Shifa Hospital Private Limited</p>
                                        <p className="title-text">
                                            Hospital ID: <span>12345678</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="hospital-location-type">
                                <div className="hospital-location">
                                    <p className="title-text">Hospital Location</p>
                                    <p className="value-text">
                                        Plot 235, Regional Head Quaters. Blue Area, G-8, Lahore, Pakistan{' '}
                                    </p>
                                </div>
                                <div className="hospital-type-mobile">
                                    <p className="title-text">Hospital Type</p>
                                    <p className="value-text">NGO</p>
                                </div>
                            </div>
                            <div className="hospital-number-address">
                                <div className="hospital-number">
                                    <p className="title-text">Hospital Contact Number</p>
                                    <p className="value-text">+92 1235 4569 789</p>
                                </div>
                                <div className="hospital-address">
                                    <p className="title-text">Hospital Email Address</p>
                                    <p className="value-text">partner@shifaint.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card table-card">
                        <div className="card-title">
                            <div className="left-title">TESTS Conducted BY HOSPITAL</div>
                            <div className="right-title">
                                <p>View Billing History</p>
                                <span>{rightArrowIcon}</span>
                            </div>
                        </div>
                        <div className="card-body">
                            <Table
                                columns={columns}
                                source={source}
                                filter="date"
                                rows={rows}
                                checked={false}
                                mobileComponent={TableMobileCard}
                            />
                        </div>
                    </div>
                </div>

                <div className="right-section">
                    <div className="card admin-card">
                        <div className="card-title">
                            <span className="header-icon">{userIcon}</span>
                            ADMIN DETAILS
                        </div>
                        <div className="card-body">
                            <div className="grid-card-row">
                                <div className="grid-row-col">
                                    <p className="title-text">First Name</p>
                                    <p className="value-text">Salman</p>
                                </div>
                                <div className="grid-row-col">
                                    <p className="title-text">Last Name</p>
                                    <p className="value-text">Altaf</p>
                                </div>
                            </div>
                            <div className="grid-card-row">
                                <div className="grid-row-col">
                                    <p className="title-text">Admin Email Address</p>
                                    <p className="value-text">salman.altaf@hotmail.com</p>
                                </div>
                                <div className="grid-row-col">
                                    <p className="title-text">Admin Contact Number</p>
                                    <p className="value-text">+92 1234 5678 90</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card security-card">
                        <div className="card-title">
                            <div className="left-title">
                                <span className="lock-icon header-icon">{lockIcon}</span>
                                ACCOUNT SECURITY
                            </div>
                            <div className="right-title">
                                <Button title="Change Password" type="primary" />
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="check-item">
                                <CheckBox />
                                Allow access with OTP
                            </div>
                            <div className="check-item">
                                <CheckBox />
                                Allow Multiple Logins
                            </div>
                            <div className="mobile-button">
                                <Button title="Change Password" type="primary" />
                            </div>
                        </div>
                    </div>
                    <div className="card membership-payment-card">
                        <div className="card-title">
                            <div className="left-title">
                                <span className="header-icon">{cardIcon}</span>
                                MEMBER SHIP & BILLING
                            </div>
                            <div className="right-title">
                                <p>View Billing History</p>
                                <div>{rightArrowIcon}</div>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="grid-card-row">
                                <div className="grid-row-col">
                                    <p className="title-text">Current Membership Plan</p>
                                    <p className="value-text">FREE TRIAL- 2 Months</p>
                                </div>
                                <div className="grid-row-col">
                                    <p className="title-text">Membership Date</p>
                                    <p className="value-text">January 5, 2023</p>
                                </div>
                            </div>
                            <p className="mobile-link">
                                View Billing History <span>{rightArrowIcon}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HospitalDetail;
