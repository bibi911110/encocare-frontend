import { Outlet } from 'react-router-dom';
import Header from '../../components/layout/Header/Header';
import Footer from '../../components/layout/Footer/Footer';
import Navbar from '../../components/layout/Navbar/Navbar';
import './BasicLayout.scss';

const BasicLayout = () => {
    return (
        <>
            <div className="fixed-header">
                <Header />
                <Navbar />
            </div>
            <div className="main-content">
                <Outlet />
                <Footer />
            </div>
        </>
    );
};

export default BasicLayout;
