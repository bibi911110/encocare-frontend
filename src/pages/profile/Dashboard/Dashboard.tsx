import { filterIcon, sortIcon } from '../../../assets/icons/common';
import Button from '../../../components/common/Button/Button';
import SearchInput from '../../../components/common/SearchInput/SearchInput';
import TestResultCard from '../../../components/profile/TestResultCard/TestResultCard';
import './Dashboard.scss';

// this is test data
const data = {
    id: '1234DHGS',
    name: 'Salman Altaf',
    date: 'July 12, 2022  |  05:00 PM',
    result: 'Positive',
    type: 'Self Conducted',
    link: '/profile/test-history',
};

const Dashboard = () => {
    return (
        <div className="profile-dashboard">
            <div className="dashboard-header">
                <div className="title-wrapper">
                    <h1>Welcome to Encocare</h1>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing </p>
                </div>
                <Button title="Take a Test" type="primary" />
            </div>

            <div className="dashboard-content">
                <div className="search-wrapper">
                    <div className="title-wrapper">
                        <h2>Test History</h2>
                        <p>These are your recent test with Encocare!</p>
                    </div>
                    <SearchInput placeHolder="Search for a test" />
                </div>
                <div className="filter-wrapper">
                    <div className="filter-item">
                        <span>{filterIcon}</span>
                        Advanced Filters
                    </div>
                    <div className="filter-item">
                        <span>{sortIcon}</span>
                        Sort
                    </div>
                </div>
                <div className="test-card-wrapper">
                    {[0, 1, 2, 3, 4, 5, 6, 7].map((item) => (
                        <TestResultCard
                            key={item}
                            id={data.id}
                            name={data.name}
                            date={data.date}
                            result={data.result}
                            type={data.type}
                            link={data.link}
                        />
                    ))}
                </div>
            </div>

            <div className="mobile-test-button">
                <Button title="Take a Test" type="primary" />
            </div>

            <div className="support-link">
                <p>
                    Have a problem? Contact <span>Customer Support Team</span>
                </p>
            </div>
        </div>
    );
};

export default Dashboard;
