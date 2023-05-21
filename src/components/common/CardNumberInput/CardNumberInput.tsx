import { NormalInputPropsType } from '../../../types/basicComponents';
import cardImage from '../../../assets/images/payments/card.png';
import './CardNumberInput.scss';

const CardNumberInput = ({ placeHolder, className, ...props }: NormalInputPropsType) => {
    const inputClassName = className ? `card-number-input ${className}` : 'card-number-input';

    return (
        <div className={inputClassName}>
            <input placeholder={placeHolder} {...props} />
            <img src={cardImage} alt="" />
        </div>
    );
};

export default CardNumberInput;
