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
import EntityTestResult from './pages/admin/EntityTestResult/EntityTestResult';
import IndividualLayout from './layouts/IndividualLayout/IndividualLayout';
import IndividualDashboard from './pages/individual/Dashboard/IndividualDashboard';
import IndividualLogin from './pages/individual/Login/IndividualLogin';
import PatientList from './pages/individual/PatientList/PatientList';
import PatientDetail from './pages/individual/PatientDetail/PatientDetail';
import ShareLink from './pages/individual/ShareLink/ShareLink';
import IndividualSecuritySetting from './pages/individual/SecuritySetting/IndividualSecuritySetting';
import BusinessLayout from './layouts/BusinessLayout/BusinessLayout';
import BusinessDashboard from './pages/business/Dashboard/BusinessDashboard';
import HospitalList from './pages/business/HospitalList/HospitalList';
import AddHospital from './pages/business/AddHospital/AddHospital';
import HospitalDetail from './pages/business/HospitalDetail/HospitalDetail';
import DoctorList from './pages/business/DoctorList/DoctorList';
import AddDoctor from './pages/business/AddDoctor/AddDoctor';
import DoctorDetail from './pages/business/DoctorDetail/DoctorDetail';
import AddTeamMember from './pages/business/AddTeamMember/AddTeamMember';
import BusinessSecuritySetting from './pages/business/SecuritySetting/BusinessSecuritySetting';
import MembershipList from './pages/business/MembershipList/MembershipList';
import CurrentMembership from './pages/business/CurrentMembership/CurrentMembership';

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
            { path: 'entity/detail/:id/test-result', element: <EntityTestResult /> },
        ],
    },
    {
        path: 'individual',
        element: <IndividualLayout />,
        children: [
            { path: 'dashboard', element: <IndividualDashboard /> },
            { path: 'patient', element: <PatientList /> },
            { path: 'patient/detail/:id', element: <PatientDetail /> },
            { path: 'share-link', element: <ShareLink /> },
            { path: 'security-setting', element: <IndividualSecuritySetting /> },
        ],
    },
    {
        path: 'business',
        element: <BusinessLayout />,
        children: [
            { path: 'dashboard', element: <BusinessDashboard /> },
            { path: 'hospital', element: <HospitalList /> },
            { path: 'hospital/add', element: <AddHospital /> },
            { path: 'hospital/detail/:id', element: <HospitalDetail /> },
            { path: 'doctor', element: <DoctorList /> },
            { path: 'doctor/add', element: <AddDoctor /> },
            { path: 'doctor/detail/:id', element: <DoctorDetail /> },
            { path: 'member/add', element: <AddTeamMember /> },
            { path: 'security-setting', element: <BusinessSecuritySetting /> },
            { path: 'membership/list', element: <MembershipList /> },
            { path: 'membership', element: <CurrentMembership /> },
        ],
    },
]);

export default router;
