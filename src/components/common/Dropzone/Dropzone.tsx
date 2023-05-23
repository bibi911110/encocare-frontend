import { useDropzone } from 'react-dropzone';
import { dropzoneImageIcon, uploadIcon } from '../../../assets/icons/common';
import './Dropzone.scss';

const Dropzone = () => {
    const { getRootProps, getInputProps } = useDropzone();

    return (
        <div {...getRootProps({ className: 'dropzone' })}>
            <input {...getInputProps()} />
            <span>{dropzoneImageIcon}</span>
            <p>Drag and drop to upload an image</p>
            <div className="dropzone-button">
                {uploadIcon}
                Upload from computer
            </div>
        </div>
    );
};

export default Dropzone;
