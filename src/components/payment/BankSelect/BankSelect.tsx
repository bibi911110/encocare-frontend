import SearchInput from '../../common/SearchInput/SearchInput';
import { leftArrowIcon2 } from '../../../assets/icons/common';
import bankImage1 from '../../../assets/images/bank/1.png';
import bankImage2 from '../../../assets/images/bank/2.png';
import bankImage3 from '../../../assets/images/bank/3.png';
import bankImage4 from '../../../assets/images/bank/4.png';
import bankImage5 from '../../../assets/images/bank/5.png';
import bankImage6 from '../../../assets/images/bank/6.png';
import './BankSelect.scss';

const banks = [
    {
        title: 'Bank of Scotland',
        logo: bankImage1,
    },
    {
        title: 'HSBC Bank',
        logo: bankImage2,
    },
    {
        title: 'NatWest',
        logo: bankImage3,
    },
    {
        title: 'Santander',
        logo: bankImage4,
    },
    {
        title: 'Monzo',
        logo: bankImage5,
    },
    {
        title: 'Starling Bank',
        logo: bankImage6,
    },
    {
        title: 'Bank of Test',
        logo: bankImage1,
    },
    {
        title: 'TEST Bank',
        logo: bankImage2,
    },
];

const BankSelect = () => {
    return (
        <div className="bank-select">
            <h2>
                <span>{leftArrowIcon2}</span>Select your bank
            </h2>
            <SearchInput placeHolder="Search a bank" />
            <div className="bank-select-list">
                {banks.map((item) => (
                    <div className="bank-item" key={item.title}>
                        <img src={item.logo} alt="" />
                        <span>{item.title}</span>
                    </div>
                ))}
            </div>
            <p>Don't see your bank?</p>
        </div>
    );
};

export default BankSelect;
