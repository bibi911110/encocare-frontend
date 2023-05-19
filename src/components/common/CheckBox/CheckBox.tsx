import { CheckBoxPropsType } from '../../../types/basicComponents';
import './CheckBox.scss';

const CheckBox = ({ className, checked }: CheckBoxPropsType) => {
    const checkboxClassName = className ? `checkbox ${className}` : 'checkbox';

    return (
        <label className={checkboxClassName}>
            <input type="checkbox" checked={checked} />
            <span className="checkmark"></span>
        </label>
    );
};

export default CheckBox;
