import { Outlet } from 'react-router-dom';
import Header from '../../components/layout/Header/Header';
import Navbar from '../../components/layout/Navbar/Navbar';
import Sidebar from '../../components/layout/Sidebar/Sidebar';
import './BusinessLayout.scss';

const BusinessLayout = () => {
    return (
        <>
            <header data-layout="business">
                <Header />
                <Navbar mode="admin" />
            </header>
            <main data-layout="business">
                <Sidebar type="business" />
                <div className="main-content">
                    <Outlet />
                </div>
            </main>
        </>
    );
};

export default BusinessLayout;
