import { refreshIcon, soundIcon } from '../../../assets/icons/common';
import patternImage from '../../../assets/images/pattern.png';
import Button from '../../common/Button/Button';
import './PatternTest.scss';

const PatternTest = () => {
    return (
        <div className="pattern-test">
            <p>
                Stare at the black dot and <br className="mobile-only" />
                indicate <br className="desktop-only" />
                the pattern!
            </p>

            <div className="image-wrapper">
                <img src={patternImage} alt="" />
                <div className="refresh">
                    <span>{refreshIcon}</span>
                </div>
            </div>

            <div className="select-wrapper">
                <div className="select-item active">Straight</div>
                <div className="select-item">Distorted</div>
            </div>

            <Button title="Continue" type="primary" arrow />
            <span>Back</span>

            <div className="audio-wrapper">
                <p>
                    Audio Guide: <span>{soundIcon}</span>ON
                </p>
            </div>
        </div>
    );
};

export default PatternTest;
