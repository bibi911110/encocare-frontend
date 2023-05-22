import { soundIcon } from '../../../assets/icons/common';
import { instruction5, instruction6, instruction7, instruction8 } from '../../../assets/icons/test';
import Button from '../../common/Button/Button';
import './Instructions2.scss';

const Instructions2 = ({ onNext, onPrev }: { onNext: () => void; onPrev: () => void }) => {
    return (
        <div className="instructions2">
            <h1>Instructions</h1>
            <p>Please follow instructions for optimal results accuracy</p>

            <div className="card-wrapper">
                <div className="card-row">
                    <div className="card-item">
                        <span>{instruction5}</span>
                        <div className="title-wrapper">
                            <p>Please remove any kind of eyewear such as spectacles, Sunglasses or contract lenses.</p>
                        </div>
                    </div>
                    <div className="card-item">
                        <span>{instruction6}</span>
                        <div className="title-wrapper">
                            <p>You should be in a upfront position with yoru eyes straight in front of screen</p>
                        </div>
                    </div>
                </div>
                <div className="card-row">
                    <div className="card-item">
                        <span>{instruction7}</span>
                        <div className="title-wrapper">
                            <p>You should be approximately 1 Meters away.</p>
                        </div>
                    </div>
                    <div className="card-item">
                        <span>{instruction8}</span>
                        <div className="title-wrapper">
                            <p>Disable any light filters on your device. Night light or warm light</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="button-wrapper">
                <Button title="Start the Test" type="primary" onClick={onNext} arrow />
                <span onClick={onPrev}>Back</span>
            </div>
            <div className="audio-wrapper">
                <p>
                    Audio Guide: <span>{soundIcon}</span>ON
                </p>
            </div>
        </div>
    );
};

export default Instructions2;
