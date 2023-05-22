import { Link } from 'react-router-dom';
import Button from '../../common/Button/Button';
import NormalInput from '../../common/NormalInput/NormalInput';
import successImage from '../../../assets/images/success2.png';
import { soundIcon } from '../../../assets/icons/common';
import './Thankyou.scss';

const Thankyou = ({ onNext, onPrev }: { onNext: () => void; onPrev: () => void }) => {
    return (
        <div className="thanks-test">
            <img src={successImage} alt="" />
            <h1>Thank you for patience!</h1>
            <p>
                We've conducted the test successfully. We need to process the information and we'll send your{' '}
                <br className="desktop-only" />
                results shortly on your email address!
            </p>

            <div className="detail-card">
                <div className="card-col">
                    <p>Patient Name</p>
                    <p>Salman Altaf</p>
                </div>
                <div className="card-col">
                    <p>Test ID</p>
                    <p>1956486</p>
                </div>
                <div className="card-col">
                    <p>Test Date/Time</p>
                    <p>January 10, 2023 | 05:23 PM</p>
                </div>
                <div className="card-col">
                    <p>Patient Email</p>
                    <p>salman.altaf@hotmail.com</p>
                </div>
            </div>

            <div className="detail-card-mobile">
                <div className="card-row">
                    <div className="card-col">
                        <p>Patient Name</p>
                        <p>Salman Altaf</p>
                    </div>
                    <div className="card-col">
                        <p>Patient Email</p>
                        <p>salman.altaf@hotmail.com</p>
                    </div>
                </div>
                <div className="card-row">
                    <div className="card-col">
                        <p>Test ID</p>
                        <p>1956486</p>
                    </div>
                    <div className="card-col">
                        <p>Test Date/Time</p>
                        <p>January 10, 2023 | 05:23 PM</p>
                    </div>
                </div>
            </div>

            <h6>Add alternate email address</h6>
            <NormalInput placeHolder="Enter Email Address" />
            <Button title="Conduct another test" type="primary" onClick={onPrev} />
            <Link to="/">Didn't receive an email?</Link>

            <div className="audio-wrapper">
                <p>
                    Audio Guide: <span>{soundIcon}</span>ON
                </p>
            </div>
        </div>
    );
};

export default Thankyou;
