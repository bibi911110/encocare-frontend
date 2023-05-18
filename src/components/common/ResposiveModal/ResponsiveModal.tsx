import { ResponsiveModalPropsType } from '../../../types/basicComponents';
import { Modal } from 'react-responsive-modal';
import './ResponsiveModal.scss';
import 'react-responsive-modal/styles.css';

const ResponsiveModal = ({ open, handleOk, handleCancel }: ResponsiveModalPropsType) => {
    console.log(open);

    return (
        <Modal open={open} onClose={handleCancel}>
            this is test modal
        </Modal>
    );
};

export default ResponsiveModal;
