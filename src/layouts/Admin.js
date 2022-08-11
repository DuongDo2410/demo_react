import React from 'react'
import Header from '../components/admin/Header'
import Sidebar from '../components/admin/Sidebar'

const LayoutAdmin = ({ children }) => {
    return (
        <div className="Dashboard ">
            <Sidebar />
            <main className="bg-gray-100">
                <Header />
                <div className="bg-white ml-12 my-10 w-11/12 ">
                    {children}
                </div>
            </main>
        </div>
    )
}

export default LayoutAdmin