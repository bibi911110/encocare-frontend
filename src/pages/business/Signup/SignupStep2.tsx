import Button from '../../../components/common/Button/Button';
import Select from '../../../components/common/Select/Select';
import Dropzone from '../../../components/common/Dropzone/Dropzone';
import NormalInput from '../../../components/common/NormalInput/NormalInput';
import TextArea from '../../../components/common/TextArea/TextArea';
import { StepPropsType } from '../../../types/basicComponents';

const SignupStep2 = ({ handlePrevStep }: StepPropsType) => {
    const selectOptions = [''];

    return (
        <>
            <p>Just a few more details about your business!</p>
            <form className="step2-form">
                <div className="main-form">
                    <div className="input-wrapper">
                        <NormalInput placeHolder="Business Name" />
                        <NormalInput placeHolder="Business Address" />
                        <Select options={selectOptions} placeHolder="Country of Operations" />
                        <TextArea placeHolder="Add a description about your business" rows={4} />
                    </div>
                    <Dropzone />
                </div>
                <Button title="Create Business Account" type="primary" onClick={handlePrevStep} arrow />
            </form>
            <p className="policy">
                By signing up you agree to Encocare <span>terms & conditions</span> and privacy policy.
            </p>
        </>
    );
};

export default SignupStep2;
