import { leftArrowIcon2 } from '../../../assets/icons/common';
import Button from '../../../components/common/Button/Button';
import './EntityDetail.scss';

const EntityDetail = () => {
    return (
        <div className="entity-detail">
            <div className="main-header">
                <div className="title-wrapper">
                    <h1>
                        <span>{leftArrowIcon2}</span>Entity View Page
                    </h1>
                    <p>An an entity to add in yoru dashboard!</p>
                </div>
                <div className="button-wrapper">
                    <Button title="Delete Entity" type="danger" />
                    <Button title="Edit Entity" type="primary" />
                </div>
            </div>
            <div className="main-content">
                <div className="card-wrapper">
                    <div className="card first-card"></div>
                    <div className="card second-card"></div>
                    <div className="card third-card"></div>
                    <div className="card fourth-card"></div>
                    <div className="card fifth-card"></div>
                </div>
            </div>
        </div>
    );
};

export default EntityDetail;
