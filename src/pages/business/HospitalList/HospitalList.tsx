import Button from '../../../components/common/Button/Button';
import Table from '../../../components/common/Table/Table';
import CheckBox from '../../../components/common/CheckBox/CheckBox';
import SearchInput from '../../../components/common/SearchInput/SearchInput';
import { HospitalTableCardPropsType } from '../../../types/tableComponent';
import { crossCircleIcon, eyeIcon, filterIcon, leftArrowIcon2 } from '../../../assets/icons/common';
import { plusCircleIcon } from '../../../assets/icons/sidebar';
import hospitalImage from '../../../assets/images/hospital.png';
import './HospitalList.scss';

const columns = [
    {
        key: 'name',
        title: 'Hospital Name/ID',
    },
    {
        key: 'admin',
        title: 'Hospital Admin',
    },
    {
        key: 'address',
        title: 'Hospital Address',
        width: '240px',
    },
    {
        key: 'contact',
        title: 'Hospital Contact',
    },
    {
        key: 'date',
        title: 'Onboard Date',
    },
    {
        key: 'action',
        title: 'Action',
        center: true,
    },
];

const source = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => {
    return {
        key: item,
        name: 'Schultz Group',
        id: 57109746,
        admin: 'Sonja Kassulke',
        address: '6741 Keyshawn Squares, Timothytown, MD, MQ',
        email: 'Francisco.Aufderhar@yahoo.com',
        contact: '222-961-0132 x86110',
        date: 'November 15, 2022',
        logo: hospitalImage,
    };
});

const rows = source.map((item) => {
    return {
        key: item.key,
        name: (
            <div className="hospital-name-id">
                <img src={item.logo} alt="" />
                <div className="title-wrapper">
                    <p className="table-text-primary">{item.name}</p>
                    <p className="table-text-second">{item.id}</p>
                </div>
            </div>
        ),
        admin: (
            <div className="hospital-admin">
                <p className="table-text-primary">{item.admin}</p>
                <p className="table-text-second">{item.email}</p>
            </div>
        ),
        address: <p className="hospital-address table-text-second">{item.address}</p>,
        contact: (
            <div className="hospital-contact">
                <p className="table-text-primary">{item.email}</p>
                <p className="table-text-second">{item.contact}</p>
            </div>
        ),
        date: item.date,
        action: (
            <div className="hospital-action">
                <span>{eyeIcon}</span>
                <div className="vertical-divider" />
                <span>{crossCircleIcon}</span>
            </div>
        ),
    };
});

const TableMobileCard = ({ id, name, address, admin, date, email, contact }: HospitalTableCardPropsType) => {
    return (
        <div className="hospital-table-mobile-card">
            <div className="first-section">
                <div className="hospital-name-id">
                    <p className="table-text-second">HOSPITAL Name/ID</p>
                    <p className="table-text-primary">{name}</p>
                    <p className="table-text-second">{id}</p>
                </div>
                <div className="hospital-date">
                    <p className="table-text-second">ONBOARD DATE</p>
                    <p className="table-text-primary">{'15/03/2022'}</p>
                </div>
            </div>
            <div className="second-section">
                <p className="table-text-second">HOSPITAL ADDRESS</p>
                <p className="table-text-primary">{address}</p>
            </div>
            <div className="third-section">
                <div className="hospital-admin">
                    <p className="table-text-second">HOSPITAL ADMIN</p>
                    <p className="table-text-primary">{admin}</p>
                </div>
                <div className="hospital-contact">
                    <p className="table-text-second">HOSPITAL CONTACT</p>
                    <p className="table-text-primary">{email}</p>
                    <p className="table-text-second">{contact}</p>
                </div>
            </div>
            <div className="remove">Delete</div>
        </div>
    );
};

const HospitalList = () => {
    return (
        <div className="hospital-list">
            <div className="main-header">
                <div>
                    <span>{leftArrowIcon2}</span>Hospital
                </div>
                <Button title="&nbsp;&nbsp;Add Hospital" type="primary" icon={plusCircleIcon} />
            </div>
            <div className="card">
                <div className="search-wrapper">
                    <SearchInput placeHolder="Search for a hospital ID/Name etc" />
                    <Button title="&nbsp;&nbsp;Add Hospital" type="primary" icon={plusCircleIcon} />
                    <span className="mobile-filter">{filterIcon}</span>
                </div>
                <div className="filter-wrapper">
                    <div className="check-wrapper">
                        <div className="check-item active">
                            <CheckBox checked readonly />
                            <span>All</span>
                        </div>
                    </div>
                    <div className="advanced-filter">
                        <span>{filterIcon}</span>
                        Advanced Filter
                    </div>
                </div>
                <Table
                    columns={columns}
                    rows={rows}
                    source={source}
                    filter="date"
                    checked
                    mobileComponent={TableMobileCard}
                />
            </div>
        </div>
    );
};

export default HospitalList;
