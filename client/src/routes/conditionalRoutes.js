import { Routes, Route } from 'react-router-dom'

import UserNavBar from '../components/users/navigation/userNavBar'

import Home from '../pages/users/01-home'
import Services from '../pages/users/03-services'
import AboutUs from '../pages/users/02-aboutUs'
import ContactUs from '../pages/users/04-contactUs'
import AdminSignUpPage from '../pages/admin/auth/01-adminSignUpPage'
import AdminLoginPage from '../pages/admin/auth/02-adminLoginPage'
import { useSelector } from 'react-redux'
import AdminDashboard from '../pages/admin/01-admin-dashboard'
import AdminNavBar from '../components/admin/navigation/adminNavBar'

function ConditionalRoutes() {

    const { userRole } = useSelector(state => state.user)

    if (userRole === 'admin') {
        return <AdminRoutes />
    } else {
        return <UserRoutes />
    }
}

const UserRoutes = () => {
    return (
        <>
            <UserNavBar />
            <Routes>
                <Route path='/admin-signup' element={<AdminSignUpPage />} />
                <Route path='/admin-login' element={<AdminLoginPage />} />

                <Route path='/' element={<Home />} />
                <Route path='/services' element={<Services />} />
                <Route path='/about-us' element={<AboutUs />} />
                <Route path='/contact-us' element={<ContactUs />} />
            </Routes>
        </>
    )
}

const AdminRoutes = () => {
    return (
        <>
            <AdminNavBar />
            <Routes>
                <Route path='/' element={<AdminDashboard />} />
            </Routes>
        </>
    )
}

export default ConditionalRoutes