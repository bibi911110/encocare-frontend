import { directionIcon, mapIcon, pdfIcon, shareIcon, soundIcon } from '../../../assets/icons/common';
import logoImage from '../../../assets/images/logo.png';
import testResultImage from '../../../assets/images/result.png';
import Button from '../../common/Button/Button';
import TestHistoryChartItem from '../../profile/TestHistoryChart/TestHistoryChartItem';
import './TestComplete.scss';
import avatarImage1 from '../../../assets/images/avatar/1.png';
import { Link } from 'react-router-dom';

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

const TestComplete = ({ onNext, onPrev }: { onNext: () => void; onPrev: () => void }) => {
    return (
        <div className="test-complete">
            <div className="left-section">
                <div className="scroll-wrapper">
                    <div className="result-info">
                        <h1>Test Results</h1>
                        <p>Thank you for yoru patience! We've sent a copy of these results on your email address.</p>
                        <div className="result-info-card">
                            <div className="card-row">
                                <div className="card-row-col">
                                    <p>Patient Name</p>
                                    <p>Salman Altaf</p>
                                </div>
                                <div className="card-row-col">
                                    <p>Test ID</p>
                                    <p>1956486</p>
                                </div>
                                <div className="card-row-col">
                                    <p>DOB</p>
                                    <p>Jan 5, 1995</p>
                                </div>
                            </div>
                            <div className="card-row last-row">
                                <div className="card-row-middle">
                                    <div className="card-row-col first-col">
                                        <p>Test Date/Time</p>
                                        <p>January 10, 2023 | 05:23 PM</p>
                                    </div>
                                    <div className="card-row-col">
                                        <p>Patient Email</p>
                                        <p>salman.altaf@hotmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="consultant-info">
                        <h1>Recommended Consultants</h1>
                        <p>Please connect with the nearest doctors for further consultation</p>

                        <div className="list-section">
                            {[0, 1, 2, 3].map((item) => (
                                <div className="card-item" key={item}>
                                    <div className="main">
                                        <img src={avatarImage1} alt="" />
                                        <div className="personal-info">
                                            <h3>Dr. Alison West</h3>
                                            <p>Eye Specialist, Eye Surgeon</p>
                                            <span>MBBS, MRC, FRCS</span>
                                        </div>
                                    </div>
                                    <div className="address-wrapper">
                                        {mapIcon}
                                        <span>468 Ezequiel Oval, Danykabury</span>
                                    </div>
                                    <div className="link-wrapper">
                                        <div className="direction-wrapper">
                                            {directionIcon}
                                            <Link to="/">Get Directions</Link>
                                        </div>
                                        <Button title="Connect&nbsp;&nbsp;&nbsp;" arrow type="primary" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="right-section">
                <div className="result-detail-wrapper">
                    <div>
                        <img className="logo-image" src={logoImage} alt="" />
                        <h1>Encocare AI Generated Results</h1>
                        <p>Thank you for yoru patience! We've sent a copy of these results on your email address.</p>

                        <div className="chart-wrapper">
                            <div className="chart-title">
                                <h2>Probability Chart</h2>
                            </div>

                            <div className="chart-content">
                                {chartData.map((item) => (
                                    <div className="chart-content-col" key={item.title}>
                                        <TestHistoryChartItem
                                            title={item.title}
                                            arrow={item.arrow}
                                            color={item.color}
                                            percent={item.percent}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <img className="result-image" src={testResultImage} alt="" />
                    </div>
                </div>
                <div className="button-wrapper">
                    <Button title="Download PDF" type="primary" icon={pdfIcon} onClick={onPrev} />
                    <Button title="Share Results" type="primary" icon={shareIcon} onClick={onNext} />
                </div>
            </div>

            <div className="audio-wrapper">
                <p>
                    Audio Guide: <span>{soundIcon}</span>ON
                </p>
            </div>
        </div>
    );
};

export default TestComplete;
