import { soundIcon } from '../../../assets/icons/common';
import coverEyeImage from '../../../assets/images/cover-eye.png';
import Button from '../../common/Button/Button';
import './CoverEye.scss';

const CoverEye = ({ onNext, onPrev }: { onNext: () => void; onPrev: () => void }) => {
    return (
        <div className="cover-eye">
            <h1>Cover your left eye</h1>
            <img src={coverEyeImage} alt="" />
            <Button title="Continue with Right Eye" type="primary" onClick={onNext} arrow />
            <span onClick={onPrev}>Back</span>

            <div className="audio-wrapper">
                <p>
                    Audio Guide: <span>{soundIcon}</span>ON
                </p>
            </div>
        </div>
    );
};

export default CoverEye;
