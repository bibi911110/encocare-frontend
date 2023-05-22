import Button from '../../common/Button/Button';
import TestReport from '../../common/TestReport/TestReport';
import ConsultantCard from '../../common/ConsultantCard/ConsultantCard';
import { pdfIcon, shareIcon, soundIcon } from '../../../assets/icons/common';
import './TestComplete.scss';

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
                                <div className="row-col" style={{ flex: 2 }}>
                                    <p>Patient Name</p>
                                    <span>Salman Altaf</span>
                                </div>
                                <div className="row-col" style={{ flex: 1 }}>
                                    <p>Test ID</p>
                                    <span>1956486</span>
                                </div>
                                <div className="row-col" style={{ flex: 3 }}>
                                    <p>DOB</p>
                                    <span>Jan 5, 1995</span>
                                </div>
                            </div>
                            <div className="card-row mobile-card-row">
                                <div className="row-col mobile-row" style={{ flex: 1 }}>
                                    <p>Test Date/Time</p>
                                    <span>January 10, 2023 | 05:23 PM</span>
                                </div>
                                <div className="row-col mobile-row" style={{ flex: 1 }}>
                                    <p>Patient Email</p>
                                    <span>salman.altaf@hotmail.com</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="consultant-info">
                        <h1>Recommended Consultants</h1>
                        <p>Please connect with the nearest doctors for further consultation</p>

                        <div className="list-section">
                            {[0, 1, 2, 3].map((item) => (
                                <div className="list-item" key={item}>
                                    <ConsultantCard />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="right-section">
                <div className="result-detail-wrapper">
                    <TestReport />
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
