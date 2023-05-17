import { NormalInputPropsType } from '../../../types/basicComponents';
import './NormalInput.scss';

const NormalInput = ({ placeHolder, className, ...props }: NormalInputPropsType) => {
    const inputClassName = className ? `normal-input ${className}` : 'normal-input';

    return <input placeholder={placeHolder} className={inputClassName} {...props} />;
};

export default NormalInput;
