import { useState } from 'react';
import Stepper from '../../../components/common/Stepper/Stepper';
import './TestProgress.scss';
import PatientDetail from '../../../components/test/PatientDetail/PatientDetail';
import PatientHistory from '../../../components/test/PatientHistory/PatientHistory';

const TestProgress = () => {
    const [step, steStep] = useState(1);

    const steps = [{ component: <PatientDetail /> }, { component: <PatientHistory /> }];

    return (
        <div className="eye-test">
            <Stepper current={1} />
            <div className="component-wrapper">{steps[step].component}</div>
        </div>
    );
};

export default TestProgress;
