import Button from '../../../components/common/Button/Button';
import TestReport from '../../../components/common/TestReport/TestReport';
import { pdfIcon, rightArrowIcon, shareIcon } from '../../../assets/icons/common';
import './TestHistory.scss';

const TestHistory = () => {
    return (
        <div className="profile-test-history">
            <div className="breadcrumb">
                <span>Dashboard</span>
                <span className="divider-icon">{rightArrowIcon}</span>
                <span>Test History</span>
            </div>

            <div className="test-history-content">
                <div className="left-section">
                    <div className="card">
                        <h1>Test History</h1>
                        <div className="card-row">
                            <div className="card-col-1">
                                <p>Patient Name</p>
                                <p>Salman Altaf</p>
                            </div>
                            <div className="card-col-2">
                                <p>Test ID</p>
                                <p>1956486</p>
                            </div>
                            <div className="card-col-3">
                                <p>DOB</p>
                                <p>Jan 5, 1995</p>
                            </div>
                        </div>
                        <div className="divider" />
                        <div className="card-row">
                            <div className="card-col-4">
                                <p>Patient Email</p>
                                <p>salman.altaf@hotmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <h1>Test Details</h1>
                        <div className="card-row">
                            <div className="card-col-5">
                                <p>Test ID</p>
                                <p>123456789</p>
                            </div>
                            <div className="card-col-6">
                                <p>Test Type</p>
                                <p>Self Conducted</p>
                            </div>
                        </div>
                        <div className="divider" />
                        <div className="card-row">
                            <div className="card-col-7">
                                <p>Test Date/Time</p>
                                <p>January 10, 2023 | 05:23 PM</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right-section">
                    <div className="result-detail-wrapper">
                        <TestReport />
                    </div>
                    <div className="button-wrapper">
                        <Button title="Download PDF" type="primary" icon={pdfIcon} />
                        <Button title="Share Results" type="primary" icon={shareIcon} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestHistory;
