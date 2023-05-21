import { Outlet } from 'react-router-dom';
import Header from '../../components/layout/Header/Header';
import Navbar from '../../components/layout/Navbar/Navbar';
import './TestLayout.scss';

const TestLayout = () => {
    return (
        <>
            <header data-layout="test">
                <Header />
                <Navbar />
            </header>
            <main data-layout="test">
                <Outlet />
            </main>
        </>
    );
};

export default TestLayout;
