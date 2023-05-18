import { CheckBoxPropsType } from '../../../types/basicComponents';
import './CheckBox.scss';

const CheckBox = ({ isChecked, onChange, className }: CheckBoxPropsType) => {
    const checkboxClassName = className ? `checkbox ${className}` : 'checkbox';

    return (
        <label className={checkboxClassName}>
            <input type="checkbox" checked={isChecked} onChange={onChange} />
            <span className="checkmark"></span>
        </label>
    );
};

export default CheckBox;
