import { Link } from 'react-router-dom';
import { imageIcon, leftArrowIcon2, userIcon } from '../../../assets/icons/common';
import { doctorIcon } from '../../../assets/icons/sidebar';
import Button from '../../../components/common/Button/Button';
import Dropzone from '../../../components/common/Dropzone/Dropzone';
import NormalInput from '../../../components/common/NormalInput/NormalInput';
import './AddDoctor.scss';

const AddDoctor = () => {
    return (
        <div className="add-doctor">
            <div className="main-header">
                <h1>
                    <span>{leftArrowIcon2}</span>Add an Doctor
                </h1>
                <p>An an doctor to add in your dashboard!</p>
            </div>

            <div className="main-content">
                <div className="card-wrapper">
                    <div className="card first-card">
                        <div className="card-title">
                            <span className="doctor-icon">{doctorIcon}</span>
                            Doctor Details
                        </div>

                        <NormalInput placeHolder="Doctor name" />
                        <NormalInput placeHolder="Doctor Location" />
                        <NormalInput placeHolder="Doctor Contact Number" />
                    </div>
                    <div className="card second-card">
                        <div className="card-title">
                            <span>{userIcon}</span>
                            Doctor Admin
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

export default AddDoctor;
