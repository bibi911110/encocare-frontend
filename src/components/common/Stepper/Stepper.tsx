import { StepperPropsType } from '../../../types/basicComponents';
import { stepDoneIcon, stepCurrentIcon, stepPendingIcon } from '../../../assets/icons/common';
import './Stepper.scss';

const steps = ['Patient Details', 'Initial Testing', 'AI Testing', 'Results'];

const Stepper = ({ current }: StepperPropsType) => {
    return (
        <div className="stepper">
            {steps.map((item, index) => {
                let icon, status;

                if (current > index) {
                    icon = stepDoneIcon;
                    status = 'done';
                } else if (current === index) {
                    icon = stepCurrentIcon;
                    status = 'current';
                } else {
                    icon = stepPendingIcon;
                    status = 'pending';
                }

                return (
                    <div className="step-item" key={item}>
                        <div className={`step-divider ${index === steps.length - 1 ? 'last' : ''}`}></div>
                        <div className="step-main">
                            <span className="step-icon">{icon}</span>
                            <span className={`step-title ${status}`}>{item}</span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Stepper;
