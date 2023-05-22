import Button from '../../common/Button/Button';
import DatePicker from '../../common/DatePicker/DatePicker';
import NormalInput from '../../common/NormalInput/NormalInput';
import Select from '../../common/Select/Select';
import companyImage from '../../../assets/images/company.png';
import './PatientDetail.scss';

const PatientDetail = ({ onNext, onPrev }: { onNext: () => void; onPrev: () => void }) => {
    return (
        <div className="patient-detail">
            <h1>Patient Details</h1>
            <p>Please enter patient details!</p>

            <div className="input-wrapper">
                <div className="name">
                    <NormalInput placeHolder="First Name" />
                    <NormalInput placeHolder="Last Name" />
                </div>
                <NormalInput placeHolder="Email Address" />
                <div className="phone-number">
                    <Select options={['+92']} defaultValue={0} />
                    <NormalInput placeHolder="Contact Number" />
                </div>
                <div className="gender-birth">
                    <Select options={['Male', 'Female']} placeHolder="Gender" />
                    <DatePicker placeHolder="Date of Birth" />
                </div>
            </div>

            <Button title="Continue" type="primary" onClick={onNext} arrow />
            <span onClick={onPrev}>Back</span>

            <div className="company-badge">
                <img src={companyImage} alt="" />
            </div>
        </div>
    );
};

export default PatientDetail;
