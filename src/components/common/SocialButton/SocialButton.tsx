import { facebookButtonIcon, googleButtonIcon, twitterButtonIcon } from '../../../assets/icons/social';
import { SocialButtonPropsType } from '../../../types/basicComponents';
import './SocialButton.scss';

const SocialButton = ({ type, authType }: SocialButtonPropsType) => {
    let buttonClassName = `social-button social-${type}`;
    let buttonContent;

    let buttonTitle;
    if (authType == 'signup') {
        buttonTitle = `Sign up using ${type.charAt(0).toUpperCase()}${type.slice(1)}`;
    } else if (authType == 'login') {
        buttonTitle = `Login using ${type.charAt(0).toUpperCase()}${type.slice(1)}`;
    }

    if (type == 'facebook') {
        buttonContent = (
            <>
                {facebookButtonIcon}
                <span>{buttonTitle}</span>
            </>
        );
    } else if (type == 'google') {
        buttonContent = (
            <>
                {googleButtonIcon}
                <span>{buttonTitle}</span>
            </>
        );
    } else if (type == 'twitter') {
        buttonContent = (
            <>
                {twitterButtonIcon}
                <span>{buttonTitle}</span>
            </>
        );
    }

    return <button className={buttonClassName}>{buttonContent}</button>;
};

export default SocialButton;
