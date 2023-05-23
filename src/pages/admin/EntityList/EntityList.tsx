import Button from '../../../components/common/Button/Button';
import SearchInput from '../../../components/common/SearchInput/SearchInput';
import { plusCircleIcon } from '../../../assets/icons/sidebar';
import './EntityList.scss';
import CheckBox from '../../../components/common/CheckBox/CheckBox';
import { crossCircleIcon, eyeIcon, filterIcon, leftArrowIcon2 } from '../../../assets/icons/common';
import Table from '../../../components/common/Table/Table';
import { EntityTableCardPropsType } from '../../../types/tableComponent';

const columns = [
    {
        key: 'name',
        title: 'Entity Name/ID',
    },
    {
        key: 'type',
        title: 'Entity TYPE',
    },
    {
        key: 'admin',
        title: 'Entity Admin',
    },
    {
        key: 'address',
        title: 'Entity Address',
        width: '240px',
    },
    {
        key: 'contact',
        title: 'Entity Contact',
    },
    {
        key: 'date',
        title: 'Onboard Date',
    },
    {
        key: 'action',
        title: 'Action',
    },
];

const source = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => {
    return {
        key: item,
        name: 'Schultz Group',
        id: 57109746,
        type: 'Laboratory',
        admin: 'Sonja Kassulke',
        address: '6741 Keyshawn Squares, Timothytown, MD, MQ',
        email: 'Francisco.Aufderhar@yahoo.com',
        contact: '222-961-0132 x86110',
        date: 'November 15, 2022',
    };
});

const rows = source.map((item) => {
    return {
        key: item.key,
        name: (
            <div className="entity-name-id">
                <p className="table-text-primary">{item.name}</p>
                <p className="table-text-second">{item.id}</p>
            </div>
        ),
        type: <span className="table-text-second">{item.type}</span>,
        admin: <span className="table-text-primary">{item.admin}</span>,
        address: <p className="entity-address table-text-second">{item.address}</p>,
        contact: (
            <div className="entity-contact">
                <p className="table-text-primary">{item.email}</p>
                <p className="table-text-second">{item.contact}</p>
            </div>
        ),
        date: item.date,
        action: (
            <div className="entity-action">
                <span>{eyeIcon}</span>
                <div className="vertical-divider" />
                <span>{crossCircleIcon}</span>
            </div>
        ),
    };
});

const TableMobileCard = ({ id, name, date, type, address, admin, email, contact }: EntityTableCardPropsType) => {
    return (
        <div className="entity-table-mobile-card">
            <div className="first-section">
                <div className="entity-name-id">
                    <p className="table-text-second">Entity Name/ID</p>
                    <p className="table-text-primary">{name}</p>
                    <p className="table-text-second">{id}</p>
                </div>
                <div className="entity-date">
                    <p className="table-text-second">Entity Name/ID</p>
                    <p className="table-text-primary">{date}</p>
                </div>
                <div className="entity-type">
                    <p className="table-text-second">Entity TYPE</p>
                    <p className="table-text-primary">{type}</p>
                </div>
            </div>
            <div className="second-section">
                <p className="table-text-second">Entity ADDRESS</p>
                <p className="table-text-primary">{address}</p>
            </div>
            <div className="third-section">
                <div className="entity-admin">
                    <p className="table-text-second">Entity ADMIN</p>
                    <p className="table-text-primary">{admin}</p>
                </div>
                <div className="entity-contact">
                    <p className="table-text-second">Entity CONTACT</p>
                    <p className="table-text-primary">{email}</p>
                    <p className="table-text-second">{contact}</p>
                </div>
            </div>
            <div className="remove">Delete</div>
        </div>
    );
};

const EntityList = () => {
    return (
        <div className="entity-list">
            <div className="main-header">
                <div>
                    <span>{leftArrowIcon2}</span>Your Entities
                </div>
                <Button title="&nbsp;&nbsp;Add Entity" type="primary" icon={plusCircleIcon} />
            </div>
            <div className="card">
                <div className="search-wrapper">
                    <SearchInput placeHolder="Search for a entity ID/Name etc" />
                    <Button title="&nbsp;&nbsp;Add Entity" type="primary" icon={plusCircleIcon} />
                </div>
                <div className="filter-wrapper">
                    <div className="check-wrapper">
                        <div className="check-item active">
                            <CheckBox checked readonly />
                            <span>All</span>
                        </div>
                        <div className="check-item">
                            <CheckBox />
                            <span>Governments</span>
                        </div>
                        <div className="check-item">
                            <CheckBox />
                            <span>Hospitals</span>
                        </div>
                        <div className="check-item">
                            <CheckBox />
                            <span>Laboratory</span>
                        </div>
                        <div className="check-item">
                            <CheckBox />
                            <span>Doctors</span>
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

export default EntityList;
