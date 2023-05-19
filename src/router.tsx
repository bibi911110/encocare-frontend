import { createBrowserRouter } from 'react-router-dom';
import BasicLayout from './layouts/BasicLayout/BasicLayout';
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
import AdminLogin from './pages/admin/AdminLogin/AdminLogin';

const router = createBrowserRouter([
    {
        path: '/',
        element: <BasicLayout />,
        children: [
            { path: '', element: <Home /> },
            { path: 'signup', element: <Signup /> },
            { path: 'signup-business', element: <BusinessSignup /> },
            { path: 'login', element: <Login /> },
            { path: 'login-business', element: <BusinessLogin /> },
            { path: 'login-admin', element: <AdminLogin /> },
            { path: 'forget-password', element: <ForgetPassword /> },
            { path: 'set-password', element: <SetPassword /> },
            { path: 'support-us', element: <SupportUs /> },
            { path: 'donate', element: <Donate /> },
            { path: 'thanks', element: <Thanks /> },
        ],
    },
]);

export default router;
