import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className=" px-3 bg-232323 text-gray-50 ">
            <section className="flex justify-center my-5 py-5">
                <NavLink to="/">
                    <img className src="https://firebasestorage.googleapis.com/v0/b/shop-11594.appspot.com/o/image%2Flogo-footer.png?alt=media&token=51b1e02c-bc87-4737-bef0-d338c1f72668" alt />
                </NavLink>
            </section>
            <ul className="space-y-4 mx-2 px-2">
                <li className="flex items-center">
                    <span className="h-8 w-8 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                    </span>
                    <NavLink to="#" className=" font-bold ml-1">Dashboard</NavLink>
                </li>
                <li className="flex items-center">
                    <span className="h-8 w-8 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                    </span>
                    <NavLink to="/admin/category" className=" ml-1">Category</NavLink>
                </li>
                <li className="flex items-center">
                    <span className="h-8 w-8 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="stroke-current ">
                            <line x1={18} y1={20} x2={18} y2={10} />
                            <line x1={12} y1={20} x2={12} y2={4} />
                            <line x1={6} y1={20} x2={6} y2={14} />
                        </svg>
                    </span>
                    <NavLink to="/admin/products" className=" ml-1">Products</NavLink>
                </li>
                <li className="flex items-center">
                    <span className="h-8 w-8 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    </span>
                    <NavLink to="/admin/user" className="ml-1">User</NavLink>
                </li>
                <li className="flex items-center">
                    <span className="h-8 w-8 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="stroke-current ">
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                        </svg>
                    </span>
                    <NavLink to="" className="ml-1">Comment</NavLink>
                </li>
                <li className="flex items-center">
                    <span className="h-8 w-8 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    </span>
                    <NavLink to="" className=" ml-1">Cart</NavLink>
                </li>
            </ul>
        </div>

    )
}

export default Sidebar
