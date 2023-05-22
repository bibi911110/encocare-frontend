import { useState } from 'react';
import Stepper from '../../../components/common/Stepper/Stepper';
import PatientDetail from '../../../components/test/PatientDetail/PatientDetail';
import PatientHistory from '../../../components/test/PatientHistory/PatientHistory';
import Instructions1 from '../../../components/test/Instructions1/Instructions1';
import './TestProgress.scss';
import ColorBlindTest from '../../../components/test/ColorBlindTest/ColorBlindTest';
import CoverEye from '../../../components/test/CoverEye/CoverEye';
import PatternTest from '../../../components/test/PatternTest/PatternTest';
import Instructions2 from '../../../components/test/Instructions2/Instructions2';
import Camera from '../../../components/test/Camera/Camera';
import TestResult from '../../../components/test/TestResult/TestResult';
import Thankyou from '../../../components/test/Thankyou/Thankyou';

const TestProgress = () => {
    const [step, steStep] = useState(9);

    const steps = [
        { component: <PatientDetail /> },
        { component: <PatientHistory /> },
        { component: <Instructions1 /> },
        { component: <ColorBlindTest /> },
        { component: <CoverEye /> },
        { component: <PatternTest /> },
        { component: <Instructions2 /> },
        { component: <Camera /> },
        { component: <TestResult /> },
        { component: <Thankyou /> },
    ];

    return (
        <div className="eye-test">
            <Stepper current={1} />
            <div className="component-wrapper">{steps[step].component}</div>
        </div>
    );
};

export default TestProgress;
