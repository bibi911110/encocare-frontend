import Button from '../../../components/common/Button/Button';
import TestHistoryChartItem from '../../../components/profile/TestHistoryChart/TestHistoryChartItem';
import logoImage from '../../../assets/images/logo.png';
import testResultImage from '../../../assets/images/result.png';
import { pdfIcon, rightArrowIcon, shareIcon } from '../../../assets/icons/common';
import './TestHistory.scss';

const chartData = [
    {
        title: 'Cataract',
        percent: 70,
        arrow: 'right',
        color: '#FF0000',
    },
    {
        title: 'Stargardts Disease',
        percent: 10,
        arrow: 'right',
        color: '#03CE7D',
    },
    {
        title: 'Macular Degenration',
        percent: 30,
        arrow: 'left',
        color: '#FFC300',
    },
    {
        title: 'Glaucoma',
        percent: 90,
        arrow: 'right',
        color: '#FF0000',
    },
];

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
                        <div>
                            <img className="logo-image" src={logoImage} alt="" />
                            <h1>Encocare AI Generated Results</h1>
                            <p>
                                Thank you for yoru patience! We've sent a copy of these results on your email address.
                            </p>

                            <div className="chart-wrapper">
                                <div className="chart-title">
                                    <h2>Probability Chart</h2>
                                </div>

                                <div className="chart-content">
                                    {chartData.map((item) => (
                                        <TestHistoryChartItem
                                            key={item.title}
                                            title={item.title}
                                            arrow={item.arrow}
                                            color={item.color}
                                            percent={item.percent}
                                        />
                                    ))}
                                </div>
                            </div>

                            <img className="result-image" src={testResultImage} alt="" />
                        </div>
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
