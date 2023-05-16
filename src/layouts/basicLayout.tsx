import { Outlet } from 'react-router-dom';
import Header from '../components/layout/Header/Header';
import Footer from '../components/layout/Footer/Footer';
import Navbar from '../components/layout/Navbar/Navbar';

const BasicLayout = () => {
    return (
        <>
            <Header />
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
};

export default BasicLayout;
