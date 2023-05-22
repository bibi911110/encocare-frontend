import { refreshIcon, soundIcon } from '../../../assets/icons/common';
import colorBlindImage from '../../../assets/images/color-blind.png';
import Button from '../../common/Button/Button';
import './ColorBlindTest.scss';

const ColorBlindTest = () => {
    return (
        <div className="color-blind-test">
            <p>Please indicate the number you can see below</p>

            <div className="image-wrapper">
                <img src={colorBlindImage} alt="" />
                <div className="refresh">
                    <span>{refreshIcon}</span>
                </div>
            </div>

            <div className="select-wrapper">
                <div className="select-item">24</div>
                <div className="select-item active">74</div>
                <div className="select-item">84</div>
                <div className="select-item">21</div>
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

export default ColorBlindTest;
