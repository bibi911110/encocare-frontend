import {
    crossCircleIcon,
    downloadIcon,
    leftArrowIcon2,
    pdfIcon,
    rightArrowIcon,
    shareIcon,
    userIcon,
} from '../../../assets/icons/common';
import Button from '../../../components/common/Button/Button';
import './PatientDetail.scss';
import Table from '../../../components/common/Table/Table';
import { PatientDetailCardPropsType } from '../../../types/tableComponent';
import TestReport from '../../../components/common/TestReport/TestReport';

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
            <div className="patient-date">
                <p className="table-text-primary">{item.group}</p>
                <p className="table-text-second">{item.address}</p>
            </div>
        ),
        test: <span className="patient-test">{item.test}</span>,
        action: (
            <div className="patient-action">
                <span>{downloadIcon}</span>
                <div className="vertical-divider" />
                <span>{crossCircleIcon}</span>
            </div>
        ),
    };
});

const TableMobileCard = ({ id, test, group, address }: PatientDetailCardPropsType) => {
    return (
        <div className="patient-detail-table-mobile-card">
            <div className="first-section">
                <div className="patient-id">
                    <p className="table-text-second">TEST ID</p>
                    <p className="table-text-primary">{id}</p>
                </div>
                <div className="patient-test">
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

const PatientDetail = () => {
    return (
        <div className="patient-detail">
            <div className="main-header">
                <div className="title-wrapper">
                    <h1>
                        <span>{leftArrowIcon2}</span>Patient View Page
                    </h1>
                </div>
            </div>
            <div className="main-content">
                <div className="left-section">
                    <div className="card patient-card">
                        <div className="card-title">
                            <span className="hospital-icon">{userIcon}</span>
                            PATIENT DETAILS
                        </div>

                        <div className="card-body">
                            <div className="patient-name-id-address">
                                <div className="patient-name-id">
                                    <p className="title-text">Patient name</p>
                                    <p className="value-text">Mrs. Herbert Lubowitz</p>
                                    <p className="title-text">
                                        patient ID: <span>12345678</span>
                                    </p>
                                </div>
                                <div className="patient-address">
                                    <p className="title-text">Patient Location</p>
                                    <p className="value-text">
                                        Plot 235, Regional Head Quaters. Blue Area, G-8, Lahore, Pakistan{' '}
                                    </p>
                                </div>
                            </div>
                            <div className="patient-number-address">
                                <div className="patient-number">
                                    <p className="title-text">Patient Contact Number</p>
                                    <p className="value-text">+92 1235 4569 789</p>
                                </div>
                                <div className="patient-address">
                                    <p className="title-text">Patient Email Address</p>
                                    <p className="value-text">partner@shifaint.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card table-card">
                        <div className="card-title">
                            <div className="left-title">PATIENT TEST HISTORY</div>
                            <div className="right-title">
                                <p>View all</p>
                                <div>{rightArrowIcon}</div>
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
                    <div className="card">
                        <div className="card-header">
                            <h1>Test Details</h1>
                            <span>1956486</span>
                        </div>
                        <div className="card-body">
                            <div className="scroll-wrapper">
                                <TestReport />
                            </div>
                            <div className="button-wrapper">
                                <Button title="Download PDF" type="primary" icon={pdfIcon} />
                                <Button title="Share Results" type="green" icon={shareIcon} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PatientDetail;
