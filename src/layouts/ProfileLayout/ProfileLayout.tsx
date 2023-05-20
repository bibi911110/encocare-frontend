import { Outlet } from 'react-router-dom';
import Header from '../../components/layout/Header/Header';
import Footer from '../../components/layout/Footer/Footer';
import Navbar from '../../components/layout/Navbar/Navbar';
import Profile from '../../components/layout/Profile/Profile';
import './ProfileLayout.scss';

const ProfileLayout = () => {
    return (
        <>
            <header data-layout="profile">
                <Header />
                <Navbar />
            </header>
            <main data-layout="profile">
                <Profile />
                <div className="main-content">
                    <Outlet />
                </div>
            </main>
            <Footer />
        </>
    );
};

export default ProfileLayout;