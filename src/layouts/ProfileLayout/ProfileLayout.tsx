import { useLocation, Outlet } from 'react-router-dom';
import Header from '../../components/layout/Header/Header';
import Navbar from '../../components/layout/Navbar/Navbar';
import Profile from '../../components/layout/Profile/Profile';
import BottomDialog from '../../components/common/BottomDialog/BottomDialog';
import './ProfileLayout.scss';

const ProfileLayout = () => {
    const location = useLocation();

    const isTestHistory = location.pathname === '/profile/test-history';

    return (
        <>
            <header data-layout="profile">
                <Header />
                <Navbar mode="user" />
            </header>
            <main data-layout="profile">
                <Profile isTestHistory={isTestHistory} />
                <div className="main-content">
                    <Outlet />
                </div>
            </main>
            <BottomDialog />
        </>
    );
};

export default ProfileLayout;
