import { useState } from 'react';
import Stepper from '../../../components/common/Stepper/Stepper';
import PatientDetail from '../../../components/test/PatientDetail/PatientDetail';
import PatientHistory from '../../../components/test/PatientHistory/PatientHistory';
import Instructions1 from '../../../components/test/Instructions1/Instructions1';
import ColorBlindTest from '../../../components/test/ColorBlindTest/ColorBlindTest';
import CoverEye from '../../../components/test/CoverEye/CoverEye';
import PatternTest from '../../../components/test/PatternTest/PatternTest';
import Instructions2 from '../../../components/test/Instructions2/Instructions2';
import Camera from '../../../components/test/Camera/Camera';
import TestComplete from '../../../components/test/TestComplete/TestComplete';
import Thankyou from '../../../components/test/Thankyou/Thankyou';
import './TestProgress.scss';

const TestProgress = () => {
    const [step, setStep] = useState(8);

    const steps = [
        { component: <PatientDetail onNext={() => setStep(1)} onPrev={() => setStep(0)} /> },
        { component: <PatientHistory onNext={() => setStep(2)} onPrev={() => setStep(1)} /> },
        { component: <Instructions1 onNext={() => setStep(3)} onPrev={() => setStep(2)} /> },
        { component: <ColorBlindTest onNext={() => setStep(4)} onPrev={() => setStep(3)} /> },
        { component: <CoverEye onNext={() => setStep(5)} onPrev={() => setStep(4)} /> },
        { component: <PatternTest onNext={() => setStep(6)} onPrev={() => setStep(5)} /> },
        { component: <Instructions2 onNext={() => setStep(7)} onPrev={() => setStep(6)} /> },
        { component: <Camera onNext={() => setStep(8)} onPrev={() => setStep(7)} /> },
        { component: <TestComplete onNext={() => setStep(9)} onPrev={() => setStep(8)} /> },
        { component: <Thankyou onNext={() => setStep(9)} onPrev={() => setStep(9)} /> },
    ];

    let realStep = 0;
    if (step < 2) {
        realStep = 0;
    } else if (2 <= step && step < 6) {
        realStep = 1;
    } else if (6 <= step && step < 8) {
        realStep = 2;
    } else if (step === 8) {
        realStep = 3;
    } else if (step === 9) {
        realStep = 4;
    }

    return (
        <div className="eye-test">
            <Stepper current={realStep} />
            <div className="component-wrapper">{steps[step].component}</div>
        </div>
    );
};

export default TestProgress;
