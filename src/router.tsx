import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/common/Home/Home';
import Signup from './pages/common/Signup/Signup';
import Login from './pages/common/Login/Login';
import BasicLayout from './layouts/BasicLayout/BasicLayout';

const router = createBrowserRouter([
    {
        path: '/',
        element: <BasicLayout />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/signup', element: <Signup /> },
            { path: '/login', element: <Login /> },
        ],
    },
]);

export default router;
