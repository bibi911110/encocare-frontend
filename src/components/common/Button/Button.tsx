import { rightArrowIcon } from '../../../assets/icons/common';
import { ButtonPropsType } from '../../../types/basicComponents';
import './Button.scss';

const Button = ({ title, width, type, icon, ...props }: ButtonPropsType) => {
    let buttonContent;
    let buttonClassName = `button button-${type}`;

    if (icon) {
        buttonContent = (
            <>
                <span className="button-icon">{icon}</span>
                {title}
            </>
        );
    } else if (type == 'arrow') {
        buttonContent = (
            <>
                {title}
                <span className="button-arrow-icon">{rightArrowIcon}</span>
            </>
        );
    } else {
        buttonContent = <>{title}</>;
    }

    return (
        <button className={buttonClassName} style={{ width }} {...props}>
            {buttonContent}
        </button>
    );
};

export default Button;
