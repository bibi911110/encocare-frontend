import { useState } from 'react';
import SignupStep1 from './SignupStep1';
import SignupStep2 from './SignupStep2';
import './BusinessSignup.scss';

const BusinessSignup = () => {
    const [signupStep, setSignupStep] = useState(0);

    const handleNextSignupStep = () => {
        setSignupStep(signupStep + 1);
    };

    const handlePrevSignupStep = () => {
        setSignupStep(signupStep - 1);
    };

    return (
        <div className="business-signup">
            <div className={`form-wrapper signup-step-${signupStep}`}>
                <h1>Business Sign Up</h1>
                {signupStep === 0 && (
                    <SignupStep1 handleNextStep={handleNextSignupStep} handlePrevStep={handlePrevSignupStep} />
                )}
                {signupStep === 1 && (
                    <SignupStep2 handleNextStep={handleNextSignupStep} handlePrevStep={handlePrevSignupStep} />
                )}
            </div>
        </div>
    );
};

export default BusinessSignup;
