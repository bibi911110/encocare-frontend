import { Link } from 'react-router-dom';
import { imageIcon, leftArrowIcon2, lockIcon, userIcon } from '../../../assets/icons/common';
import { hospitalIcon } from '../../../assets/icons/sidebar';
import Button from '../../../components/common/Button/Button';
import CheckBox from '../../../components/common/CheckBox/CheckBox';
import Dropzone from '../../../components/common/Dropzone/Dropzone';
import NormalInput from '../../../components/common/NormalInput/NormalInput';
import PasswordInput from '../../../components/common/PasswordInput/PasswordInput';
import Select from '../../../components/common/Select/Select';
import './AddHospital.scss';

const AddHospital = () => {
    return (
        <div className="add-hospital">
            <div className="main-header">
                <h1>
                    <span>{leftArrowIcon2}</span>Add an Hospital
                </h1>
                <p>An an hospital to add in your dashboard!</p>
            </div>

            <div className="main-content">
                <div className="card-wrapper">
                    <div className="card first-card">
                        <div className="card-title">
                            <span className="hospital-icon">{hospitalIcon}</span>
                            Hospital Details
                        </div>

                        <NormalInput placeHolder="Hospital name" />
                        <NormalInput placeHolder="Hospital Location" />
                        <NormalInput placeHolder="Hospital Contact Number" />
                    </div>
                    <div className="card second-card">
                        <div className="card-title">
                            <span>{userIcon}</span>
                            Hospital Admin
                        </div>

                        <div className="name-wrapper">
                            <NormalInput placeHolder="First Name" />
                            <NormalInput placeHolder="Last Name" />
                        </div>
                        <NormalInput placeHolder="Admin Email Address" />
                        <NormalInput placeHolder="Admin Contact Number" />
                    </div>
                    <div className="card third-card">
                        <div className="card-title">
                            <span>{imageIcon}</span>
                            Upload Profile Image
                        </div>

                        <Dropzone />
                    </div>
                </div>

                <div className="button-wrapper">
                    <Button title="Save" type="primary" />
                    <Link to="/">{leftArrowIcon2} Back</Link>
                </div>
            </div>
        </div>
    );
};

export default AddHospital;
