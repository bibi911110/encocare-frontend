import { rightArrowIcon2 } from '../../../assets/icons/common';
import { ButtonPropsType } from '../../../types/basicComponents';
import './Button.scss';

const Button = ({ title, type, icon, arrow, className, buttonType, onClick, ...props }: ButtonPropsType) => {
    let buttonContent;
    let buttonClassName = `button button-${type}`;

    if (className) {
        buttonClassName += ` ${className}`;
    }

    if (icon) {
        buttonContent = (
            <>
                <span className="button-icon">{icon}</span>
                {title}
            </>
        );
    } else if (arrow) {
        buttonContent = (
            <>
                {title}
                <span className="button-arrow-icon">{rightArrowIcon2}</span>
            </>
        );
    } else {
        buttonContent = <>{title}</>;
    }

    return (
        <button className={buttonClassName} {...props} type={buttonType} onClick={onClick}>
            <div className="button-content">{buttonContent}</div>
        </button>
    );
};

export default Button;
