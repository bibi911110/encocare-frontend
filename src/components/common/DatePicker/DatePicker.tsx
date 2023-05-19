import { datePickerIcon } from '../../../assets/icons/common';
import { NormalInputPropsType } from '../../../types/basicComponents';
import './DatePicker.scss';

const DatePicker = ({ placeHolder, className, ...props }: NormalInputPropsType) => {
    const inputClassName = className ? `date-picker ${className}` : 'date-picker';

    return (
        <div className={inputClassName}>
            <input placeholder={placeHolder} {...props} />
            <span>{datePickerIcon}</span>
        </div>
    );
};

export default DatePicker;
