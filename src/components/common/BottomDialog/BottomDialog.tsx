import Button from '../Button/Button';
import { bottomDialogIcon1, bottomDialogIcon2, bottomDialogIcon3 } from '../../../assets/icons/dialog';
import { closeIcon } from '../../../assets/icons/common';
import { useState } from 'react';
import './BottomDialog.scss';

const BottomDialog = () => {
    const [isDialogOpen, setDialogOpen] = useState(true);

    return (
        <div className={`bottom-dialog ${isDialogOpen ? 'active' : ''}`}>
            <div className="button-wrapper">
                <Button title="Take a Test" type="primary" icon={bottomDialogIcon1} />
                <Button title="Find an Opthalmogist" type="outline" icon={bottomDialogIcon2} />
                <Button title="Find an Eye Test Center" type="outline" icon={bottomDialogIcon3} />
            </div>
            <span className="close" onClick={() => setDialogOpen(false)}>
                {closeIcon}
            </span>
        </div>
    );
};

export default BottomDialog;
