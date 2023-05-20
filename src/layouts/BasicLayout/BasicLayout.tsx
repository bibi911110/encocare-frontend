import { Outlet } from 'react-router-dom';
import Header from '../../components/layout/Header/Header';
import Footer from '../../components/layout/Footer/Footer';
import Navbar from '../../components/layout/Navbar/Navbar';
import BottomDialog from '../../components/common/BottomDialog/BottomDialog';
import './BasicLayout.scss';

const BasicLayout = () => {
    return (
        <>
            <header data-layout="base">
                <Header />
                <Navbar />
            </header>
            <main data-layout="base">
                <Outlet />
            </main>
            <BottomDialog />
            <Footer />
        </>
    );
};

export default BasicLayout;
