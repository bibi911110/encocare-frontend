import { CheckBoxPropsType } from '../../../types/basicComponents';
import './CheckBox.scss';

const CheckBox = ({ className }: CheckBoxPropsType) => {
    const checkboxClassName = className ? `checkbox ${className}` : 'checkbox';

    return (
        <label className={checkboxClassName}>
            <input type="checkbox" />
            <span className="checkmark"></span>
        </label>
    );
};

export default CheckBox;
