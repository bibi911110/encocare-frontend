import linkImage1 from '../../../assets/images/link/1.png';
import linkImage2 from '../../../assets/images/link/2.png';
import { checkCircleIcon, copyIcon2, leftArrowIcon2, linkIcon, plusIcon } from '../../../assets/icons/common';
import './ShareLink.scss';
import NormalInput from '../../../components/common/NormalInput/NormalInput';
import Button from '../../../components/common/Button/Button';
import { copyIcon } from '../../../assets/icons/common';

const ShareLink = () => {
    return (
        <div className="share-link">
            <div className="main-header">
                <div className="title-wrapper">
                    <h1>
                        <span>{leftArrowIcon2}</span>Share referral link
                    </h1>
                </div>
            </div>
            <div className="main-content">
                <div className="card left-card">
                    <img src={linkImage1} alt="" />
                    <h1>Enter email to share referral link</h1>
                    <p>Enter email address to send Test Referral link to patients!</p>

                    <div className="input-wrapper">
                        <NormalInput placeHolder="Email Address" />
                        <NormalInput placeHolder="Email Address" />
                    </div>
                    <p className="link-text">
                        <span>{plusIcon} Add another email</span>
                    </p>
                    <Button title="Send Referral Email" type="primary" />
                </div>
                <div className="card right-card">
                    <img src={linkImage2} alt="" />
                    <h1>Share via link</h1>
                    <p>Share the link below to send patient yoru referral test link</p>

                    <div className="input-wrapper">
                        <span>{linkIcon}</span>
                        <NormalInput placeHolder="Share Link Address" />
                        <Button title="&nbsp;&nbsp;&nbsp;Copy Link" type="primary" icon={copyIcon2} />
                    </div>
                    <Button title="&nbsp;&nbsp;&nbsp;Link Copied" type="green" icon={checkCircleIcon} />
                </div>
            </div>
        </div>
    );
};

export default ShareLink;
