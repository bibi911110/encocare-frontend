import { createBrowserRouter } from 'react-router-dom';

import BasicLayout from './layouts/BasicLayout/BasicLayout';
import ProfileLayout from './layouts/ProfileLayout/ProfileLayout';
import TestLayout from './layouts/TestLayout/TestLayout';
import AdminLayout from './layouts/AdminLayout/AdminLayout';

import Home from './pages/common/Home/Home';
import Signup from './pages/common/Signup/Signup';
import Login from './pages/common/Login/Login';
import ForgetPassword from './pages/common/ForgetPassword/ForgetPassword';
import SetPassword from './pages/common/SetPassword/SetPassword';
import SupportUs from './pages/common/SupportUs/SupportUs';
import Donate from './pages/common/Donate/Donate';
import Thanks from './pages/common/Thanks/Thanks';
import BusinessSignup from './pages/business/Signup/BusinessSignup';
import BusinessLogin from './pages/business/Login/BusinessLogin';
import AdminLogin from './pages/admin/Login/AdminLogin';
import IndividualLogin from './pages/Individual/Login/IndividualLogin';
import Dashboard from './pages/profile/Dashboard/Dashboard';
import TestHistory from './pages/profile/TestHistory/TestHistory';
import Membership from './pages/profile/Membership/Membership';
import Payment from './pages/profile/Payment/Payment';
import PaymentSuccess from './pages/profile/PaymentSuccess/PaymentSuccess';
import TestAgree from './pages/test/TestAgree/TestAgree';
import TestProgress from './pages/test/TestProgress/TestProgress';
import AdminDashboard from './pages/admin/Dashboard/AdminDashboard';
import NotFound from './pages/common/NotFound/NotFound';
import EntityList from './pages/admin/EntityList/EntityList';
import AddEntity from './pages/admin/AddEntity/AddEntity';
import EntityDetail from './pages/admin/EntityDetail/EntityDetail';

const router = createBrowserRouter([
    {
        path: '/',
        element: <BasicLayout />,
        children: [
            { index: true, element: <Home /> },
            { path: 'signup', element: <Signup /> },
            { path: 'signup-business', element: <BusinessSignup /> },
            { path: 'login', element: <Login /> },
            { path: 'login-business', element: <BusinessLogin /> },
            { path: 'login-admin', element: <AdminLogin /> },
            { path: 'login-individual', element: <IndividualLogin /> },
            { path: 'forget-password', element: <ForgetPassword /> },
            { path: 'set-password', element: <SetPassword /> },
            { path: 'support-us', element: <SupportUs /> },
            { path: 'donate', element: <Donate /> },
            { path: 'thanks', element: <Thanks /> },
            { path: '*', element: <NotFound /> },
        ],
    },
    {
        path: 'profile',
        element: <ProfileLayout />,
        children: [
            { path: 'dashboard', element: <Dashboard /> },
            { path: 'test-history', element: <TestHistory /> },
            { path: 'membership', element: <Membership /> },
            { path: 'membership/payment', element: <Payment /> },
            { path: 'membership/payment/success', element: <PaymentSuccess /> },
        ],
    },
    {
        path: 'test',
        element: <TestLayout />,
        children: [
            { path: 'agree', element: <TestAgree /> },
            { path: 'progress', element: <TestProgress /> },
        ],
    },
    {
        path: 'admin',
        element: <AdminLayout />,
        children: [
            { path: 'dashboard', element: <AdminDashboard /> },
            { path: 'entity/add', element: <AddEntity /> },
            { path: 'entity/:sortType', element: <EntityList /> },
            { path: 'entity/detail/:id', element: <EntityDetail /> },
        ],
    },
]);

export default router;
