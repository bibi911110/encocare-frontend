import { Outlet } from 'react-router-dom';
import Header from '../../components/layout/Header/Header';
import Navbar from '../../components/layout/Navbar/Navbar';
import Sidebar from '../../components/layout/Sidebar/Sidebar';
import './IndividualLayout.scss';

const IndividualLayout = () => {
    return (
        <>
            <header data-layout="individual">
                <Header />
                <Navbar mode="admin" />
            </header>
            <main data-layout="individual">
                <Sidebar type="individual" />
                <div className="main-content">
                    <Outlet />
                </div>
            </main>
        </>
    );
};

export default IndividualLayout;
