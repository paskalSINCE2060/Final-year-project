import React from 'react'
import ServicesGrid from '../../components/admin/dashboard-components/editServicesGrid'
import CreateService from '../../components/admin/dashboard-components/createService'
import EditServicesGrid from '../../components/admin/dashboard-components/editServicesGrid'

function AdminDashboard() {
    return (
        <div>
            <EditServicesGrid />
            <CreateService />
        </div>
    )
}

export default AdminDashboard