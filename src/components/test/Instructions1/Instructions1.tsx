import Button from '../../common/Button/Button';
import { soundIcon } from '../../../assets/icons/common';
import { instruction1, instruction2, instruction3, instruction4 } from '../../../assets/icons/test';
import './Instructions1.scss';

const Instructions1 = ({ onNext, onPrev }: { onNext: () => void; onPrev: () => void }) => {
    return (
        <div className="instructions1">
            <h1>Instructions</h1>
            <p>Please follow the instructions below for optimal results!</p>

            <div className="card-wrapper">
                <div className="card-row">
                    <div className="card-item">
                        <span>{instruction1}</span>
                        <div className="title-wrapper">
                            <h2>Remove Eye Wear</h2>
                            <p>Please remove any kind of eyewear such as spectacles, Sunglasses or contract lenses.</p>
                        </div>
                    </div>
                    <div className="card-item">
                        <span>{instruction2}</span>
                        <div className="title-wrapper">
                            <h2>Secure Posture</h2>
                            <p>You should be in a upfront position with yoru eyes straight in front of screen</p>
                        </div>
                    </div>
                </div>
                <div className="card-row">
                    <div className="card-item">
                        <span>{instruction3}</span>
                        <div className="title-wrapper">
                            <h2>Maintain distance</h2>
                            <p>You should be approximately 1 Meters away.</p>
                        </div>
                    </div>
                    <div className="card-item">
                        <span>{instruction4}</span>
                        <div className="title-wrapper">
                            <h2>Disable Warm/Night Filters</h2>
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

export default Instructions1;
