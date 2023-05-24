import Button from '../../../components/common/Button/Button';
import SearchInput from '../../../components/common/SearchInput/SearchInput';
import Table from '../../../components/common/Table/Table';
import { DoctorTableCardPropsType } from '../../../types/tableComponent';
import { plusCircleIcon } from '../../../assets/icons/sidebar';
import { crossCircleIcon, eyeIcon, filterIcon, leftArrowIcon2 } from '../../../assets/icons/common';
import doctorImage from '../../../assets/images/doctor.png';
import './DoctorList.scss';

const columns = [
    {
        key: 'name',
        title: 'Doctor Name/ID',
    },
    {
        key: 'admin',
        title: 'Doctor Admin',
    },
    {
        key: 'address',
        title: 'Doctor Address',
        width: '240px',
    },
    {
        key: 'contact',
        title: 'Doctor Contact',
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
        logo: doctorImage,
    };
});

const rows = source.map((item) => {
    return {
        key: item.key,
        name: (
            <div className="doctor-name-id">
                <img src={item.logo} alt="" />
                <div className="title-wrapper">
                    <p className="table-text-primary">{item.name}</p>
                    <p className="table-text-second">{item.id}</p>
                </div>
            </div>
        ),
        admin: (
            <div className="doctor-admin">
                <p className="table-text-primary">{item.admin}</p>
                <p className="table-text-second">{item.email}</p>
            </div>
        ),
        address: <p className="doctor-address table-text-second">{item.address}</p>,
        contact: (
            <div className="doctor-contact">
                <p className="table-text-primary">{item.email}</p>
                <p className="table-text-second">{item.contact}</p>
            </div>
        ),
        date: item.date,
        action: (
            <div className="doctor-action">
                <span>{eyeIcon}</span>
                <div className="vertical-divider" />
                <span>{crossCircleIcon}</span>
            </div>
        ),
    };
});

const TableMobileCard = ({ id, name, address, admin, date, email, contact }: DoctorTableCardPropsType) => {
    return (
        <div className="doctor-table-mobile-card">
            <div className="first-section">
                <div className="doctor-avatar">
                    <p className="table-text-second">DOCTOR</p>
                    <img src={doctorImage} alt="" />
                </div>
                <div className="doctor-name-id">
                    <p className="table-text-second">HOSPITAL Name/ID</p>
                    <p className="table-text-primary">{name}</p>
                    <p className="table-text-second">{id}</p>
                </div>
                <div className="doctor-date">
                    <p className="table-text-second">ONBOARD DATE</p>
                    <p className="table-text-primary">{'15/03/2022'}</p>
                </div>
            </div>
            <div className="second-section">
                <p className="table-text-second">HOSPITAL ADDRESS</p>
                <p className="table-text-primary">{address}</p>
            </div>
            <div className="third-section">
                <div className="doctor-admin">
                    <p className="table-text-second">HOSPITAL ADMIN</p>
                    <p className="table-text-primary">{admin}</p>
                </div>
                <div className="doctor-contact">
                    <p className="table-text-second">HOSPITAL CONTACT</p>
                    <p className="table-text-primary">{email}</p>
                    <p className="table-text-second">{contact}</p>
                </div>
            </div>
            <div className="remove">Delete</div>
        </div>
    );
};

const DoctorList = () => {
    return (
        <div className="doctor-list">
            <div className="main-header">
                <div className="title-wrapper">
                    <h1>
                        <span>{leftArrowIcon2}</span> All Doctors
                    </h1>
                    <p>All doctors onboard by the corporate admin will be shown here</p>
                </div>
                <Button title="&nbsp;&nbsp;Add Doctor" type="primary" icon={plusCircleIcon} />
            </div>
            <div className="card">
                <div className="search-wrapper">
                    <SearchInput placeHolder="Search for a doctor ID/Name etc" />
                    <div className="advanced-filter">
                        <span>{filterIcon}</span>
                        Advanced Filter
                    </div>
                    <span className="mobile-filter">{filterIcon}</span>
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

export default DoctorList;
