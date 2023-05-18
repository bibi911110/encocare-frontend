import { facebookButtonIcon, googleButtonIcon, twitterButtonIcon } from '../../../assets/icons/social';
import { SocialButtonPropsType } from '../../../types/basicComponents';
import './SocialButton.scss';

const SocialButton = ({ type }: SocialButtonPropsType) => {
    let buttonClassName = `social-button social-${type}`;
    let buttonContent;

    if (type == 'facebook') {
        buttonContent = (
            <>
                {facebookButtonIcon}
                <span>Sign up using Facebook</span>
            </>
        );
    } else if (type == 'google') {
        buttonContent = (
            <>
                {googleButtonIcon}
                <span>Sign up using Google</span>
            </>
        );
    } else if (type == 'twitter') {
        buttonContent = (
            <>
                {twitterButtonIcon}
                <span>Sign up using Twitter</span>
            </>
        );
    }

    return <button className={buttonClassName}>{buttonContent}</button>;
};

export default SocialButton;
